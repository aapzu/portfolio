<script context="module" lang="ts">
	export function load({ url }) {
		const currentPage = url.searchParams.get('p') || 'about';
		console.log(currentPage);
		return {
			props: { currentPage }
		};
	}
</script>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Page from '../components/Page.svelte';

	export let currentPage;

	let contentRef;

	type DivRef = HTMLDivElement | null;

	let sections: { about: DivRef; experience: DivRef; contact: DivRef } = {
		about: null,
		experience: null,
		contact: null
	};

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
			title: 'swappie',
			href: 'https://www.swappie.com',
			info: '03/21 – current'
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
			href: 'https://aapzu.github.io/resume/resume.pdf'
		}
	];

	let observer: IntersectionObserver;

	onMount(async () => {
		await new Promise((resolve) => {
			if (currentPage && currentPage in sections) {
				console.log('onMount', currentPage);
				console.log('scrollIntoView', currentPage);
				sections[currentPage].scrollIntoView();
				setTimeout(resolve, 1000);
			} else {
				resolve();
			}
		});
		observer = new IntersectionObserver(
			(entries) => {
				const current = entries.find((e) => e.isIntersecting);
				if (current) {
					console.log('element intersecting', current?.target.id);
					currentPage = current?.target.id;
				}
			},
			{
				root: contentRef,
				rootMargin: '0px',
				threshold: 0.5
			}
		);
		observer.observe(sections.about);
		observer.observe(sections.experience);
		observer.observe(sections.contact);
	});

	const onCurrentPageChange = (newCurrentPage) => {
		if (typeof window !== 'undefined' && currentPage) {
			console.log('onCurrentPageChange', newCurrentPage);
			const url = new URL(window.location.toString());
			const urlParams = new URLSearchParams(window.location.search);
			urlParams.set('p', newCurrentPage);
			url.search = urlParams.toString();
			window.history.replaceState({}, document.title, url.toString());
		}
	};

	$: onCurrentPageChange(currentPage);

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
		scroll-behavior: smooth;
	}

	.section {
		scroll-snap-align: start;
	}
</style>
