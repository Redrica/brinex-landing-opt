<template>
    <div class="start-screen">
        <PageHeader class="start-screen__header"></PageHeader>
        <div class="start-screen__content container">
            <p class="start-screen__title">Бринэкс — платформа для продавцов автотоваров</p>
            <a class="start-screen__link button" href="">Начать работу</a>
        </div>
        <video class="start-screen__back" src="../../assets/video/video_background_opt_first_screen_no_interface_brinex.mp4" muted autoplay loop></video>
    </div>
</template>

<script>
import PageHeader from '@/components/start-screen/PageHeader';

export default {
    name: "index",
    components: {
        PageHeader,
    }
}
</script>

<style lang="scss">
    .start-screen {
        position: relative;
    }

    .start-screen__header {
        position: relative;
        z-index: 1;
    }

    .start-screen__content {
        position: relative;
        z-index: 1;
    }

    .start-screen__back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border: none;
    }

</style>
