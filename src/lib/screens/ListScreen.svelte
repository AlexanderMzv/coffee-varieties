<script lang="ts">
  import { onMount } from "svelte";
  import type { CoffeeCard } from "../types";
  import { fetchCard } from "../../api/fetchCard";
  import CardsList from "../../lib/components/CardsList.svelte";
  import AddButton from "../../lib/components/AddButton.svelte";

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

<div class="list-screen">
  {#if !!cardsData.length}
    <CardsList {cardsData} />
  {/if}
  <AddButton {handleClick} />
</div>

<style lang="less">
  @mobile-screen-size: 600px;
  // todo вынести переменную наверх

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