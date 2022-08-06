<script lang="ts">
	import cn from 'classnames';
	import Underlined from './Underlined.svelte';
	export let href: string | undefined = undefined;
	let clazz: string | undefined = undefined;
	export let secondary = false;
	export { clazz as class };
</script>

<a {href} class={cn(clazz, { secondary })}>
	<Underlined>
		<slot />
	</Underlined>
</a>

<style lang="scss">
	a {
		color: var(--primary);
		text-decoration: none;
		display: inline-block;
		position: relative;

		&.secondary:not(:hover) {
			color: var(--secondary);
		}
	}
</style>
