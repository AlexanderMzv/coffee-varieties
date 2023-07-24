<script lang="ts">
  import { onMount } from "svelte";
  import type { CoffeeCard } from "../types";
  import { fetchCard } from "../api/fetchCard";
  import CardsList from "../../lib/components/CardsList.svelte";
  import AddButton from "../../lib/components/AddButton.svelte";

  let cardsData: CoffeeCard[] = [];
  let isLoading = false;

  const getCard = async () => {
    isLoading = true;
    const cardData = await fetchCard();
    isLoading = false;
    cardsData = [...cardsData, cardData] as CoffeeCard[];
  };

  onMount(() => {
    void getCard();
  });

  const handleClick = () => {
    void getCard();
  };
</script>

<div class="list-screen">
  {#if !!cardsData.length}
    <CardsList {cardsData} />
  {/if}
  <AddButton {handleClick} {isLoading} />
</div>

<style lang="less">
  @import (reference) "../../styles/global.less";

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
