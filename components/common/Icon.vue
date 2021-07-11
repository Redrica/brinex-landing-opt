<template>
    <component :is="name" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
import Arrow from '~/assets/svg/arrow.svg?inline';
import Catalog from '~/assets/svg/catalog.svg?inline';
import Phone from '~/assets/svg/phone.svg?inline';
import OkSign from '~/assets/svg/ok-sign.svg?inline';
import Plus from '~/assets/svg/plus.svg?inline';

export default {
  /* eslint-disable vue/no-unused-components */
  name: 'Icon',
  components: {
      Arrow,
      Catalog,
      Phone,
      OkSign,
      Plus,
  },
  props: {
    name: String,
  },
};
</script>
