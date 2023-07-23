<script lang="ts">
  import { onMount } from "svelte";
  import type { CoffeeCard } from "./lib/types";
  import { fetchCard } from "./api/fetchCard";
  import CardsList from "./lib/components/CardsList.svelte";
  import AddButton from "./lib/components/AddButton.svelte";

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
        <CardsList {cardsData} />
      {/if}
      <AddButton {handleClick} />
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
</style>
