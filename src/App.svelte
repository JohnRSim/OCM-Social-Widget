<script>
	import icoSearch from './assets/ico_search.svg';
	import icoArrow from './assets/ico_arrow.svg';

	//components
	import HeaderTabList from './lib/components/HeaderTabList.svelte';

	let searchActive = false;
</script>

<!-- Wrapper -->
<section>
	<!-- Component -->
	<article>
		<!-- Header -->
		<header>
			<fieldset>
				<!-- Label -->
				<legend><label for="socialUserSearch">Search:</label></legend>
				<!-- xLabel -->

				<!-- Search Field -->
				<div class="userSearchField" class:active="{searchActive}" style="background-image:url({icoSearch})">
					<input 
						id="socialUserSearch" 
						type="search" 
						placeholder="Search Network Users..." 
						on:focus="{() => {searchActive = true;}}"
						on:blur="{() => {searchActive = false;}}"/>
					<button style="background-image:url({icoArrow})"></button>
				</div>
				<!-- xSearch Field -->
			</fieldset>
		</header>
		<!-- xHeader -->

		<!-- Tabs-->
		<nav>
			<HeaderTabList
				on:tab="{(e) => {
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
				activeTab="Following" />
		</nav>
		<!-- Tabs-->

		<!-- Content -->
		<main>
			<ul>
				<!-- User List -->
				<li>
					<dl>
						<!-- Img Profile Info -->
						<dt>
							<figure>
								<img src="pic_trulli.jpg" alt="Trulli">
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







				<!--TMP-->
				
				<!-- User List -->
				<li>
					<dl>
						<!-- Img Profile Info -->
						<dt>
							<figure>
								<img src="pic_trulli.jpg" alt="Trulli">
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
				<!-- User List -->
				<li>
					<dl>
						<!-- Img Profile Info -->
						<dt>
							<figure>
								<img src="pic_trulli.jpg" alt="Trulli">
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
				<!-- User List -->
				<li>
					<dl>
						<!-- Img Profile Info -->
						<dt>
							<figure>
								<img src="pic_trulli.jpg" alt="Trulli">
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
				<!-- User List -->
				<li>
					<dl>
						<!-- Img Profile Info -->
						<dt>
							<figure>
								<img src="pic_trulli.jpg" alt="Trulli">
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
				<!-- User List -->
				<li>
					<dl>
						<!-- Img Profile Info -->
						<dt>
							<figure>
								<img src="pic_trulli.jpg" alt="Trulli">
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
				<!-- User List -->
				<li>
					<dl>
						<!-- Img Profile Info -->
						<dt>
							<figure>
								<img src="pic_trulli.jpg" alt="Trulli">
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
				<!--TMP-->
			</ul>
		</main>
		<!-- xContent -->
	</article>
	<!-- xComponent -->
</section>
<!-- xWrapper -->

<style>
	article {
		border-radius:26px 26px 20px 20px;
		box-shadow:0px 2px 4px  0px rgba(0,0,0,0.15);
		min-width:400px;
		min-height:100px;
		overflow: hidden;
	}

	legend {
		display: none;
	}

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
	
	.userSearchField:hover,
	.userSearchField.active {
		background-color:#fff;
		box-shadow:inset 0px 0px 2px 0px rgba(0,0,0,0.4),0px 1px 2px 0px rgba(0,0,0,0.1);
	}
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

	button {
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
	dl {
		display: flex;
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
		max-height:400px;
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
