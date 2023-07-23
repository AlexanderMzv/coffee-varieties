<script lang="ts">
  import ListScreen from "./lib/screens/ListScreen.svelte";
</script>

<main>
  <div class="layout">
    <ListScreen />
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
</style>
