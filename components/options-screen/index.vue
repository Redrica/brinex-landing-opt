<template>
    <section class="options-screen container">
        <h2 class="options-screen__title part-title">
            <span class="part-title--accent">Даем бонусы и скидки, </span>ценим долгосрочное партнерство
        </h2>

        <ul class="options-list">
            <li class="options-list__item" v-for="option in optionsList">
                <div class="options-list__title-wrapper">
                    <p class="options-list__title" v-html="option.title"></p>
                    <p class="options-list__subtitle">{{ option.condition }}</p>
                </div>

                <ul class="options-list__list">
                    <li class="options-list__list-item" v-for="item in option.options">
                        <icon class="options-list__list-icon" name="ok-sign"></icon>
                        {{ item }}
                    </li>
                    <template v-if="option.extraOptions.length">
                        <li class="options-list__list-item options-list__list-item--extra" v-for="item in option.extraOptions">
                            <icon class="options-list__list-icon" name="plus"></icon>
                            {{ item }}
                        </li>
                    </template>
                </ul>

            </li>
        </ul>
    </section>

</template>

<script>
import { optionsList } from '@/helpers/oprions-list';

export default {
name: "OptionsScreen",
    data() {
        return {
            optionsList: optionsList,
        }
    }
}
</script>

<style lang="scss">
    .options-screen {
        padding: 70px 56px;

    }

    .options-screen__title {
        max-width: 900px;
        margin: 0 auto 35px;
    }

    .options-list {
        display: flex;
        align-items: flex-start;
        padding: 0;
        list-style: none;
    }

    .options-list__item {
        position: relative;
        width: 283px;
        margin-right: 12px;
        padding: 0 0 12px 0;
        background-color: $almostWhite;
        border-radius: 8px;
        overflow: hidden;

        &:first-child {
            & .options-list__title-wrapper {
                background-image: linear-gradient(269.68deg, #95F9BF 0.27%, #C1FFE8 99.8%);
            }
        }

        &:nth-child(2) {
            & .options-list__title-wrapper {
                background-image: linear-gradient(269.68deg, #63F190 0.27%, #91F8BA 99.8%);
            }
        }

        &:nth-child(3) {
            & .options-list__title-wrapper {
                background-image: linear-gradient(269.68deg, #33E962 0.27%, #60F08D 99.8%);
            }
        }

        &:last-child {
            margin-right: 0;
            & .options-list__title-wrapper {
                background-image: linear-gradient(269.68deg, #03E134 0.27%, #2FE85D 99.8%);
            }
        }
    }

    .options-list__title-wrapper {
        margin-top: -7px;
        padding: 20px 17px 10px 14px;
        transform: skewY(-3deg);
    }

    .options-list__title {
        position: relative;
        z-index: 1;
        margin-bottom: 12px;
        font-size: 34px;
        line-height: 96%;
        font-weight: 600;
        transform: skewY(3deg);
    }

    .options-list__subtitle {
        position: relative;
        z-index: 1;
        margin-bottom: 0;
        font-size: 16px;
        line-height: 25px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transform: skewY(2.5deg);
    }

    .options-list__list-item {
        margin-bottom: 15px;
        font-size: 20px;
        line-height: 140%;

        &--extra {
            font-weight: 600;
        }
    }

    .options-list__list {
        margin-top: 20px;
        padding: 0 15px 0 38px;
        list-style: none;
    }

    .options-list__list-item {
        position: relative;
    }

    .options-list__list-icon {
        position: absolute;
        top: 5px;
        left: -23px;

        & path {
            fill: $primaryDarker;
        }
    }
</style>
