<template>
    <footer class="footer">
        <div class="footer__inner container">

            <button class="footer__main-button">Начать работу</button>

            <p class="footer__text footer__text--title footer__text--large">Свяжитесь с нами</p>
            <p class="footer__text">Если у вас есть вопросы или вы хотите обсудить сотруничество пишите, звоните или
                закажите обратный звонок и мы сами все расскажем</p>

            <p class="footer__text footer__text--medium">Наш телефон</p>
            <a class="footer__text footer__text--large footer__link" href="tel:88002509780">8 800 250-97-80</a>

            <p class="footer__text footer__text--medium">Эл. почта</p>
            <a class="footer__text footer__text--large footer__link" href="mailto:сorporate@brinex.ru">сorporate@brinex.ru</a>

            <button class="footer__button button button--simple">Заказать обратный звонок</button>

            <div class="footer__row">
                <!--                TODO: год вставка-->
                <p class="footer__address footer__text footer__text--small">© {{ year }} Бринэкс Набережные Челны, пр.
                    Сююмбике, 49, ОПС 31, А/Я 47
                    <span class="footer__text--tel">8 800 250-97-80</span>
                </p>

                <ul class="footer__menu menu-list">
                    <li class="menu-list__item" v-for="item in mainMenu">
                        <a class="footer__link menu-list__link" href="">{{ item.text }}</a>
                    </li>
                </ul>

                <ul class="footer__menu menu-list">
                    <li class="menu-list__item" v-for="item in extraMenu">
                        <a class="footer__link menu-list__link" href="">{{ item.text }}</a>
                    </li>
                </ul>
            </div>

        </div>
    </footer>

</template>

<script>
import { mainMenu, extraMenu } from '@/helpers/footer-links';
import ButtonArrow from '@/components/common/ButtonArrow';

export default {
    name: 'PageFooter',
    components: { ButtonArrow },
    data() {
        return {
            mainMenu: mainMenu,
            extraMenu: extraMenu,
            year: '',
        }
    },

    mounted() {
        this.year = new Date().getFullYear();
    }
}
</script>

<style src="@/assets/scss/footer.scss" lang="scss"></style>

<style lang="scss">

</style>
