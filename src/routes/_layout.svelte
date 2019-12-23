<script>
    import "fullpage.js/dist/fullpage.css"
</script>
<style>
    :root {
        --background: #010A43;
        --primary: #FF3F98;
        --secondary: #F3D3D3;
    }

    main {
        display: flex;
        flex-direction: column;
        background-color: var(--background);
        color: var(--primary);
        height: 100%;
        width: 100%;
    }
</style>

<svelte:head>
    <title>Aapeli Haanpuu</title>
</svelte:head>

<main>
    <slot></slot>
</main>
