<script lang="ts">
	import { blur } from 'svelte/transition';
	import Link from './Link.svelte';
	import Item from './Item.svelte';
	import ItemList from './ItemList.svelte';

	export let onPageClick;
	export let name = '';
	export let anchor;
	export let pages = [];
	export let description;
	export let links = [];
	export let items = [];
</script>

<div class="content">
	<div class="links" transition:blur>
		{#if items.length}
			<ItemList {items} itemClass="item" itemAmount={3} />
		{:else if links.length}
			{#each links as link, index}
				<Item {...link}>{link.title}</Item>
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
