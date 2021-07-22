<template>
  <section class="analytics-screen container">

    <h2 class="analytics-screen__title part-title">
      <span class="part-title part-title--accent">Принимайте бизнес-решения </span>опираясь на нашу аналитику
    </h2>

    <p class="analytics-screen__text">Помогаем вам развивать бизнес. Предоставляем рекомендации по формированию
      ассортимента, прогнозы индекса спроса, сезонную аналитику по вашему региону и другие бизнес-инсайты</p>

    <div class="analytics-screen__content">
      <div class="analytics-screen__titles-wrapper">
        <ul class="analytics-screen__card-titles">
          <li v-for="title in $options.content.titles"
              class="analytics-screen__card-title">{{ title }}
          </li>
        </ul>
      </div>

      <div class="analytics-screen__cards-wrapper">
        <ul class="analytics-screen__cards">
          <li v-for="card in $options.content.list"
              class="analytics-screen__card"
              :class="card.className">{{ card.text }}
          </li>
        </ul>
      </div>
    </div>

    <ButtonArrow class="analytics-screen__button" button-text="Все примеры"/>
  </section>

</template>

<script>
import ButtonArrow from '@/components/common/ButtonArrow';
import { titles, analyticsList } from '@/helpers/analytics-list';

export default {
  name: 'AnalyticsScreen',
  components: {
    ButtonArrow,
  },

  content: {
    titles: titles,
    list: analyticsList,
  },
}
</script>

<style lang="scss">
    .analytics-screen {
        padding: 67px 56px 73px;
    }

    .analytics-screen__title {
        max-width: 1000px;
        margin: 0 auto;
    }

    .analytics-screen__text {
        max-width: 870px;
        margin: 22px auto 64px;
        font-size: 20px;
        line-height: 140%;
        text-align: center;
    }

    .analytics-screen__button {
        margin: 24px auto 0;
    }

    .analytics-screen__content {
        display: flex;
        justify-content: space-between;
    }

    .analytics-screen__titles-wrapper {
        position: relative;
        padding-bottom: 25px;
    }

    .analytics-screen__card-titles {
        position: sticky;
        top: 100px;
        width: 372px;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .analytics-screen__card-title {
        margin-bottom: 24px;
        font-family: "ALS Gorizont", "Trebuchet MS", sans-serif;
        font-size: 26px;
        line-height: 135%;
        color: $gray7;

        &:hover {
            color: $primaryDarker;
        }

        &--active {
            color: $black;
        }
    }

    .analytics-screen__cards-wrapper {
        position: relative;
    }

    .analytics-screen__cards {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .analytics-screen__card {
        width: 750px;
        height: 388px;
        margin-bottom: 24px;
        padding: 24px 120px 24px 24px;
        font-size: 20px;
        line-height: 140%;
        color: $white;
        border-radius: 24px;
        background-repeat: no-repeat;


        &--ready {
            background-image: url("/brinex-landing-opt/img/ready_bg.png"), $cardGradient;
            background-position: right 43px top 129px, center;
        }

        &--demand {
            position: relative;
            background-image: url("/brinex-landing-opt/img/demand_bg_1.png"), $cardGradient;
            background-position: left 32px bottom 0, center;
        }

        &--analytics {
            background-image: url("/brinex-landing-opt/img/analytics_bg_1.png"),
            url("/brinex-landing-opt/img/analytics_bg_2.png"),
            $cardGradient;
            background-position: right 19px top 130px, left 25px bottom 32px, center;
        }

        &--statistics {
            background-image: url("/brinex-landing-opt/img/statistics_bg.png"), $cardGradient;
            background-size: 95%, auto;
            background-position: left 15px bottom -50px, center;
        }
    }

</style>
