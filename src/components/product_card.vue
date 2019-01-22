<template lang="pug">
.product
	.product__wrap
		.product__wrap__imgbox
			img(:src="img")
		.product__wrap__text
			p.product__wrap__text__price ¥ 3,700
			p.product__wrap__text__name 紅長寿梅 ( 鉢 作家 真山茜氏 )
			p.product__wrap__text__tag 盆栽
</template>

<script>
export default {
  props:{
    img: {}
  }
}
</script>

<style lang="scss" scoped>
@import "../stylesheet/_variable.scss";
.product {
    max-width: 350px;
    margin: 1rem 0;
    &__wrap {
        &__imgbox {
            img {
                width: 100%;
                border-radius: 1rem;
            }
        }
        &__text {
          display: inline-flex;
          flex-direction: column;
          justify-content: space-around;
          height: 100px;
          width: 100%;
          & > *{

          }
          &__price {
              color: #c62222;
          }
          &__name {
              }
          &__tag {
              font-size: 0.8rem;
              padding: 0.1rem 1rem;
              border: solid 0.5px #080808;
              display: inline-table;
              border-radius: 100px;
          }
        }
    }
}
</style>
