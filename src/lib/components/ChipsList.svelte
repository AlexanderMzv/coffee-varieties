<script lang="ts">
  import Chip from "./Chip.svelte";
  import { getChipColor } from "../utils";
  import { CHIPS_COLORS } from "../consts";
  export let notes: string[] = [];
</script>

<div id="horizontal-scroller" class="chips">
  {#each notes as note, index}
    <Chip {note} color={getChipColor({ colors: CHIPS_COLORS, index })} />
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
