<script lang="ts">
  import Chip from "./Chip.svelte";
  export let notes: string[] = [];
</script>

<div class="chips">
  {#each notes as note}
    <Chip {note} />
  {/each}
</div>

<style lang="less">
  .chips {
    display: flex;
    gap: 10px;
    overflow-x: auto;
  }

  .chips:last-child {
    padding-right: 20px;
  }
</style>
