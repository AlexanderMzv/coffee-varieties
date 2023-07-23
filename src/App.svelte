<script lang="ts">
  import placeholder from "./assets/placeholder.svg";
</script>

<main>
  <div class="layout">
    <div class="list-screen">
      <div class="card-list">
        <div class="card">
          <img class="image" src={placeholder} alt="card" />
          <div class="description">
            <div class="origin">Guanacaste, Costa Rica</div>
            <div class="blend-name">Hello Bean</div>
            <div class="variety">Kaffa</div>
          </div>
        </div>
        <!--        <div class="card">-->
        <!--          <img class="image" src={placeholder} alt="card" />-->
        <!--          <div class="description">-->
        <!--            <div class="origin">Guanacaste, Costa Rica</div>-->
        <!--            <div class="blend-name">Hello Bean</div>-->
        <!--            <div class="variety">Kaffa</div>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <div class="card">-->
        <!--          <img class="image" src={placeholder} alt="card" />-->
        <!--          <div class="description">-->
        <!--            <div class="origin">Guanacaste, Costa Rica</div>-->
        <!--            <div class="blend-name">Hello Bean</div>-->
        <!--            <div class="variety">Kaffa</div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
      <button class="add-button">+</button>
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
</style>
