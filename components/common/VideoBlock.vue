<template>
  <div class="video">
    <video ref="video" class="video__media"
           :src="videoSrc"
           v-bind="$attrs"
           loop></video>

    <svg v-show="!videoOn"
         ref="play"
         class="video__play"
         :width="btnWidth"
         :height="btnHeight"
         :class="btnFillColor"
         xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 125 150.1" style="enable-background:new 0 0 125 150.1;" xml:space="preserve">
<style type="text/css">
	.st0 {
      fill-rule: evenodd;
      clip-rule: evenodd;
  }
</style>
      <g>
		<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="127.1798" y1="72.1525" x2="-2.813" y2="77.0306"
                    gradientTransform="matrix(1 0 0 -1 0 152)">
		<stop offset="0" style="stop-color:#038D44"/>
      <stop offset="1" style="stop-color:#25E753"/>
	</linearGradient>
        <path class="st0 btn-play" d="M0,0v150.1l125-75.1L0,0z M9.4,16.7v116.8l97.2-58.4L9.4,16.7z"/>
</g>
</svg>

  </div>
</template>

<script>
export default {
  name: 'VideoBlock',

  props: {
    videoSrc: {
      type: String,
      default: null,
    },
    btnSize: {
      type: String,
      default: 'large',
      validator: (value) => {
        return ['large', 'small'].includes(value);
      }
    },
    btnColor: {
      type: String,
      default: 'green',
    }
  },

  data() {
    return {
      videoOn: false,
    }
  },

  computed: {
    btnWidth() {
      return this.btnSize === 'large' ? 119 : this.btnSize === 'small' ? 68 : '';
    },

    btnHeight() {
      return this.btnSize === 'large' ? 143 : this.btnSize === 'small' ? 82 : '';
    },

    btnFillColor() {
      return {
        'btn-play--green': this.btnColor === 'green',
        'btn-play--white': this.btnColor === 'white',
      }
    }
  },

  methods: {
    playVideo() {
      this.$refs[ 'video' ].play();
      this.videoOn = true;
    },

    pauseVideo() {
      if (!this.videoOn) {
        return;
      }

      this.$refs[ 'video' ].pause();
      this.videoOn = false;
    }
  },

  mounted() {
    this.$refs[ 'play' ].addEventListener('click', this.playVideo);
    this.$refs[ 'video' ].addEventListener('click', this.pauseVideo);
  },
}
</script>

<style lang="scss">
    .video {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
    }

    .video__media {
        display: block;
        width: 100%;
        height: auto;
    }

    .video__play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            transform: translate(-50%, -50%) scale(1.05);

            & path {
                fill: url('#SVGID_1_');
            }
        }
    }

    .btn-play--green {
        & path {
            fill: $primary;
        }
    }

    .btn-play--white {
        & path {
            fill: $white;
        }
    }
</style>
