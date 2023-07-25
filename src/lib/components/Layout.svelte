<div class="layout">
  <slot />
</div>

<style lang="less">
  @import (reference) "../../styles/global.less";

  .layout {
    padding: 60px 8px;
  }

  @media (max-width: @mobile-screen-size) {
    .layout {
      padding: 30px 8px;
    }
  }
</style>
