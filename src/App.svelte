<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./lib/components/Card.svelte";
  import type { CoffeeCard } from "./lib/types";
  import { fetchCard } from "./api/fetchCard";

  let cardsData: CoffeeCard[] = [];

  const getCard = async () => {
    const cardData = await fetchCard();

    cardsData = [...cardsData, cardData] as CoffeeCard[];
  };

  onMount(() => {
    void getCard();
  });

  const handleClick = () => {
    void getCard();
  };
</script>

<main>
  <div class="layout">
    <div class="list-screen">
      {#if !!cardsData.length}
        <div class="card-list">
          {#each cardsData as card}
            <Card {card} />
          {/each}
        </div>
      {/if}
      <button class="add-button" on:click={handleClick}>+</button>
    </div>
  </div>
</main>

<style lang="less">
  @mobile-screen-size: 600px;

  main {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow-y: auto;
  }

  .layout {
    padding: 60px 8px;
  }

  @media (max-width: @mobile-screen-size) {
    .layout {
      padding: 30px 8px;
    }
  }

  .list-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  @media (max-width: @mobile-screen-size) {
    .list-screen {
      gap: 20px;
    }
  }

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

  .add-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    border-radius: 50%;
    border: none;
    font-size: 40px;
    background-color: #0c0c0e;
    color: #ececec;
  }

  .add-button:hover {
    color: #909090;
  }
</style>
