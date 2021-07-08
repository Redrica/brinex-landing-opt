<template>
    <div>
      <h1 class="visually-hidden">
        brinex-landing-opt
      </h1>
        <start-screen />
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

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
