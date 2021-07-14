<template>
  <section class="reviews-screen container">
    <h2 class="reviews-screen__title part-title">
      Отзывы наших клиентов
    </h2>

    <SwiperAbstraction class="reviews-screen__swiper reviews-list" :swiper-options="swiperOptions">
      <template #slides>
        <div class="swiper-slide reviews-list__item"
             v-for="review in reviewsList">
          <div class="reviews-list__logo-wrapper">
            <img :src="review.logoSrc" :alt="review.logoAlt">
          </div>
          <div class="reviews-list__content">
            <blockquote>
              <p>{{ review.text }}</p>
              <cite>
                <span class="reviews-list__image-wrapper">
                  <img v-if="review.imgSrc" :src="review.imgSrc" :alt="review.name">
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
        // speed: 3000,
        // freeMode: true,
        // loop: true,
        slidesPerView: 3,
        centeredSlides: true,
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
      }
    }
  },
}
</script>

<style lang="scss">
    .reviews-screen {
        padding: 50px 0 0;
    }

    .reviews-screen__title {
        margin: 0 auto 35px;
    }

    .reviews-screen__button {
        margin: 65px auto 70px;
    }
</style>
