import {TweenMax} from 'gsap';
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import header_origin from './components/header_origin.vue';
import product from './components/product_card.vue';
new Vue({
  el: "#contents",
  components: {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide,
    'header-origin':header_origin,
    'product':product
  },
});

let pos = window.pageYOffset ;
let anime_second = 0.5
window.onscroll = () => {
  pos = window.pageYOffset ;
  if (pos > 100) {
    console.log("超えた");
    TweenMax.to('.header',anime_second,{y: -40});
    TweenMax.to('.header__title',anime_second,{
      x:-200,
      opacity:0
    });
    TweenMax.to('.header__icons',anime_second,{x:200})
  }else {
    TweenMax.to('.header',anime_second,{y: 0});
    TweenMax.to('.header__title',anime_second,{
      x:0,
      opacity:1
    })
    TweenMax.to('.header__icons',anime_second,{x:0})
  }
}
