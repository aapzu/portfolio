<script lang="ts">
	import type { PageData } from './$types';

	import Header from '../components/Header.svelte';
	import Content from '../components/Content.svelte';
	import Footer from '../components/Footer.svelte';

	export let data: PageData;
</script>

<Header bind:currentPage={data.currentPage} />
<Content bind:currentPage={data.currentPage} />
<Footer bind:currentPage={data.currentPage} />
