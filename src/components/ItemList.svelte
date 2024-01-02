<script lang="ts">
	import Item from './Item.svelte';

	const MIN_TIMEOUT = 1500;
	const MAX_TIMEOUT = 3000;

	export let items: string[];

	export let itemAmount: number;
	export let i = 0;

	const randomItems = items.sort(() => Math.random() - 0.5);

	const getTimeout = () => Math.random() * (MAX_TIMEOUT - MIN_TIMEOUT) + MIN_TIMEOUT;

	const cb = () => {
		i = i + (1 % (randomItems.length - itemAmount));
		setTimeout(cb, getTimeout());
	};
	cb();

	let itemsToShow: string[];

	$: itemsToShow = randomItems.slice(i, i + itemAmount);

	itemsToShow = itemsToShow;
</script>

{#each itemsToShow as item (item)}
	<Item item={{ title: item }} />
{/each}
