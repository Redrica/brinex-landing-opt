<template>
  <section class="reviews-screen container">
    <h2 class="reviews-screen__title part-title">
      Отзывы наших клиентов
    </h2>
    <SwiperAbstraction class="reviews-screen__swiper reviews-list"
                       :swiper-options="swiperOptions">
      <template #slides>
        <div class="swiper-slide reviews-list__item"
             v-for="review in reviewsList"
        :key="review.id">
          <div class="reviews-list__logo-wrapper">
            <img :src="`/brinex-landing-opt/img/${review.logoSrc}`" :alt="review.logoAlt">
          </div>
          <div class="reviews-list__content">
            <blockquote>
              <p class="reviews-list__text">{{ review.text }}</p>
              <cite class="reviews-list__person">
                <span class="reviews-list__image-wrapper">
                   <svg v-if="review.imgSrc" width="54" height="66" viewBox="0 0 54 66" fill="none">
      <defs>
        <mask id='mask-1' x='0' y='0' width='54' height='66'>
          <path d="M47.0194 44.4031C37.0139 61.5005 19.9398 70.2554 8.8834 63.9577C-2.17303 57.6599 -3.02495 38.6944 6.98058 21.5969C16.9861 4.49947 34.0602 -4.25543 45.1166 2.04232C56.173 8.34006 57.025 27.3056 47.0194 44.4031Z" fill="#fff"/>
        </mask>
      </defs>
      <image width='54' height='66' :xlink:href='`/brinex-landing-opt/img/${review.imgSrc}`' mask='url(#mask-1)' />
    </svg>
                </span>
                <span  class="reviews-list__info-wrapper">
                  <span class="reviews-list__name">{{ review.name }}</span>
                  <span class="reviews-list__position">{{ review.position }}</span>
                </span>
              </cite>
            </blockquote>

          </div>
        </div>
      </template>
    </SwiperAbstraction>

    <ButtonArrow class="reviews-screen__button" button-text="Все отзывы"/>
  </section>

</template>

<script>
import { reviewsList } from '~/helpers/reviews-list';
import ButtonArrow from '~/components/common/ButtonArrow';
import SwiperAbstraction from '~/components/common/SwiperAbstraction';

export default {
  name: 'ReviewsScreen',
  components: {
    SwiperAbstraction,
    ButtonArrow
  },

  data() {
    return {
      reviewsList: reviewsList,
      swiperOptions: {
        // enabled: false,
        // speed: 3000,
        // freeMode: true,
        loop: true,
        slidesPerView: 3,
        // centeredSlides: true,
        spaceBetween: 48,
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
            slidesPerView: 3,
            spaceBetween: 48
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
      },
    }
  },

  // methods: {
  //   setSwiperEnableFlag() {
  //     this.swiperOptions.enabled = window.innerWidth <= 1024;
  //     },
  // },
  //
  // mounted() {
  //   // this.mySwiper.disable();
  //   this.setSwiperEnableFlag();
  //   window.addEventListener('resize', this.setSwiperEnableFlag);
  // },
  //
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.setSwiperEnableFlag);
  // },
}
</script>

<style lang="scss">
    .reviews-screen {
        padding: 50px 56px 0;
    }

    .reviews-screen__title {
        margin: 0 auto 35px;
    }

    .reviews-screen__button {
        margin: 59px auto 35px;
    }

    .reviews-list__item {
        max-width: 357px;
    }

    .reviews-list__logo-wrapper {
        display: flex;
        width: 100%;
        align-items: flex-end;
        height: 170px;
        margin-bottom: 20px;
        padding-right: 50px;
    }

    .reviews-list__content {
        padding-top: 72px;
        background-image: url("/brinex-landing-opt/img/big-arrows-right.svg");
        background-repeat: no-repeat;
        background-position: left top;
        font-size: 20px;
        line-height: 140%;
    }

    .reviews-list__image-wrapper {
        flex-shrink: 0;
        width: 54px;
        height: 66px;
        margin-right: 13px;
    }

    .reviews-list__person {
        display: flex;
    }

    .reviews-list__name {
        display: block;
        font-weight: 600;
        font-style: normal;
    }

    .reviews-list__position {
        display: block;
        font-size: 16px;
        line-height: 140%;
        font-style: normal;
    }

    #preloader {
        display: block;
        width: 100vmin;
        margin: 0 auto;
    }
</style>
