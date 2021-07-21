<template>
  <section class="catalog-screen">

    <h2 class="catalog-screen__title part-title">
      <span class="part-title part-title--accent">Укомплектуем ваш склад. </span>Более 30 000 разных товаров
    </h2>

    <div class="catalog-screen__links catalog-links">
      <ul class="catalog-links__wrapper">
        <li class="catalog-links__item"
            :class="`catalog-links__item--${item.name}`"
            v-for="item in catalogLinks"
        >
          {{ getItemName(item) }}
        </li>
      </ul>
    </div>

    <SwiperAbstraction class="catalog-screen__swiper" :swiper-options="swiperOptions" is-smooth-scrolling>
      <template #slides>
        <div class="swiper-slide slider__item product-card" v-for="item in sliderCards">
          <div class="product-card__img-wrapper">
            <img :src="`/brinex-landing-opt/img/${item.src}`" alt="">
          </div>
          <p class="product-card__text">
            {{ item.name }}
          </p>
        </div>
      </template>
    </SwiperAbstraction>

    <ButtonArrow class="catalog-screen__button" button-text="Весь каталог"/>
  </section>
</template>

<script>
import { catalogLinks, sliderCards } from '@/helpers/catalog-links.js';
import ButtonArrow from '@/components/common/ButtonArrow';
import SwiperAbstraction from '~/components/common/SwiperAbstraction';

export default {
  name: 'CatalogScreen',

  components: {
    ButtonArrow,
    SwiperAbstraction,
  },

  data() {
    return {
      catalogLinks: catalogLinks,
      sliderCards: sliderCards,
      swiperOptions: {
        autoplay: {
          delay: 1,
        },
        speed: 3000,
        freeMode: true,
        loop: true,
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 12,
        // pagination: {
        //   el: '.swiper-pagination',
        //   dynamicBullets: true
        // },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  },

  methods: {
    getItemName(item) {
      if (!item.isLink) {
        return item.title;
      } else {
        return item.title.replace('@', ` ${ item.quantity } `);
      }
    },
  }
}
</script>

<style src="~/assets/scss/catalog-screen/catalog-links.scss" lang="scss"></style>

<style lang='scss'>
    .catalog-screen {
        padding: 46px 0 0;
    }

    .catalog-screen__title {
        max-width: 965px;
        margin: 0 auto 32px;
    }

    .catalog-screen__links {
        margin-bottom: 47px;
    }

    .catalog-screen__button {
        margin: 49px auto 70px;
    }

    .catalog-screen__swiper {
        position: relative;

    }

    .product-card__img-wrapper {
        width: 285px;
        height: 285px;
        margin-bottom: 30px;
    }

    .product-card__text {
        font-family: "ALS Sirius", "Trebuchet MS", sans-serif;
        font-size: 17px;
        line-height: 120%;
    }
</style>
