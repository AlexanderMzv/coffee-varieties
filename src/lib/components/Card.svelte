<script lang="ts">
  import type { CoffeeCard } from "../types";
  import placeholder from "../../assets/placeholder.svg";

  export let card: CoffeeCard;
</script>

<div class="card">
  <img class="image" src={placeholder} alt="card" />
  <div class="description">
    <div class="origin">{card.origin}</div>
    <div class="blend-name">{card.blend_name}</div>
    <div class="variety">{card.variety}</div>
  </div>
</div>

<style lang="less">
  @mobile-screen-size: 600px;
  // todo вынести переменную наверх

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
</style>