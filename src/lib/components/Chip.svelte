<script lang="ts">
  export let note: string;
</script>

<div class="chip">{note}</div>

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

    // todo сделать разный цвет на каждую
    background-color: #dee6f1;
  }
</style>
