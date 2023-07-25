<script lang="ts">
  export let note: string;
  export let color: string;
</script>

<div class="chip" style="background-color: {color}">{note}</div>

<style lang="less">
  .chip {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 14px 30px 14px 30px;
    border-radius: 20px;

    white-space: nowrap;
    font-size: 20px;
    line-height: 24px;
  }
</style>
