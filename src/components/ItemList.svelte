<script>
  import cn from "classnames"
  import Item from "./Item.svelte"

  const MIN_TIMEOUT = 1500
  const MAX_TIMEOUT = 3000

  export let items
  export let itemAmount
  export let itemClass

  let next = itemAmount
  let currentItem = null

  const getTimeout = () => Math.random() * (MAX_TIMEOUT - MIN_TIMEOUT) + MIN_TIMEOUT
  const getNextItem = () => {
    const num = Math.floor(Math.random() * itemAmount - (currentItem !== null ? 1 : 0))
    if (currentItem !== null && num >= currentItem) {
      return num + 1
    }
    return num
  }

  const indexesToShow = [...Array(itemAmount)].map((_, i) => i)
  const cb = () => {
    const i = getNextItem()
    indexesToShow[i] = next
    currentItem = i
    next = (next + 1) % items.length
    setTimeout(cb, getTimeout())
  }
  setTimeout(cb, getTimeout())
</script>

<style>

</style>

{#each indexesToShow as i}
  <Item>{items[i]}</Item>
{/each}