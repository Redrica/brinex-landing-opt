<template>
    <a class="button-arrow" :class="{ 'button-arrow--green': greenButton }" href="#" ref="button">


        <svg class="button-arrow__white-back"  width="305" height="50" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 305 50" style="enable-background:new 0 0 305 50;" xml:space="preserve">
		<polygon fill="#ffffff" points="1.1,49.5 21.7,25 1.1,0.5 283.7,0.5 304.3,25 283.7,49.5 "/>
            <path
                d="M283.5,1l20.2,24l-20.2,24H2.1l19.6-23.4l0.5-0.6l-0.5-0.6L2.1,1H283.5 M284,0H0l21,25L0,50h284l21-25L284,0L284,0z"/>
</svg>

        <svg class="button-arrow__green-back" width="305" height="50" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 305 50" style="enable-background:new 0 0 305 50;" xml:space="preserve">
		<polygon fill="#02965E" points="1.1,49.5 21.7,25 1.1,0.5 283.7,0.5 304.3,25 283.7,49.5 "/>
            <path fill="#ffffff" d="M283.5,1l20.2,24l-20.2,24H2.1l19.6-23.4l0.5-0.6l-0.5-0.6L2.1,1H283.5 M284,0H0l21,25L0,50h284l21-25L284,0
			L284,0z"/>
</svg>

        <svg class="button-arrow__gradient-back" width="305" height="50" viewBox="0 0 305 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M283.981 50L9.70038e-07 50L21.0186 25L0 0H283.981L305 25L283.981 50Z" fill="url(#paint0_linear)"/>
            <defs>
                <linearGradient id="paint0_linear" x1="303.523" y1="51.7442" x2="8.117" y2="-29.51" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#038D44"/>
                    <stop offset="1" stop-color="#25E753"/>
                </linearGradient>
            </defs>
        </svg>

        <span class="button-arrow__text"> {{ buttonText }}</span>
    </a>

</template>

<script>
export default {
    name: 'ButtonArrow',
    props: {
        buttonText: String,
        greenButton: {
            type: Boolean,
            default: false,
        }
    },
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

        &.button-arrow--green {
            color: $white;

            .button-arrow__green-back {
                display: block;

                & path {
                    fill: $white;
                }
            }

            & .button-arrow__white-back {
                position: absolute;
                top: 0;
                left:0;
                opacity: 0;
            }

            & .button-arrow__gradient-back {
                display: none;
            }

            &:hover {
                color: $black;

                & .button-arrow__white-back {
                    opacity: 1;

                    & path {
                        fill: $white;
                    }
                }
            }
        }

        &:hover {
            color: $white;

            & .button-arrow__gradient-back {
                opacity: 1;
            }

            & .button-arrow__white-back {
                opacity: 0;
            }
        }
    }

    .button-arrow__green-back {
        display: none;
        transition: opacity 0.2s ease;
    }

    .button-arrow__white-back {
        transition: opacity 0.2s ease;
    }

    .button-arrow__gradient-back {
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
