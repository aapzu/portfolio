<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { blur } from 'svelte/transition';
	import Content from '../components/Content.svelte';
	import PageIndicator from '../components/PageIndicator.svelte';

	const name = 'aapeli haanpuu' as const;

	const pages = ['about', 'experience', 'contact'] as const;
	const descriptions: Record<typeof pages[number], string> = {
		about: 'what do I do?',
		experience: 'my work history',
		contact: 'how to contact me'
	};

	let currentPage: string;
</script>

<div class="header">
	<div class="description">
		<h2 transition:blur>{descriptions[currentPage] || currentPage}</h2>
	</div>
</div>
<Content bind:currentPage />
<div class="footer">
	<div class="left">
		<h1>{name}</h1>
	</div>
	<div class="right">
		<PageIndicator {currentPage} {pages} />
	</div>
</div>

<style lang="scss">
	.header {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 2;
		display: flex;
		justify-content: flex-end;
	}

	.description {
		height: 7.5rem;
		width: 30rem;
		border-color: var(--secondary);
		border-style: solid;
		border-width: 2px;
		border-left-width: 0;
		border-bottom-width: 0;
		align-self: flex-end;
		text-align: center;
		margin: 3rem 3rem 0 0;

		h2 {
			margin-top: 0.625rem;
		}
	}

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
			border-left: 0.125rem solid var(--secondary);
			border-bottom: 0.125rem solid var(--secondary);
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
		.header .description,
		.footer .left {
			height: 2rem;
			width: 15rem;
		}

		.header .description {
			margin: 1.5rem 1.5rem 0 0;
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

		.description h2 {
			font-size: 1rem;
			text-align: right;
			margin-right: 0.5rem;
			margin-top: 0.25rem;
		}
	}
</style>
