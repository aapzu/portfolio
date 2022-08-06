<script lang="ts">
	import '@fontsource/roboto-mono';
	import PageBackground from '../components/PageBackground.svelte';
</script>

<svelte:head>
	<title>Aapeli Haanpuu</title>
</svelte:head>

<PageBackground class="main-content">
	<slot />
</PageBackground>

<style lang="scss">
	:global {
		:root {
			--primary-color: #ed254e;
			--secondary-color: #eaf2ef;
		}

		.main-content {
			display: flex;
			flex-direction: column;
			background-color: var(--background);
			color: var(--primary-color);
			height: 100%;
			width: 100%;
		}

		html {
			height: 300%;
			margin-top: -100%;
		}

		body,
		#sapper {
			height: 100%;
		}

		body {
			margin: 0;
			font-family: 'Roboto Mono', sans-serif;
			line-height: 1.5;
			color: #ffffff;
			background-color: #333333;
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
			font-weight: 400;
			line-height: 1.2;
		}

		h1 {
			font-size: 2.25rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		a {
			color: inherit;
		}

		@media (min-width: 400px) {
			body {
				font-size: 1rem;
			}
		}
	}
</style>
