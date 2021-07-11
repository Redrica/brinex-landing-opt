<template>
    <component :is="name" v-bind="$attrs" v-on="$listeners">
        <slot />
    </component>
</template>

<script>
import Arrow from '~/assets/svg/arrow.svg?inline';
import Catalog from '~/assets/svg/catalog.svg?inline';
import Phone from '~/assets/svg/phone.svg?inline';
import ButtonArrow from '~/assets/svg/button-arrow.svg?inline';
import ButtonArrowFilled from '~/assets/svg/button-arrow-filled.svg?inline';

export default {
  /* eslint-disable vue/no-unused-components */
  name: 'Icon',
  components: {
      Arrow,
      Catalog,
      Phone,
      ButtonArrow,
      ButtonArrowFilled,
  },
  props: {
    name: String,
  },
};
</script>
