<script lang="ts">
	import cn from 'classnames';
	export let href;
	let clazz: string;
	export let secondary: boolean;
	export { clazz as class };
</script>

<a {href} class={cn(clazz, { secondary })}>
	<slot />
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

		&::before {
			content: '';
			position: absolute;
			height: 100%;
			width: 0;
			border-bottom: 2px solid var(--primary);
			transition: width 0.3s ease, left 0s linear;
			right: 0;
		}

		&:hover::before {
			width: 100%;
			left: 0;
			transition-delay: 0s, 0.3s;
		}
	}
</style>
