<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit/types';

	export const prerender = true;
	export const load: Load = async ({ url }) => {
		const currentPage = url.searchParams.get('p');
		return {
			props: { currentPage }
		};
	};
</script>

<script lang="ts">
	import Header from '../components/Header.svelte';
	import Content from '../components/Content.svelte';
	import Footer from '../components/Footer.svelte';
	import type { Page } from '../constants';

	export let currentPage: Page;
</script>

<Header bind:currentPage />
<Content bind:currentPage />
<Footer bind:currentPage />
