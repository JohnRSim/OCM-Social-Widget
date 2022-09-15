<svelte:options tag="ocm-social-widget" />

<script>
	//svelte
	import { onMount } from 'svelte';

	//assets
	import icoSearch from './assets/ico_search.svg';
	import icoArrow from './assets/ico_arrow.svg';
	import icoEyeoff from './assets/ico_eyeoff.svg';
	import icoGlobe from './assets/ico_globe.svg';
	import icoLock from './assets/ico_lock.svg';
	import icoUser from './assets/ico_user.svg';
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
	let searchFieldActive = false;
	let ocmFieldActive = false;
	let userFieldActive = false;
	let passFieldActive = false;
	let flip = false;
	let searchField;
	let activeTab = 'Following';

	let requestedProfileImgs = [];
	let updatingFollow = [];
	$: isUpdatingFollow = [];
	let userProfilePhotos = {};
	$: userProfilePhotos = $sPeople.profilePhoto;

	//auth
	let username = '';
	let password = '';

	onMount(() => {
		/*
		const [promise, abort] = social.getPeople(null, $sUser.session.oce);

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
		});*/
	});

	/**
	 * login
	 **/
	 function login() {
		//get OCE session token
		const [promise, abort] = IDCS.login(username, password, 'https://1ABA33B6ED08480492BB2FB081CF85B2.cec.ocp.oraclecloud.com:443/urn:opc:cec:all');

		promise.then((oce) => {
			console.log('[OCE][Auth][Logged In][Token]',oce);

			//check if IDCS errored - 
			if (typeof(oce.error) !== 'undefined') {
				console.error('IDCS OCE Auth Error: ', oce.error);
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

			//get User Stats 
			let activeUserID = 16001;
			const [promiseStats, abortStats] = social.getUserStats(activeUserID, $sUser.session.oce);

			promiseStats.then((res) => {
				console.log('[getUserStats]',res);
				const stats = {
					followers: 0,
					following: 0,
					newConversations: 0,
				};
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
				//update stats
				sUser.updateStats(stats);
			});
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
</script>


<!-- Wrapper -->
<section>
	<!-- xFlipper -->
	<div class="widgetWrapper" class:flip="{flip}">
		<div class="widgetFlipper">
			<!-- Login -->
			<article class="loginWidget">
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
							placeholder="OCM Instance URL"
							on:focus="{() => {ocmFieldActive = true;}}"
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
							on:focus="{() => {userFieldActive = true;}}"
							on:blur="{() => {userFieldActive = false;}}"/>
					</div>
					<!-- xOCM OCM username -->

					<!-- OCM pasword -->
					<div class="field" class:active="{passFieldActive}" style="margin-bottom:10px; background-image:url({icoLock})">
						<input 
							autocapitalize="none" 
							enterkeyhint="next"
							id="password" 
							type="password" 
							placeholder="Password"
							bind:value="{password}"
							on:focus="{() => {passFieldActive = true;}}"
							on:blur="{() => {passFieldActive = false;}}"/>
					</div>
					<!-- xOCM pasword -->

					<div class="loginAction">
						<button on:click="{login}">Login</button>
					</div>
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
								on:focus="{() => {searchFieldActive = true;}}"
								on:blur="{() => {searchFieldActive = false;}}"/>
							<button style="background-image:url({icoArrow})" on:click="{() => { activeTab = 'Search'; }}"></button>
						</div>
						<!-- xSearch Field -->
					</fieldset>
				</header>
				<!-- xHeader -->

				<!-- Tabs --> 
				{#if ((activeTab !== 'Search') && (!searchField))}
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

				<!-- Content -->
				{#if (activeTab === 'Following')}
					<main>
						{#if ($sUser.stats.following === 0)}
							<div class="info">
								You have no connections
							</div>
						{:else}
						<ul>
							<!-- User List -->
							<li>
								<dl>
									<!-- Img Profile Info -->
									<dt>
										<figure>
											<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" alt="">
											<figcaption>Alfie McClagon</figcaption>
										</figure>
									</dt>
									<!-- xImg Profile Info -->
									
									<!-- Profile Data -->
									<dd>
										<b>User 1</b>
										<p>
											Lorem ipsum and content....
										</p>
									</dd>
									<!-- xProfile Data -->
								</dl>
							</li>
							<!-- xUser List -->
						</ul>
						{/if}
					</main>
				{:else if (activeTab === 'Followers')}
					<main>
						{#if ($sUser.stats.followers === 0)}
							<div class="info">
								You have no followers
							</div>
						{:else}
							users following
						{/if}
					</main>
				<!-- Search -->
				{:else}
					<main>
						<div class="info">
							Searching network
						</div>
					</main>
				{/if}
				<!-- xContent -->

			</article>
			<!-- xComponent -->
		</div>
	</div>
	<!-- Flipper -->

	<footer class:hidden="{!flip}" class:show="{flip}">
		<button class="logout" on:click="{() => { flip = false; }}">Logout</button>
	</footer>
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
		font-size:1.05em
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
		border-radius: 30px;
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
	}
	figure {
		margin:0px;
		padding:0px 10px;
	}
	dt figcaption {
		display: none;
	}
	dt img {
		width: 70px;
		height:70px;
		border-radius: 20px;
		overflow: hidden;
		background:#000;
		display: block;
		border:solid 3px #ECEEF0;
	}

	main {
		/*max-height:400px;*/
		overflow-y: auto;
		margin-right:10px;
		margin-top:10px;
		margin-bottom:10px;
	}

	 p {
		font-size:0.875em;
		padding:0px;
		margin:0px;
	 }
	 
::-webkit-scrollbar {
	display:block;
	width:8px;
}
  
::-webkit-scrollbar-thumb {
	background: #7C8B9A; 
	border-radius: 100px;
}



</style>
