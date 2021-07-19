<template>
  <section class="stores-screen">
    <div class="stores-screen__content container">
      <h2 class="stores-screen__title part-title">
        <span class="part-title part-title--accent">Экономьте на сроках доставки </span>с нашей широкой сетью складов
      </h2>

      <p class="stores-screen__text stores-screen__text--first">Мы можем доставить вам товар максимально быстро, потому что: </p>
      <p class="stores-screen__text stores-screen__text--second">— У нас <span>6 распределительных центров</span> общей площадью 100 тыс. м<sup>2</sup></p>
      <p class="stores-screen__text stores-screen__text--third">— 217 <span>шинных центров</span> в ста городах </p>
    </div>

    <DemoMap/>

    <div class="stores-screen__promo promo-label">
      <svg class="promo-label__icon" width="53" height="91" viewBox="0 0 53 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.412842 60.8829L7.97813 18.7588L47.1285 0.133667L31.2414 42.954L52.2351 39.4727L10.4369 90.9963L17.813 55.4868L0.412842 60.8829Z" fill="white"/>
      </svg>

      <div class="promo-label__wrapper">
        <p class="promo-label__title">день в день</p>
        <p class="promo-label__text">доставка по всей России</p>
      </div>
    </div>
  </section>
</template>

<script>
import DemoMap from '@/components/stores-screen/DemoMap';
export default {
  name: 'StoresScreen',
  components: { DemoMap }
}
</script>

<style lang="scss">

    .stores-screen {
        position: relative;
        padding: 63px 0 0;
    }

    .stores-screen__content {
        position: relative;
        z-index: 1;
        margin-bottom: -352px;
        padding-left: 56px;
    }

    .stores-screen__title {
        max-width: 752px;
        margin: 0 0 23px;

        &.part-title {
            text-align: left;
        }
    }

    .stores-screen__text {
        margin: 0 0 20px;
        font-size: 28px;
        line-height: 130%;

        &--first {
            max-width: 626px;
        }

        &--second {
            max-width: 590px;
        }

        &--third {
            max-width: 550px;
        }
    }


    .stores-screen__promo {
        position: absolute;
        top: 56px;
        right: 5%;
    }
    .promo-label {
        position: absolute;
        display: flex;
        padding: 30px 29px 21px 102px;
        color: $white;
        background: radial-gradient(92.17% 256.68% at 93.91% 10.45%, #00C064 0%, #00965E 61.24%), #00965E;
        transform: skew(-9deg) rotate(-3deg);
    }

    .promo-label__wrapper {
        position: relative;
        transform: skew(9deg) rotate(3deg);
    }

    .promo-label__icon {
        position: absolute;
        top: 14px;
        left: 37px;

        & path {
            box-shadow: -3px -2px 0 0;
        }
    }

    .promo-label__title {
        max-width: 205px;
        margin: 0 0 11px;
        font-family: "ALS Gorizont", "Trebuchet MS", sans-serif;
        font-size: 51.4133px;
        line-height: 87.5%;
    }

    .promo-label__text {
        max-width: 175px;
        margin: 0;
        font-size: 21.41px;
        line-height: 130%;
    }

</style>
