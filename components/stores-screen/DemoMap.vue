<template>
  <div class="demo-map">
    <div class="demo-map__back">
      <div class="mark-center__block">

        <v-popover v-for="point in warehousesList"
                   class="mark-center__item"
                   :class="point.className"
                   offset="-30"
                   placement="bottom"
        >
          <svg class="tooltip-target" width="60" height="94" viewBox="0 0 60 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 63.9242V0L29.94 29.2225L59.88 0V63.9242L29.94 93.1467L0 63.9242Z" fill="black"/>
          </svg>

          <template slot="popover">
            <div class="tooltip-content" v-html="generateMessage(point)"></div>
          </template>
        </v-popover>

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
      container: '',
    }
  },

  methods: {
    generateMessage(data) {
      return `<p class="mark-center__item-title">${data.popTitle}</p><p class="mark-center__item-text">${data.popText}</p>`;
    },
  },

  mounted() {
    this.container = document.querySelector('.mark-center__block');

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
        cursor: pointer;

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

        &:hover {
            & path {
                fill: $primary;
            }
        }

        & path {
            transition: all 0.2s ease;
        }
    }

    .mark-center__item-title {
        margin: 0 0 7px;
        font-size: 24px;
        line-height: 120%;
        font-weight: 600;
    }

    .mark-center__item-text {
        margin: 0;
        font-size: 16px;
        line-height: 140%;
        font-weight: 600;
    }

    .tooltip {
        display: block !important;
        z-index: 10000;

        .tooltip-inner {
            background: $white;
            color: $black;
            border-radius: 8px;
            padding: 18px 23px;
            box-shadow: 0 5px 17px rgb(0 0 0 / 23%);
        }

        .tooltip-arrow {
            width: 0;
            height: 0;
            border-style: solid;
            position: absolute;
            margin: 5px;
            border-color: $white;
            z-index: 1;
        }

        &[x-placement^="top"] {
            margin-bottom: 5px;

            .tooltip-arrow {
                border-width: 5px 5px 0 5px;
                border-left-color: transparent !important;
                border-right-color: transparent !important;
                border-bottom-color: transparent !important;
                bottom: -5px;
                left: calc(50% - 5px);
                margin-top: 0;
                margin-bottom: 0;
            }
        }

        &[x-placement^="bottom"] {
            margin-top: 5px;

            .tooltip-arrow {
                border-width: 0 5px 5px 5px;
                border-left-color: transparent !important;
                border-right-color: transparent !important;
                border-top-color: transparent !important;
                top: -5px;
                left: calc(50% - 5px);
                margin-top: 0;
                margin-bottom: 0;
            }
        }

        &[x-placement^="right"] {
            margin-left: 5px;

            .tooltip-arrow {
                border-width: 5px 5px 5px 0;
                border-left-color: transparent !important;
                border-top-color: transparent !important;
                border-bottom-color: transparent !important;
                left: -5px;
                top: calc(50% - 5px);
                margin-left: 0;
                margin-right: 0;
            }
        }

        &[x-placement^="left"] {
            margin-right: 5px;

            .tooltip-arrow {
                border-width: 5px 0 5px 5px;
                border-top-color: transparent !important;
                border-right-color: transparent !important;
                border-bottom-color: transparent !important;
                right: -5px;
                top: calc(50% - 5px);
                margin-left: 0;
                margin-right: 0;
            }
        }

        &.popover {
            $color: #f9f9f9;

            .popover-inner {
                background: $white;
                color: black;
                padding: 18px 23px;
                border-radius: 8px;
                box-shadow: 0 5px 30px rgba(black, .1);
            }

            .popover-arrow {
                border-color: $white;
            }
        }

        &[aria-hidden='true'] {
            visibility: hidden;
            opacity: 0;
            transition: opacity .15s, visibility .15s;
        }

        &[aria-hidden='false'] {
            visibility: visible;
            opacity: 1;
            transition: opacity .15s;
        }
    }
</style>
