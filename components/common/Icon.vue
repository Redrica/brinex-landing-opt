<template>
  <component :is="name" v-bind="$attrs" v-on="$listeners"/>
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
// import Box from '~/assets/svg/box.svg?inline';
// import BoxSolid from '~/assets/svg/box-solid.svg?inline';
// import Wheel from '~/assets/svg/wheel.svg?inline';
// import WheelSolid from '~/assets/svg/wheel-solid.svg?inline';
// import Site from '~/assets/svg/site.svg?inline';
// import SiteSolid from '~/assets/svg/site-solid.svg?inline';
// import Logistics from '~/assets/svg/logistics.svg?inline';
// import LogisticsSolid from '~/assets/svg/logistics-solid.svg?inline';
// import Grow from '~/assets/svg/grow.svg?inline';
// import GrowSolid from '~/assets/svg/grow-solid.svg?inline';
// import Gear from '~/assets/svg/gear.svg?inline';
// import GearSolid from '~/assets/svg/gear-solid.svg?inline';
// import Online from '~/assets/svg/online.svg?inline';
// import OnlineSolid from '~/assets/svg/online-solid.svg?inline';
// import Truck from '~/assets/svg/truck.svg?inline';
// import TruckSolid from '~/assets/svg/truck-solid.svg?inline';
// import PercentSmall from '~/assets/svg/percent-small.svg?inline';
// import PercentSmallSolid from '~/assets/svg/percent-small-solid.svg?inline';

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
    // Box,
    // BoxSolid,
    // Wheel,
    // WheelSolid,
    // Site,
    // SiteSolid,
    // Logistics,
    // LogisticsSolid,
    // Gear,
    // GearSolid,
    // Grow,
    // GrowSolid,
    // Online,
    // OnlineSolid,
    // Truck,
    // TruckSolid,
    // PercentSmall,
    // PercentSmallSolid,
  },
  props: {
    name: String,
  },
};
</script>
