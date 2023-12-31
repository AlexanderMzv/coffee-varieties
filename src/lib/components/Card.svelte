<script lang="ts">
  import type { CoffeeCard } from "../types";
  import placeholder from "../../assets/placeholder.svg";
  import ChipsList from "./ChipsList.svelte";
  import { onMount, onDestroy, getContext } from "svelte";
  import { fetchCardImage } from "../api/utils/fetchCardImage";
  import { UPDATE_IMAGE_LOADING_CONTEXT } from "../consts";
  import type { ImageLoadingContext } from "../types";

  export let card: CoffeeCard;

  let imageUrl: string;

  const { updateImageLoading } = getContext<ImageLoadingContext>(
    UPDATE_IMAGE_LOADING_CONTEXT,
  );

  const getImage = async () => {
    updateImageLoading(true);
    imageUrl = await fetchCardImage();
    updateImageLoading(false);
  };

  onMount(() => {
    void getImage();
  });

  onDestroy(() => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
  });
</script>

<article class="card">
  <div class="intensifier">{card.intensifier}</div>
  <img class="image" src={imageUrl ? imageUrl : placeholder} alt="card" />
  <div class="description">
    <div class="origin">{card.origin}</div>
    <div class="blend-name">{card.blend_name}</div>
    <div class="variety">{card.variety}</div>
    <ChipsList notes={card.notes} />
  </div>
</article>

<style lang="less">
  @import (reference) "../../styles/global.less";

  .card {
    position: relative;
    width: 500px;
    background-color: @white-color;
  }

  @media (max-width: @mobile-screen-size) {
    .card {
      width: 304px;
    }
  }

  .intensifier {
    position: absolute;
    right: 20px;
    top: 20px;

    font-size: 32px;
    color: @white-color;
    -webkit-text-stroke: 1px @gray-text-stroke;
    text-stroke: 1px @gray-text-stroke;
  }

  .image {
    width: 500px;
    height: 242px;
    object-fit: cover;
    border-bottom: 1px solid @gray-border;
  }

  @media (max-width: @mobile-screen-size) {
    .image {
      width: 304px;
    }
  }

  .description {
    padding: 24px 0 24px 20px;

    .origin {
      color: @gray-text;
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
