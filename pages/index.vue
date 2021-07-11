<template>
    <div>
      <h1 class="visually-hidden">
        brinex-landing-opt
      </h1>
        <start-screen />
        <CatalogScreen />
        <div style="height: 2000px"></div>
    </div>
</template>

<script>
import StartScreen from '~/components/start-screen';
import CatalogScreen from '~/components/catalog-screen';

export default {
    name: 'MainPage',
    components: {
        StartScreen,
        CatalogScreen,
    },
    data() {
        return {
            showLazy: false,
        }
    },
    methods: {

    }
}
</script>

<style>


</style>
