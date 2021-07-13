<template>
<!--    <transition name="modal-template">-->
        <div class="modal-template">

            <div class="modal-template__backdrop" @click="closeModal">

                <transition :name="transitionName">
                    <div class="modal-template__container" v-if="isOpened">

                        <div class="modal-template__content"
                             @click.stop
                             :class="{ 'modal-template--scrollable': scrollable,
                             'modal-portal': modalName === 'modalPortal'}">

                            <button class="modal-template__close" type="button" @click="closeModal">
                                <span class="visually-hidden">Закрыть окно</span>
                            </button>

                            <header class="modal-template__header">
                                <slot name="header"/>
                            </header>

                            <section class="modal-template-body">
                                <slot name="body"/>
                            </section>
                        </div>
                    </div>
                </transition>

            </div>
        </div>
<!--    </transition>-->
</template>

<script>
export default {
    name: 'ModalTemplate',
    props: {
        modalName: {
            type: String,
            default: '',
        },
        isOpened: {
            type: Boolean,
            default: false,
        },
        scrollable: {
            type: Boolean,
            default: false,
        }
    },

    computed: {
        transitionName() {

        },
    },

    methods: {
        closeModal() {
           this.$emit('close');
        },

        onEscCloseModal(evt) {
            if (this.isOpened && evt.key === 'Escape') {
                this.closeModal();
            }
        }
    },

    watch: {
        isOpened() {
            document.body.classList.toggle('no-scroll');
        },
    },

    mounted() {
        window.addEventListener('keydown', this.onEscCloseModal);
    },

    beforeDestroy() {
        window.removeEventListener('keydown', this.onEscCloseModal);
    },
}
</script>

<style lang="scss">
    .modal-template__backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($black, 0.3);
        transition: opacity 0.3s ease;
        z-index: 9999;
    }

    .modal-template--scrollable {
        // надо не высоту фиксить, а привязываться к высоте экрана, тк мобилки
        //height: 900px;
        //overflow-y: scroll;
    }

    .modal-template__container {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }



    .modal-template__content {
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding: 20px 30px;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;

        &.modal-portal {
            position: relative;
            max-width: 1280px;
            padding: 0 20px 60px;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-image: $modalGradient;
                opacity: 0.95;
            }
        }
    }

    .modal-template__close {
        position: absolute;
        top: 42px;
        right: 24px;
        z-index: 5;
        width: 32px;
        height: 32px;
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            display: block;
            top: 0;
            width: 45px;
            height: 3px;
            background-color: $white;
        }

        &::before {
            left: 0;
            transform:  rotate(45deg) translate(0, -50%);
            transform-origin: top left;
        }

        &::after {
            right: 0;
            transform: rotate(-45deg) translate(0, -50%);
            transform-origin: top right;
        }
    }

    .modal-template__header {
        z-index: 1;
        padding: 35px 50px 35px 0;
        font-family: 'ALS Gorizont', 'Times New Roman', sans-serif;
        font-size: 48px;
        line-height: 110%;
        color: $white;
    }

    .container-enter,
    .container-leave {
        transform: scale(0);
    }

    .container-enter-active,
    .container-leave-active {
        transition: transform 1s ease;
    }

</style>
