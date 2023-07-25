<script lang="ts">
  import ListScreen from "./lib/screens/ListScreen.svelte";
  import Layout from "./lib/components/Layout.svelte";
</script>

<main>
  <Layout>
    <ListScreen />
  </Layout>
</main>

<style lang="less">
  main {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow-y: auto;
  }
</style>
