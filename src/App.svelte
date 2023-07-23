<script lang="ts">
  import { onMount } from "svelte";
  import placeholder from "./assets/placeholder.svg";

  interface CoffeeCardDTO {
    id: number;
    uid: string;
    blend_name: string;
    origin: string;
    variety: string;
    notes: string;
    intensifier: string;
  }

  interface CoffeeCard extends Omit<CoffeeCardDTO, "notes"> {
    notes: string[];
  }

  const mapCardData = (card: CoffeeCardDTO): CoffeeCard => {
    return { ...card, notes: card.notes.split(", ") };
  };

  let cardsData: CoffeeCard[] = [];

  const fetchCard = async () => {
    const response = await fetch(
      "https://random-data-api.com/api/coffee/random_coffee",
    );
    if (response.ok) {
      const cardData = (await response.json()) as CoffeeCardDTO;
      const mappedCardData = mapCardData(cardData);

      cardsData = [...cardsData, mappedCardData];
    } else {
      console.error("Error loading data with status: ", response.status);
    }
  };

  onMount(() => {
    void fetchCard();
  });

  const handleClick = () => {
    void fetchCard();
  };
</script>

<main>
  <div class="layout">
    <div class="list-screen">
      {#if !!cardsData.length}
        <div class="card-list">
          {#each cardsData as card}
            <div class="card">
              <img class="image" src={placeholder} alt="card" />
              <div class="description">
                <div class="origin">{card.origin}</div>
                <div class="blend-name">{card.blend_name}</div>
                <div class="variety">{card.variety}</div>
              </div>
            </div>
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

  .card {
    position: relative;
    width: 500px;
    /* todo временно проставил height, убрать */
    height: 449px;
    background-color: white;
  }

  @media (max-width: @mobile-screen-size) {
    .card {
      width: 304px;
    }
  }

  .image {
    width: 500px;
    height: 242px;
    object-fit: cover;
    border-bottom: 1px solid #d9d9d9;
  }

  @media (max-width: @mobile-screen-size) {
    .image {
      width: 304px;
    }
  }

  .description {
    padding: 24px 0 24px 20px;

    .origin {
      color: #6d6d6d;
      margin-bottom: 16px;
    }

    .blend-name {
      margin-bottom: 8px;
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
    }

    .variety {
      margin-bottom: 20px;
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
