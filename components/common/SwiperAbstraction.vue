<template>
  <div class="swiper" v-swiper:myDirectiveSwiper="swiperOptions"
    @ready="onSwiperRedied"
    @click-slide="onSwiperClickSlide"
    @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
  >
    <div class="swiper-wrapper" :class="{'swiper-wrapper--linear-timing': isSmoothScrolling}">
      <slot name="slides"></slot>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"
         v-if="swiperOptions.pagination"></div>

    <template v-if="swiperOptions.navigation">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SwiperAbstraction',
  props: {
    swiperOptions: {
      type: Object,
      default: () => ({})
    },
    isSmoothScrolling: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onSwiperRedied(swiper) {
      // some code
    },
    onSwiperSlideChangeTransitionStart() {
      // some code
    },
    onSwiperClickSlide(index, reallyIndex) {
      // some code
    },
  },
  mounted() {
    // console.log('Current Swiper instance object myDirectiveSwiper', this.myDirectiveSwiper);
    // this.myDirectiveSwiper.destroy();
    // this.test();


    // console.log('Current Swiper instance object $swiper', this.$swiper);
  }
}
</script>

<style lang="scss" scoped>
    .swiper-wrapper.swiper-wrapper--linear-timing {
        transition-timing-function: linear;
    }

    .swiper-slide {
        box-sizing: border-box;
    }
</style>
