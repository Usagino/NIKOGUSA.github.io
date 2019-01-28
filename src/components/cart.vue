<template lang="html">
  <div class="cart">
    <div class="cart__close">
      <span></span>
      <span></span>
    </div>
    <img class="cart--img" :src="img" alt="">
    <p class="cart--name">{{name}}</p>
    <p class="cart--count">1</p>
    <p class="cart--price">¥{{price}}</p>
  </div>
</template>

<script>
export default {
  props:{
    img: {},
		price:{},
		name:{}
  }
}
</script>

<style lang="scss" scoped>
@import "../stylesheet/_variable.scss";
.cart{
  padding: 2rem 0;
  border-top: 0.5px solid #ffffff;
  border-bottom: 0.5px solid #ffffff;
  display: grid;
  grid-template-columns: 0.5fr calc(120px + 2rem) 1.5fr 0.5fr 0.5fr;
  grid-template-rows: 1fr;

  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
  height: auto;
  &__close{
    position: relative;
    width: 30px;height: 30px;
    span{
      height: 3px;width: 100%;
      background: $white;
      position: absolute;
      top: 0;bottom: 0;
      left: 0;right: 0;
      margin: auto;
      border-radius: 20px;
      transform-origin: center center;

      &:nth-child(1){
        transform: rotate(45deg);
      }
      &:nth-child(2){
        transform: rotate(-45deg);
      }
    }
  }
  &--img{
    width: 120px;
    height: 120px;
  }
  &--count{
    text-align: center;
  }
  &--price{
    text-align: end
  }
  & > *{
    color: $white;
  }
}

</style>
