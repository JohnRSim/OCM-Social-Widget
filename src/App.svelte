<svelte:options tag="ocm-social-widget" />

<script>
	//svelte
	import { onMount } from 'svelte';
	//conf
	import OCMConf from './lib/config/oce.json';

	//assets
	import icoSearch from './assets/ico_search.svg';
	import icoArrow from './assets/ico_arrow.svg';
	import icoEyeoff from './assets/ico_eyeoff.svg';
	import icoGlobe from './assets/ico_globe.svg';
	import icoLock from './assets/ico_lock.svg';
	import icoUser from './assets/ico_user.svg';
	import icoCross from './assets/ico_cross.svg';
	import logo from './assets/logo_social.svg';
	
	//api
	import Auth from './lib/api/auth.js';
	import OCESocial from './lib/api/oce_social.js';
	import OCERemoteJSON from './lib/api/oce_remoteJSON.js';
	
	//components
	import  './lib/components/HeaderTabList.svelte';

	//stores
	import { user as sUser } from './stores/user.js';
	import { following as sFollowing } from './stores/following.js';
	import { followers as sFollowers } from './stores/followers.js';
	import { people as sPeople } from './stores/people.js';
	import { validate_each_argument } from 'svelte/internal';

	const social = new OCESocial();
	const OSN = new OCERemoteJSON();
	const IDCS = new Auth();

	//globals
	let isMounted = false;
	let searchFieldActive = false;
	let ocmFieldActive = false;
	let userFieldActive = false;
	let passFieldActive = false;
	let flip = false;
	let searchField;
	let activeTab = 'Following';
	let searching = false;
	let loginError = false;
	let loggedIn = false;

	let requestedProfileImgs = [];
	let updatingFollow = [];
	$: isUpdatingFollow = [];
	let userProfilePhotos = {};
	$: userProfilePhotos = $sPeople.profilePhoto;
	$: activeFollowers = ($sFollowers.activeFollowers.length > 0)?$sFollowers.activeFollowers:[];
	$: following = ($sFollowing.activeFollowing.length > 0)?$sFollowing.activeFollowing:[];
	$: userSearchResults = ($sPeople.searchResults.length > 0)?$sPeople.searchResults:[];

	//auth
	let username = '';
	let password = '';

	onMount(() => {
		isMounted = true;
	});

	/**
	 * login
	 **/
	 function login() {
		//get OCE session token
		const [promise, abort] = IDCS.login(username, password);

		promise.then((oce) => {
			console.log('[OCE][Auth][Logged In][Token]',oce);

			//check if IDCS errored - 
			if (typeof(oce.error) !== 'undefined') {
				console.error('IDCS OCE Auth Error: ', oce.error);
				loginError = true;
				//loginError();
				return;
			}

			//update session store
			sUser.updateSession(oce.access_token,'oce');

			//set sessionID if null set to active login to reuse throughout journey
			let sessionID = ($sUser.sessionID)? $sUser.sessionID: Date.now();

			//get conversation connection info
			const [promise, abort] = social.getConnectionInfo($sUser.session.oce, $sUser.useSessionRequests, sessionID);

			promise.then((connection) => {
				console.log('[connection]',connection);
				
				//set sessionID
				sessionID = ($sUser.useSessionRequests) ? sessionID : connection.apiRandomID;
				sUser.updateConnectionInfo(connection.languageLocale, connection.apiVersion, sessionID);
				//sUser.updateOCEVal('id',connection.id);

				//store user profile info
				sUser.updateProfileInfo(connection.user, 'oce');

				loggedIn = true;
				//flip to show social widget
				flip = true;

				//get all users following/followers
				userFollowing();
				userFollowers();
				
				//get User Stats 
				refreshUserStats();

			});
		}).catch((err) => {
			console.error('IDCS OCE Auth Error: ', err);
			loginError = true;
		});
	}

	/**
	 * refreshUserStats
	 * grab user stats
	 */
	function refreshUserStats() {
		console.log('[refreshUserStats]');

		const [promiseStats, abortStats] = social.getUserStats($sUser.profile.oce.id, $sUser.session.oce);

		promiseStats.then((res) => {
			//tpl
			const stats = {
				followers: 0,
				following: 0,
				newConversations: 0,
			};

			if ((res.items) && (res.items.length > 0)) {
				//prep stats for store
				res.items.forEach((v, i) => {
					if (v.name === 'FOLLOWERS_COUNT') {
						stats.followers = v.count;
					}
					if (v.name === 'FOLLOWING_COUNT') {
						stats.following = v.count;
					}
					if (v.name === 'NEW_CONVERSATIONS_COUNT') {
						stats.newConversations = v.count;
					}
				});
			}

			//update stats
			sUser.updateStats(stats);
		});
	}

	/**
	 * followUser
	 **/
	 function followUser(userID) {
		console.log('[followUser]',userID,updatingFollow);

		if (updatingFollow.indexOf(userID) >= 0) {
			return;
		}

		//show loading display
		updatingFollow.push(userID);
		isUpdatingFollow = updatingFollow;

		//init add follower
		const [promise, abort] = social.addToFollowers(userID, $sUser.session.oce, $sUser.sessionID);
		
		promise.then((follow) => {
			console.log('[followUser]', follow);

			//Add user to active user list
			sFollowing.addFollowingUser($sPeople.profile[userID]);	
			updatingFollow.splice(updatingFollow.indexOf(userID),1);
			isUpdatingFollow = updatingFollow;

			//refresh User Stats 
			refreshUserStats();
		});
	}

	/**
	 * unfollowUser
	 **/
	function unfollowUser(userID) {
		console.log('[unfollowUser]',userID,updatingFollow);

		if (updatingFollow.indexOf(userID) >= 0) {
			return;
		}

		//show loading display
		updatingFollow.push(userID);
		isUpdatingFollow = updatingFollow;
		
		
		const [promise, abort] = social.removeFollower(userID, $sUser.session.oce, $sUser.sessionID);
		
		promise.then((follow) => {
			console.log('[unfollowUser]', follow);
			
			//remove user from active user list
			sFollowing.removeFollowingUser(userID);
			updatingFollow.splice(updatingFollow.indexOf(userID),1);
			isUpdatingFollow = updatingFollow;

			//refresh User Stats 
			refreshUserStats();
		});
	}

	/**
	 * getProfileImg
	 * add user profile image to display
	 **/
	function retrieveProfileImg(userName) {
		console.log('retrieveProfileImg',userName)
		if (userProfilePhotos[userName]) {
			return userProfilePhotos[userName].img;
		} else {
			//no need to call multiple times
			if (requestedProfileImgs.indexOf(userName) === -1) {
				requestedProfileImgs.push(userName);
				//getProfileImage(accessToken,userName).then((imgUrl) => {
				//	sPeople.updateProfileImg(userName,imgUrl);
					
				//});
			}
		}
	}

	/**
	 * handleSubmit
	 * form submit empty 
	 */
	function handleSubmit() {

	} 
	
	/**
	 * userFollowing
	 * get all users following
	 */
	 function userFollowing() {
		console.log('[userFollowing]',$sUser.profile.oce);

		const [promise, abort] = social.getFollowingUsers($sUser.profile.oce.id, $sUser.session.oce);
	
		promise.then((res) => {
			console.log('userFollowing',res);
			sFollowing.addFollowing(res.items);
		});
	}

	/**
	 * userFollowers
	 * get all user followers
	 */
	function userFollowers() {
		console.log('[userFollowers]');

		const [promise, abort] = social.getFollowers($sUser.profile.oce.id, $sUser.session.oce);
	
		promise.then((res) => {
			console.log('userFollowers',res);
			sFollowers.addFollowers(res.items);
		});
	}

	/**
	 * setProperties
	 * Used for CustomElement
	 * @param node
	 * @param properties
	 */
	function setProperties(node, properties) {
		const applyProperties = () => {
			Object.entries(properties).forEach(([k, v]) => {
				node[k] = v;
			});
		};

		applyProperties();

		return {
			update(updatedProperties) {
				properties = updatedProperties;
				applyProperties();
			}
		};
	}

	/**
	 * searchUser
	*/
	function searchUser(action) {
		console.log('[searchUser]');
		if ((action === 'button') && (activeTab === 'Search')) {
			activeTab = 'Following'; 
			searchField = '';
			return;
		}

		//trigger searching display
		searching = true;

		//set search page
		activeTab = 'Search'; 
		
		//clear search results
		sPeople.updateVal('searchResults', []);

		//init username starts with search
		const searchVal = ((searchField) && (searchField.length > 0))?searchField.toLowerCase():null;
		
		const [promise, abort] = social.getPeople(searchVal, $sUser.session.oce);

		promise.then((res) => {
			console.log('[People]',res);
			//sUser.profileImg = red
			//items = res.items;

			if ((res) && (res.items)) {

				const profileImages = [];
				res.items.forEach((v, i) => {
					sPeople.updateProfileInfo(v);
					profileImages.push(v.id);
				});
				
				if ($sPeople.searchEnabled) {
					//items = $sPeople.availableProfiles;
				}
				
				sPeople.updateVal('searchResults', profileImages);

				//results ready - images will load after
				searching = false;

				//get Profile pic
				const [promise, abort] = OSN.getProfilePictureDataUri(profileImages, $sUser.session.oce, $sUser.sessionID);

				promise.then((profilePics) => {
					console.log('[getProfilePictureDataUri]',profilePics);
					profileImages.forEach((v, i) => {
						sPeople.updateProfileImg(profileImages[i], profilePics[i].returnValue);
					});

					//loadingCommentProfileImgs = true;
				});

				//peopleLoaded = true;
				
				//hasContent = true;
			}
		});
	}

	
	/**
	 * profilePhotoExists
	 **/
	 function profilePhotoExists(userID) {
		return ((typeof($sPeople.profilePhoto[userID]) !== 'undefined') && ($sPeople.profilePhoto[userID].img));
	}

	/**
	 * getProfileImg
	*/
	function getProfileImg(user) {
		//get Profile pic
		const [promise, abort] = OSN.getProfilePictureDataUri(user, $sUser.session.oce, $sUser.sessionID);

		promise.then((profilePics) => {
			console.log('[getProfilePictureDataUri]',profilePics);
			const profileImages = [];
			user.forEach((v, i) => {
				sPeople.updateProfileImg(user[i], profilePics[i].returnValue);
			});

			//loadingCommentProfileImgs = true;
		});
		return icoUser;
	}

	/**
	 * enter on searchfield
	 * ..lazy
	*/
	function onKeyPress(e) {
    	if (e.charCode === 13) searchUser();
  	};
</script>


<!-- Wrapper -->
<section class="bitmapbytes-socialWidget">
	<!-- xFlipper -->
	<div class="widgetWrapper" class:flip="{flip}">
		<div class="widgetFlipper">
			<!-- Login -->
			<article class="loginWidget" class:error="{loginError}">
				<header>
					<img width="300" src="{logo}" alt="BitmapBytes - OCM Social Widget" />
				</header>
				<form on:submit|preventDefault={handleSubmit}>
					<!-- OCM URL Field -->
					<div class="field" class:active="{ocmFieldActive}" style="background-image:url({icoGlobe})">
						<input 
							autocapitalize="none" 
							enterkeyhint="next"
							id="ocmInstanceURL" 
							type="search" 
							readonly
							value="{OCMConf.contentServer || ''}"
							placeholder="OCM Instance URL"
							on:focus="{() => { loginError = false; ocmFieldActive = true;}}"
							on:blur="{() => {ocmFieldActive = false;}}"/>
					</div>
					<!-- xOCM URL Field -->

					<div class="hr"><hr /></div>

					<!-- OCM username -->
					<div class="field" class:active="{userFieldActive}" style="margin-bottom:10px; background-image:url({icoUser})">
						<input 
							autocorrect="off" 
							autocapitalize="none" 
							autocomplete="username"
							enterkeyhint="next"
							id="username" 
							type="search" 
							placeholder="Username"
							bind:value="{username}"
							on:focus="{() => { loginError = false; userFieldActive = true;}}"
							on:blur="{() => {userFieldActive = false;}}"/>
					</div>
					<!-- xOCM OCM username -->

					<!-- OCM pasword -->
					<div class="field" class:active="{passFieldActive}" style="margin-bottom:10px; background-image:url({icoLock})">
						<input 
							autocapitalize="none" 
							enterkeyhint="next"
							autocomplete="current-password"
							id="current-password" 
							type="password" 
							placeholder="Password"
							bind:value="{password}"
							on:focus="{() => { loginError = false; passFieldActive = true;}}"
							on:blur="{() => {passFieldActive = false;}}"/>
					</div>
					<!-- xOCM pasword -->

					<!-- Actions -->
					<div class="loginAction">
						<button on:click="{login}">Login</button>
					</div>
					<!-- xActions -->
				</form>
			</article>
			<!-- xLogin -->

			<!-- Component -->
			<article class="socialWidget">
				<!-- Header -->
				<header>
					<fieldset>
						<!-- Label -->
						<legend><label for="socialUserSearch">Search:</label></legend>
						<!-- xLabel -->

						<!-- Search Field -->
						<div class="userSearchField" class:active="{searchFieldActive}" style="background-image:url({icoSearch})">
							<input 
								autocapitalize="none" 
								enterkeyhint="next"
								id="socialUserSearch" 
								type="search" 
								placeholder="Search Network Users..." 
								bind:value="{searchField}"
								on:keypress={onKeyPress}
								on:focus="{() => {searchFieldActive = true;}}"
								on:blur="{() => {searchFieldActive = false;}}"/>
							<button style="background-image:url({(activeTab === 'Search')?icoCross:icoArrow})" on:click="{() => { searchUser('button'); }}"></button>
						</div>
						<!-- xSearch Field -->
					</fieldset>
				</header>
				<!-- xHeader -->

				<!-- Tabs --> 
				{#if (activeTab !== 'Search')}
					<nav>
						<!-- switch to custom element -->
						<header-tabs
							on:tab="{(e) => {
								activeTab = e.detail.name;
							}}"
							use:setProperties="{
								{ 
									hasTabs: [
										{
											'name': 'Following',
											'path': '/?tab=Tokens',
										},
										{
											'name': 'Followers',
											'path': '/?tab=NFTs',
										},
									],
									activeTab: activeTab
								}
							}" />
						<!--<HeaderTabList
							on:tab="{(e) => {
								activeTab = e.detail.name;
								//goto(e.detail.path, { replaceState: true, noscroll: true });
							}}"
							hasTabs="{[
								{
									name: 'Following',
									path: `/?tab=Tokens`,
								},
								{
									name: 'Followers',
									path: `/?tab=NFTs`,
								},
							]}"
							activeTab="{activeTab}" />-->
					</nav>
				{/if}
				<!-- Tabs-->
				
				<!--Content -->
				{#if (loggedIn)}
					<!-- Following -->
					{#if (activeTab === 'Following')}
						<main>
							{#if ($sUser.stats.following === 0)}
								<div class="info">
									You have no connections
								</div>
							{:else}
								<ul>
									{#each following as user}
										<li>
											<dl>
												<!-- Img Profile Info -->
												<dt>
													<figure>
														{#if ((typeof($sPeople.profilePhoto[user]) !== 'undefined') && ($sPeople.profilePhoto[user].img))}
															<img src="{$sPeople.profilePhoto[user].img}" alt="{($sPeople.profile[user])?$sPeople.profile[user].displayName:''}" />
														{:else}
															<img src="{getProfileImg([user])}" alt="{$sFollowing.following[user].displayName}" />
														{/if}
														<figcaption>{$sFollowing.following[user].displayName}</figcaption>
													</figure>
												</dt>
												<!-- xImg Profile Info -->
												
												<!-- Profile Data -->
												<dd>
													<button on:click="{() => { unfollowUser(user) }}">Unfollow</button>
													<b>{$sFollowing.following[user].displayName}</b>
													<p class="email">
														{$sFollowing.following[user].eMailAddress}
													</p>
												</dd>
												<!-- xProfile Data -->
											</dl>
										</li>
									{/each}
								</ul>
							{/if}
						</main>
					<!-- Followers -->
					{:else if (activeTab === 'Followers')}
						<main>
							{#if ($sUser.stats.followers === 0)}
								<div class="info">
									You have no followers
								</div>
							{:else}
									<ul>
										{#each activeFollowers as user}
											<li>
												<dl>
													<!-- Img Profile Info -->
													<dt>
														<figure>
															{#if (profilePhotoExists(user))}
																<img src="{$sPeople.profilePhoto[user].img}" alt="{$sPeople.profile[user].displayName}" />
															{:else}
																<img src="{icoUser}" alt="{$sFollowers.followers[user].displayName}" />
															{/if}
															<figcaption>{$sFollowers.followers[user].displayName}</figcaption>
														</figure>
													</dt>
													<!-- xImg Profile Info -->
													
													<!-- Profile Data -->
													<dd>
														<button on:click="{() => { unfollowUser(user) }}">Unfollow</button>
														<b>{$sFollowers.followers[user].displayName}</b>
														<p class="email">
															{$sFollowers.followers[user].eMailAddress}
														</p>
													</dd>
													<!-- xProfile Data -->
												</dl>
											</li>
										{/each}
									</ul>
								{/if}
						</main>
					<!-- Search -->
					{:else}
						<main>
							{#if ((userSearchResults) && (userSearchResults.length > 0))}
								<ul>
									{#each userSearchResults as user}
										<li>
											<dl>
												<!-- Img Profile Info -->
												<dt>
													<figure>
														{#if (profilePhotoExists(user))}
															<img src="{$sPeople.profilePhoto[user].img}" alt="{($sPeople.profile[user])?$sPeople.profile[user].displayName:''}" />
														{:else}
															<img src="{icoUser}" alt="{($sPeople.profile[user])?$sPeople.profile[user].displayName:''}" />
														{/if}
														<figcaption>{($sPeople.profile[user])?$sPeople.profile[user].displayName:''}</figcaption>
													</figure>
												</dt>
												<!-- xImg Profile Info -->
												
												<!-- Profile Data -->
												<dd>
													{#if (!$sFollowing.following[user])}
														<button on:click="{() => { followUser(user) }}">Follow</button>
													{/if}

													<b>{($sPeople.profile[user])?$sPeople.profile[user].displayName:''}</b>
													<p class="email">
														{($sPeople.profile[user])?$sPeople.profile[user].eMailAddress:''}
													</p>
												</dd>
												<!-- xProfile Data -->
											</dl>
										</li>
									{/each}
								</ul>
							{:else}
								<div class="info">
									{#if (searching)}
										Searching...
									{:else}
										No users found.
									{/if}
								</div>
							{/if}
						</main>
					{/if}
				{/if}
				<!-- xContent -->
			</article>
			<!-- xComponent -->
		</div>
	</div>
	<!-- Flipper -->

	<!-- Footer Actions Panel -->
	<footer class:hidden="{!flip}" class:show="{flip}">
		<button class="logout" on:click="{() => { flip = false; }}">Logout</button>
	</footer>
	<!-- xFooter Actions Panel -->
</section>
<!-- xWrapper -->

<style>
	footer {
		display: flex;
		justify-content: right;
		opacity:0;
	}
	footer.hidden {
		visibility: hidden;
	}
	footer.show {
		visibility:visible;
		animation-name: show;
		animation-duration: 0.3s;
		animation-delay: 0.4s;
		animation-fill-mode: forwards;
	}
	@keyframes show {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
	}
	.logout {
		margin:20px;
		border:0px;
		cursor:pointer;
		border-radius: 100px;
		padding:6px 16px;
		font-weight:600;
		font-size:0.875em;
		transition: color 0.3s, background 0.3s;
		color:#BAC2CA;
	}
	
	.logout:hover {
		background:#F3F4F6;
		color:#403b52;
	}

	.widgetWrapper {
		background-color: transparent;
		width: 440px;
		height:618px;
		perspective: 1000px;
	}
	
	.widgetWrapper.flip .widgetFlipper {
		transform: rotateY(180deg);
	}

	.loginWidget, .socialWidget {
		position: absolute;
		width: 100%;
		height: 100%;
    	min-height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
	.socialWidget {
		display: flex;
		flex-direction: column;
  		transform: rotateY(180deg);
	}
	.socialWidget main {
		flex:1;
	}

	article {
		background:#fff;
		border-radius:26px 26px 20px 20px;
		box-shadow:0px 2px 4px  0px rgba(0,0,0,0.15);
		min-width:400px;
		min-height:100px;
		overflow: hidden;
		height:558px;
		position: relative;
	}
	.widgetFlipper {
		position: relative;
		width: 100%;
		height: 100%;
    	min-height: 100%;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}
	.info {
		border:solid 4px #F9FAFC;
		border-radius: 20px;
		padding:10px;
		margin:10px 20px;
		font-weight:bold;
		text-align: center;
		color:rgb(15 23 42);
	}
	legend {
		display: none;
	}

	.loginWidget {
	}

	.loginWidget header {
		text-align: center;
		margin:20px;
	}
	.loginWidget form {
		margin:20px;
	}


	.loginWidget .hr {
		height:6px;
		background:#F9FAFC;
		border-radius: 20px;
		margin:10px 0px;
	}
	.loginWidget .hr hr {
		display: none;
	}

	.loginAction {
		display: flex;
		justify-content: center;
	}
	.loginWidget button {
		border:0px;
		border-radius: 100px;
		background:#3F83D3;
		color:#fff;
		text-align: center;
		min-height: 48px;
		padding:0px 20px;
		font-weight:bold;
		letter-spacing: 1px;
		width:200px;
		cursor: pointer;
		transition: background 0.3s;
		font-size: 1.1em;;
	}
	.field,
	.userSearchField {
		display: flex;
		background:#F9FAFC;
		box-shadow:inset 0px 0px 2px 0px rgba(0,0,0,0.1);
		border-radius: 100px;
		padding-left:48px;
		background-repeat: no-repeat;
		background-size:26px;
		background-position:  10px center;
		transition: box-shadow 0.3s, background 0.3s;
	}
	.field {
		padding-right:10px
	}
	
	.field:hover,
	.field.active,
	.userSearchField:hover,
	.userSearchField.active {
		background-color:#fff;
		box-shadow:inset 0px 0px 2px 0px rgba(0,0,0,0.4),0px 1px 2px 0px rgba(0,0,0,0.1);
	}
	.field ::placeholder,
	.userSearchField ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
		color: #687889;
		font-weight: 600;
	}

	input {
		border:0px;
		background:0px;
		height:48px;
		font-weight:500;
		flex:1;
		font-size:1.05em;
        outline: none;
	}
	input:-webkit-autofill { 
		-webkit-background-clip: text;
	}
	.userSearchField button {
		width:48px;
		height:48px;
		border-radius: 50%;
		background: #8F9BA8;
		box-shadow:inset 0px 0px 0px 3px #7C8B9A;
		border:0px;
		background-repeat: no-repeat;
		background-size:30px;
		background-position:  center;
		cursor: pointer;
		/*transition: box-shadow 0.3s;*/
		transition: background 0.3s;
	}
	
	button:hover {
		/*box-shadow:inset 0px 0px 0px 50px #7C8B9A;*/
		background-color: #7C8B9A;
	}

	fieldset {
		border:0px;
		padding:6px 6px 10px;
		margin:0px;
	}
	nav {
		border-top:solid 0.5px #F5F5F5;
		border-bottom:solid 0.5px #F5F5F5;
		padding:6px 12px;
	}

	main ul {
		margin:0px 10px 10px 10px;
		padding:0px;
	}

	main li {
		list-style: none;
		border-bottom:solid 4px #F9FAFC;
	}
	main li:last-child {
		border:0px;
	}
	dl {
		display: flex;
		border-radius: 15px;
		background:#fff;
		transition: background 0.3s;
		padding:10px 0px
	}
	dl:hover {
		background:#f9fafc;
		cursor:pointer;
	}
	dd {
		flex:1;
		margin:0px;
		padding:0px;
    	text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
	}
	dd button {
		position: absolute;
		top:0px;
		right:10px;
		border:0px;
		border-radius: 40px;
		font-weight:400;
		font-size:0.75em;
		padding:4px 8px;
		cursor:pointer;
		box-shadow:inset 0px 0px 1px 0px rgba(0,0,0,0.15)
	}
	dd button:hover {
		color:#fff;
	}
	dd .email {
		display: none;
		font-size: 0.875em;
	}
	figure {
		margin:0px;
		padding:0px 10px;
	}
	dt figcaption {
		display: none;
	}
	dt img {
		width: 50px;
		height: 50px;
		border-radius: 14px;
		overflow: hidden;
		display: block;
		border:solid 3px #ECEEF0;
	}

	main {
		/*max-height:400px;*/
		overflow-y: auto;
		overflow-x:hidden;
		margin-right:10px;
	}

	 p {
		font-size:0.875em;
		padding:0px;
		margin:0px;
	 }
	.bitmapbytes-socialWidget {
		width: 440px;
		position: relative;
		margin: 20px auto;
	}
	.bitmapbytes-socialWidget ::-webkit-scrollbar {
		display:block;
		width:8px;
	}
	
	.bitmapbytes-socialWidget ::-webkit-scrollbar-thumb {
		background: #7C8B9A; 
		border-radius: 100px;
	}

	.bitmapbytes-socialWidget ::-webkit-scrollbar-button {
		width:8px;
		height:10px;
	}

	.loginWidget.error .field {
		box-shadow:inset 0px 0px 2px 0px red,0px 1px 2px 0px rgba(0,0,0,0.1);
	}
	.loginWidget.error {
		animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 1000px;
		box-shadow:inset 0px 0px 0px 2px red
	}
	@keyframes shake {
		10%, 90% {
			transform: translate3d(-1px, 0, 0);
		}
		
		20%, 80% {
			transform: translate3d(2px, 0, 0);
		}

		30%, 50%, 70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%, 60% {
			transform: translate3d(4px, 0, 0);
		}
	}

</style>
