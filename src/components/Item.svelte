<script lang="ts">
	import cn from 'classnames';
	import type { Item } from '../types';
	import Link from './Link.svelte';

	export let item: Item;
	const { href, title, secondary = false, info } = item;
</script>

<div class="item">
	<Link {href} {secondary}>
		{title}
	</Link>
	{#if info}
		<p class={cn('info', { secondary })}>
			{info}
		</p>
	{/if}
</div>

<style lang="scss">
	.item {
		position: relative;
		margin: 0 1rem;
		display: inline-block;
		font-size: 1.5rem;
		text-align: center;

		&:hover .info {
			top: 100%;
			opacity: 1;
		}
	}

	.info {
		white-space: nowrap;
		position: absolute;
		font-size: 1rem;
		margin-top: 0.5rem;
		top: calc(100% + 1rem);
		left: 50%;
		transform: translateX(-50%);
		opacity: 0;
		transition: top 0.2s ease, opacity 0.2s ease;
		overflow: hidden;
	}

	/* mobile */
	@media (max-width: 576px) {
		.item {
			font-size: 1rem;

			&:not(:first-child) {
				margin-top: 3rem;
			}
		}

		.info {
			opacity: 1;
			font-size: 0.75rem;
			height: 1.125rem;
			margin: calc(1.125rem / -3 * 2) 0 calc(1.125rem / -3);
		}

		.info.secondary {
			color: var(--secondary-color);
		}
	}
</style>
