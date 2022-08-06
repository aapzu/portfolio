<script lang="ts" context="module">
	export const Foo = 'bar';
</script>

<script lang="ts">
	import { blur } from 'svelte/transition';
	import type { Item as ItemType } from '../types';
	import Item from './Item.svelte';
	import ItemList from './ItemList.svelte';

	export let links: Array<ItemType> = [];
	export let items: Array<string> = [];
</script>

<div class="content">
	<div class="links" transition:blur>
		{#if items && items.length}
			<ItemList {items} itemAmount={3} />
		{:else if links.length}
			{#each links as link}
				<Item item={link} />
			{/each}
		{/if}
	</div>
</div>

<style lang="scss">
	:root {
		--background: #010a43;
		--primary: #ff3f98;
		--secondary: #f3d3d3;
	}

	.content {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.links {
		display: flex;
	}

	/* mobile */
	@media (max-width: 576px) {
		.links {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
