<template>
  <component :is="name" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
import Arrow from '~/assets/svg/arrow.svg?inline';
import Catalog from '~/assets/svg/catalog.svg?inline';
import Phone from '~/assets/svg/phone.svg?inline';

export default {
  /* eslint-disable vue/no-unused-components */
  name: 'Icon',
  components: {
      Arrow,
      Catalog,
      Phone,
  },
  props: {
    name: String,
  },
};
</script>
