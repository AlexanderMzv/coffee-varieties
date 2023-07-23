<script lang="ts">
  export let handleClick: () => void;
</script>

<button class="add-button" on:click={handleClick}>+</button>

<style lang="less">
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
