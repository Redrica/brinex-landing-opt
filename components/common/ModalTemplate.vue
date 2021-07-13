<template>
<!--    <transition name="simple-modal">-->
        <div class="simple-modal">

            <div class="simple-modal-backdrop" @click="closeModal">

                <transition name="container">
                    <div class="simple-modal-container" v-if="isOpened">

                        <div class="simple-modal-content"
                             @click.stop
                             :class="{ 'simple-modal-scrollable': scrollable }">

                            <header class="simple-modal-header">
                                <slot name="header">
                                    Modal title
                                </slot>
                            </header>

                            <section class="simple-modal-body">
                                <slot name="body">
                                    Modal body
                                </slot>
                            </section>

                            <footer class="simple-modal-footer">

                                <slot name="footer"/>

                                <button type="button" @click="closeModal">
                                    Close
                                </button>
                            </footer>
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
        isOpened: {
            type: Boolean,
            default: false,
        },
        scrollable: {
            type: Boolean,
            default: false,
        }
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
    .simple-modal {
        &-backdrop {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(104, 197, 160, 0.7);
            transition: opacity 0.3s ease;
            z-index: 9999;
        }

        &-container {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
        }

        &-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            max-width: 500px;
            margin: 1.75rem auto;
            padding: 20px 30px;
            border-radius: 5px;
            color: #000;
            background-color: #fff;
            transform: translate(0, 0);
            transition: all 0.3s ease;
            box-sizing: border-box;
        }

        &-header {
            padding-bottom: 16px;
            font-size: 25px;
            text-align: center;
        }

        &-footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 80px;
            text-align: center;
        }

        &-scrollable {
            height: 500px;
            overflow-y: scroll;
        }
    }

    //.simple-modal-enter,
    //.simple-modal-leave-to {
    //    opacity: 0;
    //}
    //
    //.simple-modal-enter-active,
    //.simple-modal-leave-active {
    //    transition: opacity 0.2s ease;
    //}

    .container-enter,
    .container-leave {
        //opacity: 0;
        transform: scale(0);
    }

    .container-enter-active,
    .container-leave-active {
        transition: transform 1s ease;
    }

</style>
