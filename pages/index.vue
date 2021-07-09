<template>
    <div>
      <h1 class="visually-hidden">
        brinex-landing-opt
      </h1>
        <start-screen />
        <div style="height: 2000px"></div>
    </div>
</template>

<script>
import StartScreen from "~/components/start-screen";

export default {
    components: {
        StartScreen,
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
