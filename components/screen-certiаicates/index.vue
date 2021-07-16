<template>
  <section class="certificate-screen">
    <div class="certificate-screen__inner container">

      <h2 class="certificate-screen__title part-title">
        Закупаем напрямую у производителей и
        <span class="part-title part-title--white"> даем вам низкие цены</span>
      </h2>

      <div class="certificate-screen__block">
        <div class="certificate-screen__item certificate-screen__item--logo">
          <div class="certificate-screen__header">
            <p class="certificate-screen__item-title">Прямые поставки от производителей</p>
            <a class="certificate-screen__link" href="">125 брендов</a>
          </div>

          <ul class="certificate-screen__block-inner logo-block">
            <li class="logo-block__item" v-for="logo in logoList">
              <img class=logo-block__img
                   :class="logo.className"
                   :src="`/brinex-landing-opt/img/${logo.imgSrc}`"
                   :alt="logo.alt">
            </li>
          </ul>
        </div>

        <div class="certificate-screen__item certificate-screen__item--certificates" @click="handleGallery">
          <p class="certificate-screen__item-title">Сертификаты от поставщиков</p>
        </div>
      </div>

      <div class="certificate-screen__pictures gallery" :class="{'shown': isGalleryShown}">
        <div class="container">
          <button class="gallery-btn" @click="handleGallery">← Назад</button>

          <p class="gallery__title">Сертификаты от поставщиков</p>

          <div class="gallery__container">
            <ul class="gallery__list">
              <li class="gallery__item" v-for="image in certificatesList">
                <div class="gallery__image-wrapper">
                  <img class="gallery__image" :src="`/brinex-landing-opt/img/${image.imgSrc}`" :alt="image.alt">
                </div>
                <p class="gallery__text">Сертификат соответствия</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import {logoList, certificatesList} from '@/helpers/certificates-items';

export default {
  name: 'CertificatesScreen',
  data() {
    return {
      logoList: logoList,
      certificatesList: certificatesList,
      isGalleryShown: false,
    }
  },

  methods: {
    handleGallery() {
      this.isGalleryShown = !this.isGalleryShown;
      document.body.classList.toggle('no-scroll');
      document.querySelector('.header').classList.toggle('header--fullscreen');
    }
  }
}
</script>

<style lang="scss">
  .certificate-screen {
      position: relative;
      background-image: $portalGradient;

      &::before {
          content: '';
          position: absolute;
          top: -2.5vw;
          z-index: 1;
          width: 100%;
          height: 6vw;
          transform: skewY(-2.5deg);
          background-color: $white
      }

      &::after {
          content: '';
          position: absolute;
          top: calc(100% - 2.2vw);
          z-index: 1;
          width: 100%;
          height: 6vw;
          transform: skewY(-2.5deg);
          background-color: $white
      }
  }

  .certificate-screen__inner {
      padding: 105px 56px 113px;
  }

  .certificate-screen__title {
      max-width: 960px;
      margin: 0 auto 50px
  }

  .certificate-screen__block {
      display: flex;
      justify-content: space-between;
  }

  .certificate-screen__item {
      display: flex;
      flex-wrap: wrap;
      width: calc((100% - 20px) / 2);
      padding: 24px;
      background-color: $white;
      border-radius: 8px;
      transition: all 0.2s ease;

      &--certificates {
          background-image: url("/img/certificates_back.jpg");
          background-repeat: no-repeat;
          background-position: right 0 bottom -150px;

          &:hover {
              transform: scale(1.04);
          }
      }
  }

  .certificate-screen__header {
      display: flex;
  }

  .certificate-screen__item-title {
      margin: 0 30px 56px 0;
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
  }

  .certificate-screen__link {
      align-self: flex-start;
      padding: 3px 23px 5px 20px;
      flex-shrink: 0;
      font-size: 14px;
      line-height: 130%;
      text-decoration: none;
      text-align: center;
      color: $black;
      background-image: url("/img/link-arrow-back.svg");
      background-repeat: no-repeat;
      background-position: center;
  }

  .certificate-screen__block-inner {
      width: 100%;
  }

  .logo-block {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0;
      padding: 0;
      list-style: none;
  }

  .logo-block__item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2px;
      background-color: $almostWhite;
      border-radius: 40px;
      border: 1px solid $gray3;
  }

  .logo-block__img {


      &--hankook {
          padding: 24px 15px;
      }

      &--yokohama {
          padding: 22px 32px;
      }

      &--continental {
          padding: 15px 24px 16px;
      }

      &--michelin {
          padding: 4px 28px 9px;
      }

      &--pirelli {
          padding: 19px 30px;
      }

      &--bridgestone {
          padding: 23px 27px;
      }

      &--goodyear {
          padding: 15px 26px;
      }

      &--nokian {
          padding: 12px 26px;
      }
  }

  .certificate-screen__pictures {
      position: fixed;
      top: 83px;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 6;
      width: 100vw;
      height: calc(100vh - 83px);
      transform: translate(100%);
      transition: transform 0.7s ease;

      &.shown {
          transform: translate(0);
      }

      & .container {
          padding: 0 56px;
      }
  }

  .gallery {
      padding: 30px 56px 0;
      background-color: $white;
  }

  .gallery-btn {
      font-size: 24px;
      line-height: 119%;
      background: none;
      border: none;
      cursor: pointer;
  }

  .gallery__title {
      max-width: 965px;
      margin: 0 auto 32px;
      font-family: "ALS Gorizont", "Trebuchet MS", sans-serif;
      font-weight: 600;
      font-size: 66px;
      line-height: 111%;
      text-align: center;
  }

  .gallery__container {
      height: calc(100vh - 290px);
      overflow: scroll;

      &::-webkit-scrollbar {
          width: 5px; height: 3px;
      }
      &::-webkit-scrollbar-button {
          background-color: $white;
      }
      &::-webkit-scrollbar-track {  background-color: #999;}
      &::-webkit-scrollbar-track-piece { background-color: #ffffff;}
      &::-webkit-scrollbar-thumb {
          height: 50px; background-color: $primary; border-radius: 3px;
      }
      &::-webkit-scrollbar-corner { background-color: #999;}
      &::-webkit-resizer { background-color: #666;}
  }

  .gallery__list {
      margin: 0;
      padding: 0;
      list-style: none;
      column-count: 2;
      column-gap: 32px;
  }

  .gallery__item {
      width: 100%;
      display: inline-block;
      transition: all 0.2s ease;

      &:hover {
          color: $primary;

          & .gallery__image-wrapper {
              border-color: $primary;
          }
      }
  }

  .gallery__image-wrapper {
      border-radius: 50px;
      border: 2px solid $almostWhite;
      overflow: hidden;
  }

  .gallery__image {
      display: block;
  }

  .gallery__text {
      margin: 20px 0 64px;
      font-size: 24px;
      line-height: 119%;
  }

</style>
