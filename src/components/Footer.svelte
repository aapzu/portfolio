<script lang="ts">
	import PageIndicator from '../components/PageIndicator.svelte';
	import type { Page } from '../constants';

	const name = 'aapeli haanpuu';

	export let currentPage: Page;
</script>

<div class="footer">
	<div class="left">
		<h1>{name}</h1>
	</div>
	<div class="right">
		<PageIndicator bind:currentPage />
	</div>
</div>

<style lang="scss">
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		position: fixed;
		bottom: 0;
		z-index: 2;
		width: 100%;

		.left {
			width: 30rem;
			height: 7.5rem;
			border-left: 0.125rem solid var(--secondary-color);
			border-bottom: 0.125rem solid var(--secondary-color);
			margin: 0 0 3rem 3rem;
			display: flex;
			align-items: flex-end;

			h1 {
				margin-bottom: 0.625rem;
			}
		}

		.right {
			margin: 0 3rem 3rem 0;
		}

		h1 {
			display: inline-block;
			text-align: center;
			width: 100%;
		}
	}

	/* mobile */
	@media (max-width: 576px) {
		.footer .left {
			height: 2rem;
			width: 15rem;
		}

		.footer {
			.left {
				margin: 0 0 1.5rem 1.5rem;

				h1 {
					font-size: 1.5rem;
					text-align: left;
					margin-left: 1rem;
					padding-bottom: 0.125rem;
					margin-bottom: 0.25rem;
				}
			}

			.right {
				position: fixed;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				margin: 0 1.5rem 0;
			}
		}
	}
</style>
