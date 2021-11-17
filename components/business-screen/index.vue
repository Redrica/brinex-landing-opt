<template>
  <section class="business-screen container">

    <h2 class="business-screen__title part-title">
      Готовые решения для старта <span class="part-title part-title--accent"> и развития бизнеса</span>
    </h2>

    <div class="business-screen__tabs">
      <ul class="tabs">
        <li class="tabs__item"
            v-for="(tab, index) in $options.tabs"
            :class="{'tabs__item--active': activeTabIndex === index}"
            @click="activeTabIndex = index"
        >{{ tab }}
        </li>
      </ul>
    </div>

    <ul class="offers-list">
        <li class="offers-list__item"
            v-for="(offer, index) in $options.businessList[activeTabIndex]"
            :key="offer.id + index"
            :class="offer.className">
          {{ offer.text }}
        </li>
    </ul>

  </section>

</template>

<script>
import { tabs, businessList } from '~/helpers/business-list';

export default {
  name: 'BusinessScreen',

  tabs: tabs,
  businessList: businessList,

  data() {
    return {
      activeTabIndex: 0,
    }
  },

  mounted() {
    this.$options.businessList.forEach((it) => {
      it.map((item) => {
        item['id'] = (Math.random() * 1000).toFixed(0);
      })
    })
  }
}
</script>

<style lang="scss">
    .business-screen {
        padding: 100px 56px 138px;
    }

    .business-screen__title {
        max-width: 880px;
        margin: 0 auto 33px;
    }

    .business-screen__tabs {
        margin-bottom: 74px;
    }

    .tabs {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .tabs__item {
        position: relative;
        margin-right: 10px;
        padding: 0 10px 2px;
        font-family: "ALS Gorizont", "Trebuchet MS", sans-serif;
        font-size: 32px;
        line-height: 120%;
        border: 1px solid $white;
        cursor: pointer;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            border-bottom: 3px dotted $primaryDarker;
        }

        &--active {
            color: $primaryDarker;
            border-color: $primaryDarker;
            border-radius: 3px;

            &::after {
                content: none;
            }
        }

        &:hover {
            color: $primaryDarker;
        }

        &:last-child {
            margin-right: 0;
        }
    }

    .offers-list {
        position: relative;
        display: flex;
        justify-content: space-between;
        min-height: 270px;
        margin: 0;
        padding: 35px 10px 0 86px;
        list-style: none;
        color: $white;
        transform: rotate(-4deg);

        &::before,
        &::after {
            content: '';
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            padding-right: 80px;
            color: $primary;
            background-repeat: no-repeat;
        }

        &::before {
            content: 'Запуск бизнеса';
            top: 0;
            left: -29px;
            width: 748px;
            height: 252px;
            background-image: url("/brinex-landing-opt/img/business-list-img-1.svg");
        }

        &::after {
            content: 'Развитие';
            top: 0;
            right: -32px;
            width: 572px;
            height: 252px;
            background-image: url("/brinex-landing-opt/img/business-list-img-2.svg");
        }
    }

    @keyframes list-app {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .offers-list__item {
        position: relative;
        z-index: 1;
        max-width: 176px;
        padding-top: 56px;
        font-size: 16px;
        line-height: 140%;
        background-repeat: no-repeat;
        transform: rotate(4deg);
        animation: list-app 0.3s ease;

        &--wheel-bg {
            background-image: url("/brinex-landing-opt/img/wheel.svg");
        }

        &--site-bg {
            background-image: url("/brinex-landing-opt/img/site.svg");
        }

        &--logistics-bg {
            background-image: url("/brinex-landing-opt/img/logistics.svg");
        }

        &--grow-bg {
            background-image: url("/brinex-landing-opt/img/grow.svg");
        }

        &--percent-small-bg {
            background-image: url("/brinex-landing-opt/img/percent-small.svg");
        }

        &--gear-bg {
            background-image: url("/brinex-landing-opt/img/gear.svg");
        }

        &--online-bg {
            background-image: url("/brinex-landing-opt/img/online.svg");
        }

        &--truck-bg {
            background-image: url("/brinex-landing-opt/img/truck.svg");
        }

        &--box-bg {
            background-image: url("/brinex-landing-opt/img/box.svg");
        }

        &:first-child {
            margin-top: 8px;
        }

        &:nth-child(2) {
            margin-top: 8px;
        }

        &:nth-child(3) {
            margin-top: 11px;
            margin-right: 68px;
            margin-left: -14px;
        }

        &:nth-child(4) {
            margin-top: -5px;
        }
    }
</style>
