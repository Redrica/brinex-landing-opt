<template>
    <div class="header">
        <header class="header__inner container">
            <img class="header__logo" src="../../assets/img/brinex_logo_full.svg" width="116" alt="Логотип компании Бринекс" />
            <nav class="header__nav menu">
                <a class="menu__item" href="">
                    <icon class="menu__icon" name="Catalog" />
                    Каталог товаров и услуг</a>
                <a class="menu__item" href="tel:88002509780">
                    <icon class="menu__icon" name="Phone" />
                    8 800 250-97-80</a>
                <div class="menu__item menu__item--submenu">
                    <span class="menu__item-text">Оптовым клиентам</span>
                    <icon class="menu__icon" name="Arrow" />
                    <ul class="menu__submenu submenu">
                        <li class="submenu__item">
                            <a class="submenu__link" href="">О портале</a>
                        </li>
                        <li class="submenu__item">
                            <a class="submenu__link" href="">Доставка</a>
                        </li>
                        <li class="submenu__item">
                            <a class="submenu__link" href="">Оплата и рассрочка</a>
                        </li>
                        <li class="submenu__item">
                            <a class="submenu__link" href="">Наши клиенты</a>
                        </li>
                        <li class="submenu__item">
                            <a class="submenu__link" href="">Поставщики</a>
                        </li>
                        <li class="submenu__item">
                            <a class="submenu__link" href="">Аналитика</a>
                        </li>
                        <li class="submenu__item">
                            <a class="submenu__link" href="">Обучение</a>
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
export default {
name: "PageHeader"
}
</script>

<style lang="scss">
    .header {
        position: relative;

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
    }

    .header__inner {
        position: relative;
        display: flex;
        align-items: flex-start;
        padding: 22px 30px 0 36px;
    }

    .header__logo {
        margin-right: 45px;
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

        &--submenu {
            position: relative;
            cursor: pointer;

            & .menu__icon {
                margin-top: 5px;
                margin-left: 7px;
            }

            &:hover {
                .menu__submenu {
                    display: block;
                }
            }
        }
    }

    .menu__item-text {
        opacity: 0.5;
    }

    .menu__icon {
        margin-right: 7px;
    }

    .menu__submenu {
        display: none;
        position: absolute;
        top: 24px;
        right: -8px;
        left: -8px;
        //opacity: 0;
        //pointer-events: none;
    }

    .submenu {
        //display: flex;
        //flex-direction: column;
        padding: 0 0 5px;
        list-style: none;
        background-color: transparentize($black, 0.3);
        border-radius: 8px;

        //&:hover {
        //    opacity: 1;
        //    pointer-events: auto;
        //}

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
            color: $light-green;
        }
    }

</style>
