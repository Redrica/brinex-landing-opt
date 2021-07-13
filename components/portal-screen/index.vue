<template>
    <section class="portal-screen">


        <div class="portal-screen__inner container">

            <ModalTemplate
                v-show="showModal"
                :scrollable="true"
                :is-opened="showModal"
                @close="openModal">

                <template #header>
                    Наши правила по работе
                </template>

                <template #body>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis deserunt
                        doloremque ducimus eum facilis iure labore laborum, odio officia optio pariatur, placeat
                        quos rem, rerum sapiente sed temporibus velit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis deserunt
                        doloremque ducimus eum facilis iure labore laborum, odio officia optio pariatur, placeat
                        quos rem, rerum sapiente sed temporibus velit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis deserunt
                        doloremque ducimus eum facilis iure labore laborum, odio officia optio pariatur, placeat
                        quos rem, rerum sapiente sed temporibus velit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis deserunt
                        doloremque ducimus eum facilis iure labore laborum, odio officia optio pariatur, placeat
                        quos rem, rerum sapiente sed temporibus velit.
                    </p>
                </template>
            </ModalTemplate>


            <h2 class="portal-screen__title part-title">
                <span class="part-title part-title--white">Решайте бизнес-задачи на портале Бринэкс. </span>Быстро. Удобно
            </h2>

            <ul class="portal-screen__list">
                <li class="portal-screen__item" v-for="item in portalFeatures">
                    <a class="portal-screen__link" href="" @click.prevent="openModal">
                        <icon class="portal-screen__icon portal-screen__icon--static" :name="item.iconName"></icon>
                        <icon class="portal-screen__icon portal-screen__icon--hover" :name="item.iconNameSolid"></icon>
                        <span v-html="item.title"></span>
                    </a>
                </li>
            </ul>

            <ButtonArrow class="portal-screen__button" button-text="Смотреть все" green-button />

            <div class="portal-screen__video-container">
                <video ref="video" class="portal-screen__video" src="~/assets/video/video_background_opt_first_screen_no_interface_brinex.mp4" loop></video>

                <svg v-show="!videoOn" ref="play" class="portal-screen__play" width="119" height="143" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"  y="0px"
                     viewBox="0 0 125 150.1" style="enable-background:new 0 0 125 150.1;" xml:space="preserve">
<style type="text/css">
	.st0{fill-rule:evenodd;clip-rule:evenodd; fill: #06AA53; }
</style>
                    <g>
		<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="127.1798" y1="72.1525" x2="-2.813" y2="77.0306"
                        gradientTransform="matrix(1 0 0 -1 0 152)">
		<stop offset="0" style="stop-color:#038D44"/>
            <stop offset="1" style="stop-color:#25E753"/>
	</linearGradient>
                        <path class="st0" d="M0,0v150.1l125-75.1L0,0z M9.4,16.7v116.8l97.2-58.4L9.4,16.7z"/>
</g>
</svg>

            </div>

            <p class="portal-screen__text">О портале для оптовых клиентов за 2 минуты</p>
        </div>
    </section>
</template>

<script>
import { portalFeatures } from '@/helpers/portal-features';
import ButtonArrow from '@/components/common/ButtonArrow';
import ModalTemplate from '@/components/common/ModalTemplate';

export default {
    name: 'PortalScreen',

    components: {
        ButtonArrow,
        ModalTemplate,
    },

    data() {
        return {
            portalFeatures: portalFeatures,
            showModal: false,
            videoOn: false,
        }
    },

    methods: {
        openModal() {
            this.showModal = !this.showModal;
        },

        playVideo() {
            this.$refs['video'].play();
            this.videoOn = true;
        },

        pauseVideo() {
            if (!this.videoOn) {
                return;
            }

            this.$refs['video'].pause();
            this.videoOn = false;
        }
    },

    mounted() {
        this.$refs['play'].addEventListener('click', this.playVideo);
        this.$refs['video'].addEventListener('click', this.pauseVideo);
    },
}
</script>

<style lang="scss">
    .portal-screen {
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

    .portal-screen__inner {
        padding: 105px 56px 113px;
    }

    .portal-screen__title {
        max-width: 1100px;
        margin: 0 auto;
    }

    .portal-screen__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 70px 0 0;
        padding: 0 50px;
        list-style: none;
    }

    .portal-screen__item {
        width: calc((100% - 100px) / 3);
        margin-bottom: 70px;
        display: flex;
        flex-direction: column;

    }

    .portal-screen__link {
        position: relative;
        font-family: 'ALS Gorizont', 'Times New Roman', sans-serif;
        font-size: 32px;
        line-height: 120%;
        text-decoration: none;
        color: $white;

        & span {
            padding-bottom: 3px;
            border-bottom: 2px dashed transparentize($white, 0.5);
            transition: all 0.2s ease;
        }

        &:hover {
            & .portal-screen__icon--static {
                opacity: 0;
                transform: translateY(-4px);
            }

            & .portal-screen__icon--hover {
                opacity: 1;
                transform: translateY(-4px);
            }

            & span {
                border-bottom-color: $white;
            }
        }
    }

    .portal-screen__icon {
        display: block;
        margin-bottom: 15px;

        &--hover {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: transform 0.2s ease, opacity 0.2s ease 0.2s;
        }

        &--static {
            transition: transform 0.2s ease, opacity 0.2s ease 0.2s;

        }
    }

    .portal-screen__button {
        margin: 0 auto 50px;
    }

    .portal-screen__video-container {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
    }

    .portal-screen__video {
        display: block;
        width: 100%;
        height: auto;
    }

    .portal-screen__play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            transform: translate(-50%, -50%) scale(1.05);

            & path {
                fill: url('#SVGID_1_');
            }
        }
    }

    .portal-screen__text {
        margin: 20px 0 0;
        font-size: 20px;
        line-height: 140%;
        text-align: center;
        color: $white;
    }
</style>
