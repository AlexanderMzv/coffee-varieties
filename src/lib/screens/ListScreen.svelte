<script lang="ts">
  import { onMount, setContext } from "svelte";
  import type { CoffeeCard } from "../types";
  import { fetchCard } from "../api/utils/fetchCard";
  import CardsList from "../../lib/components/CardsList.svelte";
  import AddButton from "../../lib/components/AddButton.svelte";
  import { UPDATE_IMAGE_LOADING_CONTEXT } from "../consts";
  import type { ImageLoadingContext } from "../types";

  let cardsData: CoffeeCard[] = [];

  let isCardDataLoading = false;
  let isImageLoading = false;
  $: isLoading = isCardDataLoading || isImageLoading;

  const updateImageLoading = (isLoadingValue: boolean) => {
    isImageLoading = isLoadingValue;
  };

  setContext<ImageLoadingContext>(UPDATE_IMAGE_LOADING_CONTEXT, {
    updateImageLoading,
  });

  const getCard = async () => {
    isCardDataLoading = true;
    const cardData = await fetchCard();
    isCardDataLoading = false;
    cardsData = [...cardsData, cardData] as CoffeeCard[];
  };

  const handleClick = () => {
    void getCard();
  };

  onMount(() => {
    void getCard();
  });
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
