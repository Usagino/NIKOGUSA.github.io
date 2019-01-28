import {TweenMax} from 'gsap';
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import inView from '../node_modules/in-view/dist/in-view.min.js';
import header_origin from './components/header_origin.vue';
import product from './components/product_card.vue';
import carticon from './components/carticon.vue';
import shop from './components/shop.vue';
import customer from './components/customer.vue';
import hidemenu from './components/hidemenu.vue';
import cart from './components/cart.vue';


let filename = window.location.href.match(".+/(.+?)\.[a-z]+([\?#;].*)?$")[1];
console.log(filename);

let tl = new TimelineMax();
Vue.use(VueCarousel);
let $ = require('jQuery');

new Vue({
  el: "#contents",
  components: {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide,
    'header-origin': header_origin,
    'product': product,
    'carticon': carticon,
    'shop': shop,
    'customer':customer,
    'hidemenu':hidemenu,
    'cart':cart,
  },
});
let header_speed = 0.2;
// <header>のアニメーション
inView('.products')
  .on('enter', el => {
    // TweenMax.to('.header', header_speed, {　y: -40　});
    TweenMax.to('.header__title', header_speed, {　x: -160,　opacity: 0　});
    TweenMax.to('.header__icons', header_speed, {　x: 100　});
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

let toggle = true;
$('.header__icons__menu').click(function(event) {
  if (toggle == true) {
    TweenMax.to('main',0.5,{ x:-400});
    TweenMax.to('.header__icons__menu--bar1',0.5,{y:6,rotation:90,borderColor:"#000000"});
    TweenMax.to('.header__icons__menu--bar2',0.5,{y:-6,borderColor:"#000000"});
    TweenMax.to('.header__icons__menu',0.5,{rotation:45});
    TweenMax.to('#cart',0.5,{fill:"#000000"});
    TweenMax.set('.hidemenu',{zIndex:10,delay : 0.5});
    toggle = false;
  }else {
    TweenMax.to('main',0.5,{ x:0});
    TweenMax.to('.header__icons__menu--bar1',0.5,{
      y:0,
      rotation:0,
      borderColor:"#ffffff"
    });
    TweenMax.to('.header__icons__menu--bar2',0.5,{
      y:0,
      borderColor:"#ffffff"
    });
    TweenMax.to('.header__icons__menu',0.5,{rotation:0});
    TweenMax.to('#cart',0.5,{fill:"#ffffff"});
    TweenMax.set('.hidemenu',{zIndex:-1});
    toggle = true;
  }
});
// TweenMax.set(".talk__wrap",{opacity:0});
if ($(".voice").length === 1) {
  inView('.talk__wrap')
    .on('enter', el => {
      el.classList.add('opacity');
    })
    .on('exit', el => {
      el.classList.remove('opacity');
    });
}

if(filename === "index"){
  console.log("hello");
  inView('.product')
    .on('enter', el => {
      el.classList.add('opacity');
    })
    .on('exit', el => {
      el.classList.remove('opacity');
    });
}
