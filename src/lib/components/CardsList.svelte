<script lang="ts">
  import Card from "./Card.svelte";
  import type { CoffeeCard } from "../types";

  export let cardsData: CoffeeCard[];
</script>

<div class="cards-list">
  {#each cardsData as card}
    <Card {card} />
  {/each}
</div>

<style lang="less">
  @import (reference) "../../styles/global.less";

  .cards-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: @mobile-screen-size) {
    .cards-list {
      gap: 10px;
    }
  }
</style>
