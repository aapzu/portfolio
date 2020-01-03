<script>
  import { blur } from "svelte/transition"
  import Link from "./Link.svelte"
  import Item from "./Item.svelte"
  import ItemList from "./ItemList.svelte"

  import cn from "classnames"

  export let onPageClick
  export let name = ""
  export let anchor
  export let pages = []
  export let description
  export let links = []
  export let items = []
</script>

<style>
  :root {
    --background: #010A43;
    --primary: #FF3F98;
    --secondary: #F3D3D3;
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .links {
    display: flex;
  }

  /* mobile */
  @media (max-width: 576px) {
    .links {
      flex-direction: column;
      text-align: center;
    }
  }
</style>

<div class="content">
  <div class="links" transition:blur>
      {#if items.length }
        <ItemList
          {items}
          itemClass="item"
          itemAmount={3}
        />
      {:else if links.length }
          {#each links as link, index}
            <Item className="item">
              <Link href={link.href}>{link.title}</Link>
            </Item>
          {/each}
      {/if}
  </div>
</div>
