<script>
    export let href
</script>

<style>
    a {
        color: var(--primary);
        text-decoration: none;
        display: inline-block;
        position: relative;
    }
    a::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 0;
        border-bottom: 2px solid var(--primary);
        transition: width 0.3s ease, left 0s linear;
        right: 0;
    }
    a:hover::before {
        width: 100%;
        left: 0;
        transition-delay: 0s, 0.3s;
    }
</style>

<a href={href}>
    <slot></slot>
</a>