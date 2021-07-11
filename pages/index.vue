<template>
    <div>
      <h1 class="visually-hidden">
        brinex-landing-opt
      </h1>
        <StartScreen />
        <CatalogScreen />
        <OptionsScreen />
    </div>
</template>

<script>
import StartScreen from '~/components/start-screen';
import CatalogScreen from '~/components/catalog-screen';
import OptionsScreen from '~/components/options-screen';

export default {
    name: 'MainPage',
    components: {
        OptionsScreen,
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
