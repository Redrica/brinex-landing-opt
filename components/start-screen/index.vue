<template>
    <div class="start-screen" ref="start-screen">
        <div class="start-screen__inner">
            <div class="start-screen__content container">
                <p class="start-screen__title">Бринэкс — платформа для продавцов автотоваров</p>
                <a class="start-screen__link button button--large" href="" ref="main-link">
                    <span>Начать работу</span>
                </a>
            </div>
        </div>
        <video class="start-screen__back" src="~/assets/video/video_background_opt_first_screen_no_interface_brinex.mp4" muted autoplay loop></video>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import { mapActions } from 'vuex';

const OFFSET = 55;

export default {
    name: "StartScreen",
    components: {
        PageHeader,
    },

    methods: {
        ...mapActions(['setScrollLimit']),

        getScrollLimit() {
            return this.$refs['start-screen'].clientHeight - OFFSET;
        },

        setStickyButton() {
            if (window.pageYOffset >= OFFSET) {
                this.$refs['main-link'].classList.add('start-screen__link--sticky');
            } else if (window.pageYOffset < OFFSET) {
                this.$refs['main-link'].classList.remove('start-screen__link--sticky');
            }
        },
    },

    mounted() {
        this.setScrollLimit(this.getScrollLimit());
        // window.addEventListener('scroll', this.setStickyButton);
    }
}
</script>

<style lang="scss">
    @keyframes move {
        0% {

        }

    }
    .start-screen {
        position: relative;
        max-height: 708px;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            top: calc(100% - 2vw);
            z-index: 1;
            width: 100%;
            height: 6vw;
            transform: skewY(-2.1deg);
            background-color: $white
        }
    }

    .start-screen__inner {
        position: relative;
        z-index: 1;
    }

    .start-screen__content {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 322px 40px 110px 42px;
    }

    .start-screen__title {
        max-width: 620px;
        margin: 0;
        font-family: $gorizont;
        font-size: 67px;
        line-height: 111%;
        color: $white;
    }

    .start-screen__link {
        align-self: flex-end;

        &:hover {
            transform: scale(1.04);
        }

        &--sticky {
            position: fixed;
            z-index: 50;
            right: 25px;
            bottom: 25px;
        }
    }

    .start-screen__back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border: none;
    }

</style>
