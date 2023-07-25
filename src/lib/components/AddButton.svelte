<script lang="ts">
  export let handleClick: () => void;
  export let isLoading: boolean = false;
</script>

<button
  class="add-button {isLoading ? 'loading' : ''}"
  on:click={handleClick}
  disabled={isLoading}
>
  <span class="button-label">
    {#if !isLoading}+{/if}
  </span>
</button>

<style lang="less">
  @import (reference) "../../styles/global.less";

  .add-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    border-radius: 50%;
    border: none;
    font-size: 40px;
    background-color: @black-color;
    color: @lightgrey-color;
  }

  .add-button:hover {
    color: @grey-color;
  }

  .add-button:disabled {
    pointer-events: none;
  }

  .loading {
    background-color: @gray-button-loading;
  }

  .button-label {
    transition: all 0.2s;
  }

  .loading::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    inset: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: @lightgrey-color;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }
</style>
