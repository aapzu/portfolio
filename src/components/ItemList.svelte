<script lang="ts">
	import Item from './Item.svelte';

	const MIN_TIMEOUT = 1500;
	const MAX_TIMEOUT = 3000;

	export let items: string[];
	export let itemAmount: number;

	let next = itemAmount;
	let currentItem: number | null = null;

	const getTimeout = () => Math.random() * (MAX_TIMEOUT - MIN_TIMEOUT) + MIN_TIMEOUT;
	const getNextItem = () => {
		const num = Math.floor(Math.random() * itemAmount - (currentItem !== null ? 1 : 0));
		if (currentItem !== null && num >= currentItem) {
			return num + 1;
		}
		return num;
	};

	const indexesToShow = [...Array(itemAmount)].map((_, i) => i);
	const cb = () => {
		const i = getNextItem();
		indexesToShow[i] = next;
		currentItem = i;
		next = (next + 1) % items.length;
		setTimeout(cb, getTimeout());
	};
	setTimeout(cb, getTimeout());
</script>

{#each indexesToShow as i}
	<Item item={{ title: items[i] }} />
{/each}
