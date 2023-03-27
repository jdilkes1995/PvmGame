<template>
  <div class="home">
    <div class="container">
      <span class="home__pre-heading">Welcome to</span>
      <h1 class="home__heading">GAMEINSTINCT</h1>
      <span class="home__sub-heading">The clan that does it all</span>
      <div class="home__buttons">
        <button class="home__buttons-primary button">Action 1</button>
        <button class="home__buttons-secondary button">Action 2</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/global/breakpoints";
@import "@/global/colours";
.home {
  display: flex;
  align-items: center;
  text-align: left;
  background: url("@/assets/MainBg.png");
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center left;
  background-size: cover;
  @include tablet {
    background-position: left;
  }

  &__pre-heading,
  &__sub-heading {
    color: $primary-01;
    @include tablet {
      font-size: 22px;
    }
    @include desktop {
      font-size: 32px;
    }
  }

  &__pre-heading {
    text-transform: uppercase;
  }

  &__sub-heading {
    font-weight: 600;
  }

  &__heading {
    color: white;
    font-size: 30px;
    font-weight: 700;
    padding: 24px 0;
    @include tablet {
      font-size: 54px;
    }
    @include desktop {
      font-size: 64px;
    }
  }

  &__buttons {
    margin-top: 40px;
    .button {
      padding: 8px 24px;
      font-size: 16px;
      margin-right: 4px;
      @include tablet {
        font-size: 24px;
        margin-right: 16px;
      }
    }

    &-primary {
      background-color: $primary-01;
      color: black;
    }

    &-secondary {
      background-color: $secondary-01;
      color: white;
    }
  }
}
</style>
