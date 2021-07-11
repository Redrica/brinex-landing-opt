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

        <div class="slider">
            <div class="slider__item product-card" v-for="item in sliderCards">
                <div class="product-card__img-wrapper">
                    <img :src="`/img/${item.src}`" alt="">
                </div>
                <p class="product-card__text">
                    {{ item.name }}
                </p>
            </div>
        </div>

        <button-arrow class="catalog-screen__button" />
    </section>
</template>

<script>
import { catalogLinks, sliderCards } from '@/helpers/catalog-links.js';
import ButtonArrow from '@/components/catalog-screen/ButtonArrow';

export default {
    name: 'CatalogScreen',

    components: {
        ButtonArrow,
    },

    data() {
        return {
            catalogLinks: catalogLinks,
            sliderCards: sliderCards,
        }
    },

    methods: {
        getItemName(item) {
            if(!item.isLink) {
                return item.title;
            } else {
                return item.title.replace('@', ` ${item.quantity} `);
            }
        },
    }
}
</script>

<style src="~/assets/scss/catalog-screen/catalog-links.scss" lang="scss"></style>

<style lang='scss'>
    .catalog-screen {
        padding: 50px 0 0;
    }

    .catalog-screen__title {
        max-width: 965px;
        margin: 0 auto 30px;
    }

    .catalog-screen__links {
        margin-bottom: 40px;
    }

    .catalog-screen__button {
        margin: 65px auto 70px;
    }

//    slider mock

    .slider {
        display: flex;

        &__item {
            margin-right: 15px;
        }
    }

    .product-card {

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
