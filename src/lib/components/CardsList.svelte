<script lang="ts">
  import Card from "./Card.svelte";
  import type { CoffeeCard } from "../types";

  export let cardsData: CoffeeCard[];
</script>

<div class="card-list">
  {#each cardsData as card}
    <Card {card} />
  {/each}
</div>

<style lang="less">
  @mobile-screen-size: 600px;
  // todo вынести переменную наверх

  .card-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: @mobile-screen-size) {
    .card-list {
      gap: 10px;
    }
  }
</style>
