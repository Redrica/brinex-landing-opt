<template>
  <div>
    <h1 class="visually-hidden">
      brinex-landing-opt
    </h1>
    <StartScreen/>
    <CatalogScreen/>
    <CertificatesScreen/>
    <StoresScreen/>
    <OptionsScreen/>
    <PortalScreen/>
    <BusinessScreen/>
    <ExperienceScreen/>
    <ReviewsScreen/>
  </div>
</template>

<script>
import StartScreen from '~/components/start-screen';
import CatalogScreen from '~/components/catalog-screen';
import OptionsScreen from '~/components/options-screen';
import PortalScreen from '~/components/portal-screen/index';
import ReviewsScreen from '~/components/reviews-screen';
import CertificatesScreen from '@/components/certiаicates-screen';
import StoresScreen from '@/components/stores-screen';
import BusinessScreen from '~/components/business-screen';
import ExperienceScreen from '@/components/experience-screen';

export default {
  name: 'MainPage',
  components: {
    ExperienceScreen,
    BusinessScreen,
    StoresScreen,
    CertificatesScreen,
    ReviewsScreen,
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
  methods: {}
}
</script>

<style>


</style>
