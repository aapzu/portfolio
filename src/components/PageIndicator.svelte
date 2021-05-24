<script lang="ts">
  import cn from "classnames"

  export let anchor
  export let onClick
  export let pages = []
</script>

<style lang="scss">
  .page-indicator {
  }

  .page-indicator > a {
    display: block;
    text-decoration: none;
    text-align: right;
    color: var(--secondary);
    font-size: 18px;
  }

  .page-indicator > a::after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background: var(--secondary);
    border-radius: 50%;
  }

  .page-indicator > a.selected {
    color: var(--primary);
  }

  .page-indicator > a.selected::after {
    background: var(--primary);
  }

  .page-indicator > a:not(:first-child) {
    margin-top: 14px;
  }

  @media (max-width: 576px) {
    .page-indicator {
      width: 10px;
    }

    .page-indicator a {
      font-size: 0;
    }

    .page-indicator > a::after {
      width: 8px;
      height: 8px;
    }
  }
</style>

<div class="page-indicator">
    {#each pages as page}
      <a
        class={cn({
                selected: anchor === page,
            })}
        href={`#${page}`}
      >
          {page}
      </a>
    {/each}
</div>