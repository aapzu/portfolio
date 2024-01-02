<script lang="ts">
	import cn from 'classnames';

	let gradientX = 30;
	let gradientY = 70;

	let clazz: string;
	export { clazz as class };
</script>

<main
	class={cn('page-background', clazz)}
	style="--gradient-location-x: {gradientX}%; --gradient-location-y: {gradientY}%;"
>
	<slot />
</main>

<style>
	:root {
		--gradient-a: #001d3d;
		--gradient-b: #003566;
		--gradient-location-x: 71%;
		--gradient-location-y: 49%;
		--background-color: var(--gradient-a);
	}

	main.page-background {
		display: flex;
		flex-direction: column;
		background: var(--background-color);
		background: radial-gradient(
			at var(--gradient-location-x) var(--gradient-location-y),
			var(--gradient-a) 0%,
			var(--gradient-b) 100%
		);
		height: 100%;
		width: 100%;
	}
</style>
