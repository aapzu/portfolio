<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import Content from '../components/Content.svelte';
	import PageIndicator from '../components/PageIndicator.svelte';

	const name = 'aapeli haanpuu';

	const pages = ['about', 'experience', 'contact'] as const;
	const descriptions: Record<typeof pages[number], string> = {
		about: 'what do I do?',
		experience: 'my work history',
		contact: 'how to contact me'
	};

	let currentPage: string;

	onMount(() => {
		const hash = window.location.hash?.substring(1);
		if (hash && pages.includes(hash)) {
			console.log('onMount', hash);
			currentPage = hash;
		}
	});

	const onCurrentPageChange = (newCurrentPage) => {
		if (typeof window !== 'undefined' && currentPage) {
			console.log('onCurrentPageChange', newCurrentPage);
			window.location.hash = currentPage;
		}
	};

	$: onCurrentPageChange(currentPage);
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
		height: 120px;
		width: 500px;
		border-color: var(--secondary);
		border-style: solid;
		border-width: 2px;
		border-left-width: 0;
		border-bottom-width: 0;
		align-self: flex-end;
		text-align: center;
		margin: 48px 48px 0 0;

		h2 {
			margin-top: 10px;
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
			width: 500px;
			height: 120px;
			border-left: 2px solid var(--secondary);
			border-bottom: 2px solid var(--secondary);
			margin: 0 0 48px 48px;
			display: flex;
			align-items: flex-end;

			h1 {
				margin-bottom: 10px;
			}
		}

		.right {
			margin: 0 48px 48px 0;
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
			height: 32px;
			width: 240px;
		}

		.header .description {
			margin: 24px 24px 0 0;
		}

		.footer {
			.left {
				margin: 0 0 24px 24px;

				h1 {
					font-size: 24px;
					text-align: left;
					margin-left: 16px;
					padding-bottom: 2px;
					margin-bottom: 4px;
				}
			}

			.right {
				position: fixed;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				margin: 0 22px 0;
			}
		}

		.description h2 {
			font-size: 16px;
			text-align: right;
			margin-right: 8px;
			margin-top: 3px;
		}
	}
</style>
