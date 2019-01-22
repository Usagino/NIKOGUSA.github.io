<template lang="pug">
header
  .header
    .header__title
      h1 MIDORIYA NIKOGUSA
    .header__icons
      .header__icons__cart.header__icons__icon
        img(src="material/cart.svg")
      .header__icons__menu.header__icons__icon
        hr.header__icons__menu--bar1.header__icons__menu--bar
        hr.header__icons__menu--bar2.header__icons__menu--bar
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../stylesheet/_variable.scss";
header{
  position: fixed;
  z-index: 999;
  top: 0;
  .header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    height: 180px;
    width: 100vw;
    &__title{
      h1{
        font-weight: bold;
      }
    }
    &__icons{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      height: 100%;
      width: 120px;
      &__icon{
        background: white;
        height: 50px;
        width: 50px;
        box-shadow: 0px 3px 6px rgba(#1c1c1c, 0.23);
        border-radius: 50%;
      }
      &__cart{
        @include display-center;
        img{
          height: 20px;
          width: auto;
        }
      }
      &__menu{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &--bar{

          width: 40%;
          color: $black;
          content: "";
          display: inline-block;
          margin: 4px 0;
          border: solid 2px $black;
          border-radius: 5px;
        }
        &--bar1{

        }
        &--bar2{

        }
      }
    }
  }
}
</style>
