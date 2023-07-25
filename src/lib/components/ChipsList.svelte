<script lang="ts">
  import Chip from "./Chip.svelte";
  import { getChipColor } from "../utils";
  import {
    CHIPS_COLORS,
    HORIZONTAL_SCROLL_MODIFIER,
    TIME_BETWEEN_RENDERS,
  } from "../consts";
  export let notes: string[] = [];

  let requestId: number;

  const handleScrollChips = (event: WheelEvent) => {
    event.preventDefault();

    const scrollDirection = Math.sign(event.deltaY);
    const container = event.currentTarget as HTMLElement;

    const smoothScroll = (timestamp: number) => {
      if (!requestId) {
        requestId = timestamp;
      }

      const timeElapsed = timestamp - requestId;
      if (timeElapsed >= TIME_BETWEEN_RENDERS) {
        container.scrollBy(scrollDirection * HORIZONTAL_SCROLL_MODIFIER, 0);
        requestId = null;
      } else {
        requestAnimationFrame(smoothScroll);
      }
    };

    requestAnimationFrame(smoothScroll);
  };
</script>

<div class="chips" on:wheel={handleScrollChips}>
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
