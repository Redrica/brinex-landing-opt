<template>
  <section class="experience-screen container">

    <h2 class="experience-screen__title part-title">
      <span class="part-title part-title--accent">Делимся опытом, </span>помогаем растить бизнес
    </h2>

    <p class="experience-screen__text">Обучайте персонал в учебном центре Бринэкс. Готовим продавцов-консультантов,
      менеджеров и технических специалистов.</p>

    <div class="video-list">
      <div class="video-list__item" v-for="card in $options.experienceList">
        <VideoBlock width="277"
                    height="390"
                    :video-src="card.videoSrc"
                    btn-size="small"
                    btn-color="white"/>
        <p class="video-list__item-text">{{ card.text }}</p>
      </div>
    </div>

    <ButtonArrow class="experience-screen__button" button-text="Смотреть все"/>
  </section>
</template>

<script>
import VideoBlock from '@/components/common/VideoBlock';
import ButtonArrow from '@/components/common/ButtonArrow';
import { experienceList } from '@/helpers/experienceList';

export default {
  name: 'ExperienceScreen',
  components: {
    VideoBlock,
    ButtonArrow
  },

  experienceList: experienceList,
}
</script>

<style lang="scss">
    .experience-screen {
        padding: 0 56px;
    }

    .experience-screen__title {
        max-width: 1000px;
        margin: 0 auto;
    }

    .experience-screen__text {
        max-width: 854px;
        margin: 22px auto 28px;
        font-size: 20px;
        line-height: 140%;
        text-align: center;
    }

    .experience-screen__button {
        margin: 25px auto 0;
    }

    .video-list {
        display: flex;
        justify-content: space-between;
    }

    .video-list__item {
        width: calc((100% - 60px) / 4);
        transition: all 0.2s ease;

        &:hover {
            transform: scale(1.04);
        }
    }

    .video-list__item-text {
        margin: 10px 0 0;
        font-size: 16px;
        line-height: 140%;
        font-weight: 600;
    }
</style>
