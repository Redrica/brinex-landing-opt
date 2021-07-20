<template>
    <section class="options-screen container">
        <h2 class="options-screen__title part-title" ref="screen-title" @click="runAnimation">
            <span class="part-title--accent">Даем бонусы и скидки, </span>ценим долгосрочное партнерство
        </h2>
        <ul class="options-list">
            <li class="options-list__item"
                ref="list-item"
                v-for="(option, i) in $options.optionsList"
                :key="i">
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
                        <li class="options-list__list-item options-list__list-item--extra"
                            v-for="item in option.extraOptions">
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
import { optionsList } from '@/helpers/options-list';
const EXTRA_SPACE = 500;

export default {
    name: 'OptionsScreen',

  optionsList: optionsList,

    data() {
        return {
            animaStartY: 0,
        }
    },
    methods: {
        runAnimation() {
            const offset = window.innerHeight + window.pageYOffset - EXTRA_SPACE;

            if (offset >= this.animaStartY) {
                this.$refs['list-item'].forEach((it) => {
                    it.classList.add('animate');
                });
                window.removeEventListener('scroll', this.runAnimation);
            }
        }
    },

    mounted() {
        // TODO: проверять при загрузке, может там уже отскроллено до нужного момента
        this.animaStartY = this.$refs['screen-title'].getBoundingClientRect().y;
        window.addEventListener('scroll', this.runAnimation);
    },
}
</script>


<style lang="scss">
    @keyframes appearance {
        0% {

        }
        50% {
            transform: translateY(300px);
        }
        100% {
            transform: translateY(0);
        }

    }

    .options-screen {
        position: relative;
        z-index: 5;
        padding: 75px 56px 29px;

    }

    .options-screen__title {
        max-width: 900px;
        margin: 0 auto 38px;
    }

    .options-list {
        display: flex;
        align-items: flex-start;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .options-list__item {
        position: relative;
        width: 283px;
        margin-right: 12px;
        padding: 0 0 6px 0;
        background-color: $almostWhite;
        border-radius: 8px;
        overflow: hidden;
        transform: translate(0, 300px);
        opacity: 0;

        &.animate {
            opacity: 1;
            transform: translate(0, 0);
            transition: all 0.5s;
        }

        &:first-child {
            transition-delay: 0s;

            & .options-list__title-wrapper {
                background-image: linear-gradient(269.68deg, #95F9BF 0.27%, #C1FFE8 99.8%);
            }
        }

        &:nth-child(2) {
            transition-delay: 0.2s;

            & .options-list__title-wrapper {
                background-image: linear-gradient(269.68deg, #63F190 0.27%, #91F8BA 99.8%);
            }
        }

        &:nth-child(3) {
            transition-delay: 0.4s;

            & .options-list__title-wrapper {
                background-image: linear-gradient(269.68deg, #33E962 0.27%, #60F08D 99.8%);
            }
        }

        &:last-child {
            transition-delay: 0.6s;
            margin-right: 0;

            & .options-list__title-wrapper {
                background-image: linear-gradient(269.68deg, #03E134 0.27%, #2FE85D 99.8%);
            }
        }
    }

    .options-list__title-wrapper {
        margin-top: -7px;
        padding: 20px 17px 5px 14px;
        transform: skewY(-2deg);
    }

    .options-list__title {
        position: relative;
        z-index: 1;
        margin-top: 3px;
        margin-bottom: 10px;
        font-size: 34px;
        line-height: 96%;
        font-weight: 600;
        transform: skewY(2deg);
    }

    .options-list__subtitle {
        position: relative;
        z-index: 1;
        margin: 0;
        font-size: 16px;
        line-height: 25px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transform: skewY(2deg);
    }

    .options-list__list-item {
        margin-bottom: 18px;
        font-size: 20px;
        line-height: 140%;

        &--extra {
            font-weight: 600;
        }
    }

    .options-list__list {
        margin: 17px 0 0;
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
