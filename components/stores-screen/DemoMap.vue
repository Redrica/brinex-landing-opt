<template>
  <div class="demo-map">

    <div class="demo-map__back">

      <div class="mark-center__block">
        <template v-for="point in warehousesList">
          <svg class="mark-center__item" :class="point.className" width="60" height="94" viewBox="0 0 60 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 63.9242V0L29.94 29.2225L59.88 0V63.9242L29.94 93.1467L0 63.9242Z" fill="black"/>
          </svg>
        </template>
      </div>


    </div>



  </div>
</template>

<script>
import {warehousesList, storesList} from '@/helpers/map-list';

export default {
  name: 'DemoMap',
  data() {
    return {
      warehousesList: warehousesList,
      storesList: storesList,
    }
  },
}
</script>

<style lang="scss">
    .demo-map {
        position: relative;
        width: 100%;
        height: 835px;
        background-repeat: no-repeat;
        background-position: left 0 bottom 0;
        overflow: hidden;
    }

    .demo-map__back {
        position: absolute;
        top: 0;
        left: 50%;
        width: 1413px;
        height: 835px;
        background-image: url("/brinex-landing-opt/img/map.jpg");
        transform: translateX(-41.5%);
    }

    @keyframes scale {
        0% {
            transform: scale(0);
        }

        100% {
            transform: scale(1);
        }
    }

    //.mark-center {
    //    transition: all 0.5s ease;
    //    fill: black;
    //    //animation: scale 1s infinite;
    //    cursor: pointer;
    //
    //    & path {
    //        transition: all 0.5s ease;
    //    }
    //
    //
    //    &:hover path {
    //        //transform: scale(1);
    //        fill: $primary;
    //    }
    //}


    .mark-center__block {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .mark-center__item {
        position: absolute;
        animation: scale 0.5s;

        &--A {
            bottom: 10%;
            left: 4.5%;
        }

        &--B {
            top: 41%;
            left: 17.5%;
        }

        &--C {
            bottom: 36%;
            left: 24%;
        }

        &--D {
            bottom: 28%;
            left: 8%;
        }

        &--E {
            bottom: 25%;
            left: 17%;
        }

        &--F {
            bottom: 15%;
            left: 45%;
        }
    }
</style>
