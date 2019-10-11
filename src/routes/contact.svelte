<script>
	import Page from "../components/Page.svelte"
	const links = [{
		title: "linkedin",
		href: "https://www.linkedin.com/in/aapeli-haanpuu",
	}, {
		title: "github",
		href: "https://github.com/aapzu",
	}, {
		title: "cv",
		href: "https://aapzu.github.io/resume/resume.pdf",
	}]
</script>

<style>

</style>

<svelte:head>
	<title>aapzu – contact</title>
</svelte:head>

<Page
	description="contact"
	{links}
/>

