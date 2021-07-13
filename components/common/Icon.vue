<template>
    <component :is="name" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
import Arrow from '~/assets/svg/arrow.svg?inline';
import Catalog from '~/assets/svg/catalog.svg?inline';
import Phone from '~/assets/svg/phone.svg?inline';
import OkSign from '~/assets/svg/ok-sign.svg?inline';
import Plus from '~/assets/svg/plus.svg?inline';
import Info from '~/assets/svg/info.svg?inline';
import InfoSolid from '~/assets/svg/info-solid.svg?inline';
import Store from '~/assets/svg/store.svg?inline';
import StoreSolid from '~/assets/svg/store-solid.svg?inline';
import Return from '~/assets/svg/return.svg?inline';
import ReturnSolid from '~/assets/svg/return-solid.svg?inline';
import Percent from '~/assets/svg/percent.svg?inline';
import PercentSolid from '~/assets/svg/percent-solid.svg?inline';
import CheckIcon from '~/assets/svg/check-icon.svg?inline';
import CheckIconSolid from '~/assets/svg/check-icon-solid.svg?inline';
import ReArrow from '~/assets/svg/re-arrow.svg?inline';
import ReArrowSolid from '~/assets/svg/re-arrow-solid.svg?inline';

export default {
  name: 'Icon',
  components: {
      Arrow,
      Catalog,
      Phone,
      OkSign,
      Plus,
      Info,
      InfoSolid,
      Store,
      StoreSolid,
      Return,
      ReturnSolid,
      Percent,
      PercentSolid,
      CheckIcon,
      CheckIconSolid,
      ReArrow,
      ReArrowSolid,
  },
  props: {
    name: String,
  },
};
</script>
