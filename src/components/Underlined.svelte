<span class="underlined" role="presentation">
	<slot />
</span>

<style lang="scss">
	.underlined {
		position: relative;
		display: inline-block;

		&::before {
			content: '';
			position: absolute;
			height: 100%;
			width: 0;
			border-bottom: 2px solid var(--primary-color);
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
