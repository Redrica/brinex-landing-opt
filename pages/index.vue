<template>
    <div>
      <h1 class="visually-hidden">
        brinex-landing-opt
      </h1>
        <StartScreen />
        <CatalogScreen />
        <OptionsScreen />
        <PortalScreen />
    </div>
</template>

<script>
import StartScreen from '~/components/start-screen';
import CatalogScreen from '~/components/catalog-screen';
import OptionsScreen from '~/components/options-screen';
import PortalScreen from '~/components/portal-screen/index';

export default {
    name: 'MainPage',
    components: {
        StartScreen,
        CatalogScreen,
        OptionsScreen,
        PortalScreen,
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
