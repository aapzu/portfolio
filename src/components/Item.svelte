<script lang="ts">
	import cn from 'classnames';
	import Link from './Link.svelte';

	export let href: string;
	export let secondary: boolean;
	export let info: string | undefined;
</script>

<div class="item">
	<Link {href} {secondary}>
		<slot />
	</Link>
	{#if info}
		<p class="info">
			{info}
		</p>
	{/if}
</div>

<style lang="scss">
	.info {
		position: relative;
		font-size: 16px;
		margin-top: 8px;
		top: 16px;
		opacity: 0;
		transition: top 0.2s ease, opacity 0.2s ease;
		overflow: hidden;
	}

	.item {
		margin: 0 16px;
		display: inline-block;
		font-size: 24px;
		text-align: center;

		&.secondary {
			color: var(--secondary);
		}

		&:hover .info {
			top: 0;
			opacity: 1;
		}
	}

	/* mobile */
	@media (max-width: 576px) {
		.item {
			font-size: 16px;

			&:not(:first-child) {
				margin-top: 24px;
			}
		}
	}
</style>
