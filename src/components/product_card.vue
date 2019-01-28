<template lang="pug">
.product
	a(href="product.html")
		.product__wrap
			.product__wrap__imgbox
				img(:src="img")
			.product__wrap__text
				p.product__wrap__text__price ¥{{price}}
				p.product__wrap__text__name {{name}}
				.product__wrap__text__tag
					p 盆栽
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
.product {
    max-width: 350px;
    margin: 1rem 0;
		padding: 1rem;
		border-radius: 1rem;
		background: white;
		box-shadow: 16px 16px 0px #00000020;
		transition: all .3s ease .1s;
		&:hover{
			cursor: pointer;
			transform: translateX(.5rem) translateY(.5rem);
			box-shadow: 0px 0px 0px #00000020;
		}
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
          height: auto;
          width: auto;
          & > *{
						padding: .3rem 0;
          }
          &__price {
              color: #c62222;
          }
          &__name {
              }
          &__tag {

              padding: 0.1rem 1rem;
              border: solid 0.5px #080808;
              display: inline-block;
              border-radius: 100px;
							width: 3rem;
							@include display-center;
							p{
								font-size: 0.8rem;
							}
          }
        }
    }
}
</style>
