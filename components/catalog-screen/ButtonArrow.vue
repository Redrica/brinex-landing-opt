<template>
    <a class="button-arrow" href="#">
        <svg class="button-arrow__static-back" width="289" height="50" viewBox="0 0 289 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M268.843 49.5L1.03759 49.5L20.3071 25.3115L20.5553 25L20.3071 24.6884L1.03759 0.5H268.843L288.361 25L268.843 49.5Z" stroke="black"/>
        </svg>

        <svg class="button-arrow__hover-back" width="289" height="50" viewBox="0 0 289 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M269.084 50L9.19151e-07 50L19.916 25L0 0H269.084L289 25L269.084 50Z" fill="url(#paint0_linear)"/>
            <defs>
                <linearGradient id="paint0_linear" x1="287.6" y1="51.7442" x2="5.66521" y2="-21.7366" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#038D44"/>
                    <stop offset="1" stop-color="#25E753"/>
                </linearGradient>
            </defs>
        </svg>

        <span class="button-arrow__text">Весь каталог</span>
    </a>

</template>

<script>
export default {
name: "ButtonArrow"
}
</script>

<style lang="scss">
    .button-arrow {
        position: relative;
        display: block;
        width: 289px;
        font-family: 'ALS Gorizont', 'Times New Roman', sans-serif;
        font-size: 26px;
        text-decoration: none;
        color: $black;

        &:hover {
            color: $white;

            .button-arrow__static-back {
                opacity: 0;
            }

            .button-arrow__hover-back {
                opacity: 1;
            }
        }
    }

    .button-arrow__static-back {
        opacity: 1;
        transition: opacity 0.2s ease;
    }

    .button-arrow__hover-back {
        position: absolute;
        top: 0;
        left:0;
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    .button-arrow__text {
        position: absolute;
        top: 9px;
        left: 45px;
        width: 100%;
    }
</style>
