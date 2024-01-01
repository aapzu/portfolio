<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Page from '../components/Page.svelte';
	import { PAGES } from '../constants';
	import type { Page as PageType } from '../constants';
	import { isPage } from '../utils';

	let contentRef: HTMLDivElement;

	type DivRef = HTMLDivElement | null;

	let sections: Record<PageType, DivRef> = {
		about: null,
		experience: null,
		contact: null
	};

	export let currentPage: PageType;

	const items = [
		'javascript',
		'css',
		'react.js',
		'web-development',
		'juggling',
		'express.js',
		'climbing',
		'typescript',
		'node.js',
		'origami',
		'html',
		'python',
		'redux.js',
		'java',
		'groovy',
		'es6',
		'martial arts'
	];
	const experienceLinks = [
		{
			title: 'hoxhunt',
			href: 'https://www.hoxhunt.com/',
			info: '08/22 – current'
		},
		{
			title: 'swappie',
			href: 'https://www.swappie.com',
			secondary: true,
			info: '03/21 – 08/22'
		},
		{
			title: 'gofore',
			href: 'https://www.gofore.com',
			secondary: true,
			info: '06/19 – 02/21'
		},
		{
			title: 'streamr',
			href: 'https://streamr.network',
			secondary: true,
			info: '08/14 – 05/19'
		}
	];
	const contactLinks = [
		{
			title: 'linkedin',
			href: 'https://www.linkedin.com/in/aapeli-haanpuu'
		},
		{
			title: 'github',
			href: 'https://github.com/aapzu'
		},
		{
			title: 'cv',
			href: 'https://docs.google.com/viewer?url=https://github.com/aapzu/resume/releases/latest/download/resume.pdf'
		}
	];

	let observer: IntersectionObserver;

	onMount(async () => {
		await new Promise<void>((resolve) => {
			if (currentPage && currentPage in sections) {
				sections[currentPage]?.scrollIntoView();
				setTimeout(resolve, 1000);
			} else {
				resolve();
			}
		});
		observer = new IntersectionObserver(
			(entries) => {
				const current = entries.find((e) => e.isIntersecting);
				const id = current?.target.id;
				if (current && isPage(id)) {
					currentPage = id;
				}
			},
			{
				root: contentRef,
				rootMargin: '0px',
				threshold: 0.5
			}
		);
		for (const el of Object.values(sections)) {
			if (el) {
				observer.observe(el);
			}
		}
	});

	const onCurrentPageChange = (newCurrentPage: PageType) => {
		if (typeof window !== 'undefined' && currentPage) {
			const url = new URL(window.location.toString());
			const urlParams = new URLSearchParams(window.location.search);
			urlParams.set('p', newCurrentPage);
			url.search = urlParams.toString();
			window.history.replaceState({}, document.title, url.toString());
		}
	};

	$: if (currentPage) {
		onCurrentPageChange(currentPage);
	}

	onDestroy(() => {
		observer?.disconnect();
	});
</script>

<div class="content" bind:this={contentRef}>
	<div class="section" id="about" bind:this={sections.about}>
		<Page {items} />
	</div>
	<div class="section" id="experience" bind:this={sections.experience}>
		<Page links={experienceLinks} />
	</div>
	<div class="section" id="contact" bind:this={sections.contact}>
		<Page links={contactLinks} />
	</div>
</div>

<style lang="scss">
	.content,
	.section {
		height: 100%;
	}

	.content {
		overflow: auto;
		scroll-snap-type: y mandatory;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.section {
		scroll-snap-align: start;
	}
</style>
