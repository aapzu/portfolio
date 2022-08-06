<script lang="ts">
	import cn from 'classnames';
	import { type Page, PAGES } from '../constants';
	import type { DOMEvent } from '../types';
	import Underlined from './Underlined.svelte';

	export let currentPage: Page;

	const onClick = (e: DOMEvent<MouseEvent, HTMLAnchorElement>) => {
		const href = e.currentTarget.getAttribute('href');
		if (!href) return;
		const section = document.querySelector(href);
		section?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<div class="page-indicator">
	{#each PAGES as page}
		<a
			class={cn({
				selected: currentPage === page
			})}
			href={`#${page}`}
			on:click|preventDefault={onClick}
		>
			<Underlined>
				{page}
			</Underlined>
		</a>
	{/each}
</div>

<style lang="scss">
	.page-indicator > a {
		display: block;
		text-decoration: none;
		text-align: right;
		color: var(--secondary-color);
		font-size: 1.125rem;
		white-space: nowrap;

		&::after {
			content: '';
			display: inline-block;
			width: 0.625rem;
			height: 0.625rem;
			background: var(--secondary-color);
			border-radius: 50%;
		}

		&.selected {
			color: var(--primary-color);

			&::after {
				background: var(--primary-color);
			}
		}

		&:not(:first-child) {
			margin-top: 0.875rem;
		}
	}

	@media (max-width: 576px) {
		.page-indicator {
			width: 0.625rem;

			> a {
				font-size: 0;

				&::after {
					width: 0.5rem;
					height: 0.5rem;
				}
			}
		}
	}
</style>
