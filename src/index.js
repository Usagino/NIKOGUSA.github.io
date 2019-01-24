import {TweenMax} from 'gsap';
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import $ from "jquery";
import inView from '../node_modules/in-view/dist/in-view.min.js';
import header_origin from './components/header_origin.vue';
import product from './components/product_card.vue';
let tl = new TimelineMax({repeat:-1});
Vue.use(VueCarousel);

new Vue({
  el: "#contents",
  components: {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide,
    'header-origin': header_origin,
    'product': product
  },
  methods: {
    hoge(){
      console.log("hoge");
      TweenMax('.header__icons__menu',1,{ x:200 });
  　}
  }
});

let header_speed = 0.2;
// <header>のアニメーション
inView('.products')
  .on('enter', el => {
    TweenMax.to('.header', header_speed, {　y: -40　});
    TweenMax.to('.header__title', header_speed, {　x: -160,　opacity: 0　});
    TweenMax.to('.header__icons', header_speed, {　x: 200　});
  })
  .on('exit', el => {
    TweenMax.to('.header', header_speed, {　y: 0　});
    TweenMax.to('.header__title', header_speed, { x: 0, opacity: 1 });
    TweenMax.to('.header__icons', header_speed, { x: 0 });

  });

// <products>の中に格納されてるDOMを取得してproductsに配列として代入している
let products = document.getElementsByClassName("product");
console.log(`要素は${products.length}コ`);

// <product>のtopからの座標を取得
let product_top_pos;
let product_pos = [];

// product_top_posという配列に座標を格納する
for (let n = 0; n < products.length; n++) {
  product_top_pos = products[n].getBoundingClientRect().top;
  product_pos.push(product_top_pos);
}

$('.header__icons__menu').on('click',()=> {
  TweenMax('.header__icons__menu', 0.5 ,{ x:200 });
});
