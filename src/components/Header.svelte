<script lang="ts">
	import { blur } from 'svelte/transition';
	import type { Page } from '../constants';

	const descriptions: Record<Page, string> = {
		about: 'what do I do?',
		experience: 'my work history',
		contact: 'how to contact me'
	};

	export let currentPage: Page;
</script>

<div class="header">
	<div class="description">
		<h2 transition:blur>{descriptions[currentPage]}</h2>
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
		height: 7.5rem;
		width: 30rem;
		border-color: var(--secondary-color);
		border-style: solid;
		border-width: 2px;
		border-left-width: 0;
		border-bottom-width: 0;
		align-self: flex-end;
		text-align: center;
		margin: 3rem 3rem 0 0;

		h2 {
			margin-top: 0.625rem;
		}
	}

	/* mobile */
	@media (max-width: 576px) {
		.header .description {
			height: 2rem;
			width: 15rem;
			margin: 1.5rem 1.5rem 0 0;
		}

		.description h2 {
			font-size: 1rem;
			text-align: right;
			margin-right: 0.5rem;
			margin-top: 0.25rem;
		}
	}
</style>
