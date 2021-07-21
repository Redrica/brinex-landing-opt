<template>
    <section class="portal-screen">
        <div class="portal-screen__inner container">

            <ModalTemplate
                v-show="showModal"
                modal-name="modalPortal"
                :is-opened="showModal"
                @close="handleModal">

                <template #header>
                    {{ modalData.title }}
                </template>

                <template #body>
                    <VideoBlock :src="modalData.videoSrc"/>
                </template>
            </ModalTemplate>


            <h2 class="portal-screen__title part-title">
                <span class="part-title part-title--white">Решайте бизнес-задачи на портале Бринэкс. </span>Быстро. Удобно
            </h2>

            <ul class="portal-screen__list">
                <li class="portal-screen__item" v-for="item in portalFeatures">
                    <a class="portal-screen__link" href="" @click.prevent="handleModal(item)">
                        <icon class="portal-screen__icon portal-screen__icon--static" :name="item.iconName"></icon>
                        <icon class="portal-screen__icon portal-screen__icon--hover" :name="item.iconNameSolid"></icon>
                        <span v-html="item.title"></span>
                    </a>
                </li>
            </ul>

            <ButtonArrow class="portal-screen__button" button-text="Смотреть все" green-button />

            <VideoBlock width="1168" height="660"/>

            <p class="portal-screen__text">О портале для оптовых клиентов за 2 минуты</p>
        </div>
    </section>
</template>

<script>
import { portalFeatures } from '@/helpers/portal-features';
import ButtonArrow from '@/components/common/ButtonArrow';
import ModalTemplate from '@/components/common/ModalTemplate';
import VideoBlock from '@/components/common/VideoBlock';

export default {
    name: 'PortalScreen',

    components: {
        VideoBlock,
        ButtonArrow,
        ModalTemplate,
    },

    data() {
        return {
            portalFeatures: portalFeatures,
            showModal: false,
            modalData: {},
        }
    },

    methods: {
        handleModal(item) {
            this.showModal = !this.showModal;
            if (this.showModal) {
                this.modalData = {
                    title: item.title,
                    videoSrc: item.video,
                }
            }
        },
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
            transform: skewY(-2.1deg);
            background-color: $white
        }

        &::after {
            content: '';
            position: absolute;
            top: calc(100% - 2.2vw);
            z-index: 1;
            width: 100%;
            height: 6vw;
            transform: skewY(-2.1deg);
            background-color: $white
        }
    }

    .portal-screen__inner {
        padding: 115px 56px 113px;
    }

    .portal-screen__title {
        max-width: 1100px;
        margin: 0 auto;
    }

    .portal-screen__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 54px 0 -18px;
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
        margin-bottom: 9px;

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
        margin: 0 auto 60px;
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
        margin: 40px 0 0;
        font-size: 20px;
        line-height: 140%;
        text-align: center;
        color: $white;
    }
</style>
