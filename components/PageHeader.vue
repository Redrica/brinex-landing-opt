<template>
    <!--    TODO: вынести из экрана!-->
    <!--    TODO: проверять положение на странице при перезагрузке, чтобы назначать класс, если прокручено-->
    <div class="header" ref="header">
        <header class="header__inner container">
            <img class="header__logo header__logo--full" src="../assets/img/brinex_logo_full.svg" width="116"
                 alt="Логотип компании Бринекс"/>
            <img class="header__logo header__logo--small" src="../assets/img/brinex_logo_simple.svg" width="66"
                 alt="Логотип компании Бринекс"/>
            <nav class="header__nav menu">
                <a class="menu__item" href="">
                    <icon class="menu__icon" name="Catalog"/>
                    Каталог товаров и услуг</a>
                <a class="menu__item" href="tel:88002509780">
                    <icon class="menu__icon" name="Phone"/>
                    8 800 250-97-80</a>
                <div class="menu__item menu__item--submenu">
                    <p class="menu__item-block">
                        <span class="menu__item-text">Оптовым клиентам</span>
                        <icon class="menu__icon" name="Arrow"/>
                    </p>
                    <ul class="menu__submenu submenu">
                        <li class="submenu__item" v-for="link in menuLinks">
                            <a class="submenu__link" :href="link.href">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>
                <a class="menu__item" href="">Корпоративным клиентам</a>
                <a class="menu__item" href="">Франшиза</a>
            </nav>

        </header>
    </div>
</template>

<script>
import { menuLinks } from '@/helpers/menu-links';
import { mapState } from 'vuex';

export default {
    name: 'PageHeader',
    data() {
        return {
            menuLinks: menuLinks,
        }
    },

    computed: {
        ...mapState(['scrollLimit']),
    },

    mounted() {
        this.onScroll();
        window.addEventListener('scroll', this.onScroll);
    },

    methods: {
        // debounce!
        onScroll() {

            if (this.scrollLimit && (window.pageYOffset >= this.scrollLimit)) {
                this.$refs[ 'header' ].classList.add('header--sticky');
            } else if (window.pageYOffset < this.scrollLimit) {
                this.$refs[ 'header' ].classList.remove('header--sticky');
            }
        },
    },

    watch: {
        scrollLimit() {
            this.onScroll();
        },
    }
}
</script>

<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            background: linear-gradient(180deg, #060505 37.11%, rgba(5, 5, 5, 0) 100%);
            opacity: 0.8;
        }

        &--sticky {
            z-index: 50;
            background-color: $almostWhite;
            box-shadow: 0 -10px 20px $black;

            &::before {
                content: none;
            }

            & .menu__item-block {
                opacity: 1;
            }

            & .menu__item {
                color: $black;

                &--submenu:hover {
                    color: $black;
                }
            }

            & .menu__icon {
            }

            & .header__inner {
                padding-top: 16px;
                padding-bottom: 14px;
            }

            & .header__logo {
                margin-right: 87px;
            }

            & .header__logo--full {
                display: none;
            }

            & .header__logo--small {
                display: block;
            }

            & .submenu {
                background-color: $white;
            }

            .submenu__link {
                color: $black;
                text-decoration: none;

                &:hover {
                    background-color: transparentize($almostWhite, 0.5);
                }
            }
        }
    }

    .header__inner {
        position: relative;
        display: flex;
        align-items: flex-start;
        padding: 22px 30px 0 36px;
        transition: all 0.2s ease;
    }

    .header__logo {
        margin-right: 39px;

        &--small {
            display: none;
        }
    }

    .header__nav {
        display: flex;
        flex-grow: 1;
    }

    .menu__item {
        display: flex;
        align-items: center;
        margin-right: 17px;
        font-size: 18px;
        line-height: 22px;
        color: $white;
        text-decoration: none;

        &:nth-child(2) {
            margin-right: auto;
        }

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            color: $primaryConversed;
        }

        &--submenu {
            position: relative;
            cursor: pointer;


            & .menu__icon {
                align-self: center;
                margin-left: 7px;
            }

            &:hover {
                color: $white;
                cursor: auto;

                .menu__submenu {
                    opacity: 1;
                    pointer-events: auto;
                }

                .menu__item-block {
                    opacity: 1;
                }

                .menu__icon {
                    transform: rotate(180deg);
                }
            }
        }
    }

    .menu__item-block {
        position: relative;
        z-index: 1;
        display: flex;
        margin: 0;
        opacity: 0.5;
    }

    .menu__icon {
        display: block;
        margin-right: 7px;
        transition: transform 0.2s ease;

        & path,
        & rect {
            fill: currentColor;
        }
    }

    .menu__submenu {
        position: absolute;
        top: -7px;
        right: -8px;
        left: -8px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease;
    }

    .submenu {
        margin: 0;
        padding: 31px 0 5px;
        list-style: none;
        background-color: transparentize($black, 0.3);
        border-radius: 8px;
        box-shadow: 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725);

        &::before {
            content: '';
            position: absolute;
            top: -3px;
            left: 0;
            width: 100%;
            height: 3px;
        }
    }

    .submenu__item {
    }

    .submenu__link {
        display: block;
        padding: 5px 8px;
        color: $white;
        text-decoration: none;

        &:hover {
            background-color: $black;
            color: $primaryConversed;
        }
    }

</style>
