<template lang="pug">
header
  .header
    .header__title
      a(href="index.html")
        h1 MIDORIYA NIKOGUSA
    .header__icons
      .header__icons__cart.header__icons__icon
        svg(version="1.1" id="cart" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" width="192" height="192")
          g(id="txt" class="st0" x="0" y="0")
            g(id="icon_00122" transform="translate(0,0)")
              g
                path(class="st0" d="M487.592,8.508V8.492H383.307l-21.748,82.682H0l51.516,196.211h0.348h257.998l-10.002,37.986H61.838l12.879,49.052H337.73l83.387-316.877h65.98c0.121,0.002,0.234,0.035,0.358,0.035c13.554,0,24.545-10.99,24.545-24.545C512,19.529,501.082,8.582,487.592,8.508z M89.359,238.332l-25.808-98.108h285.07l-25.811,98.108H89.359z")
                path(class="st0" d="M107.363,400.649c-28.355,0-51.426,23.07-51.426,51.43c0,28.36,23.07,51.43,51.426,51.43c28.328,0,51.375-23.07,51.375-51.43C158.738,423.719,135.692,400.649,107.363,400.649z")
                path( class="st0" d="M295.496,400.649c-28.359,0-51.43,23.07-51.43,51.43c0,28.36,23.07,51.43,51.43,51.43c28.328,0,51.375-23.07,51.375-51.43C346.871,423.719,323.824,400.649,295.496,400.649z")
      .header__icons__menu.header__icons__icon
        hr.header__icons__menu--bar1.header__icons__menu--bar
        hr.header__icons__menu--bar2.header__icons__menu--bar
</template>

<script>
// import carticon from './carticon.vue';
//
// export default {
//   components: {
//     'cart-icon': carticon
//   },
// }
</script>

<style lang="scss" scoped>
@import "../stylesheet/_variable.scss";
header{
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100vw;
  margin: auto;
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 180px;
    width: 80%;
    margin: auto;
    &__title{
      h1{
        padding: 0;
        border: none;
        border-radius: 0;
        outline: none;
        background: none;
        font-size: 2rem;
        font-family: 'Open Sans', sans-serif;
        color: $white;
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

        height: 50px;
        width: 50px;
      }
      &__cart{
        @include display-center;
        svg{
          fill:$white;
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
          color: $white;
          content: "";
          display: inline-block;
          margin: 4px 0;
          border: solid 2px $white;
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
