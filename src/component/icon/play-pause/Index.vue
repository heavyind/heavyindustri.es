<template>
  <svg 
    class="icon-play-pause"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg">
    <polygon
      v-if="shouldShowPlayButton"
      :points="playButtonPoints"
      :fill="fill">
    </polygon>
    <rect
      v-if="!shouldShowPlayButton"
      :width="width * 0.1"
      :height="width * 0.3"
      :x="pauseButtonLeftX"
      :y="pauseButtonY"
      :fill="fill">
    </rect>
    <rect
      v-if="!shouldShowPlayButton"
      :width="width * 0.1"
      :height="width * 0.3"
      :x="pauseButtonRightX"
      :y="pauseButtonY"
      :fill="fill">
    </rect>
    <circle
      :cx="width/2"
      :cy="width/2"
      :r="r"
      :stroke="fill"
      :stroke-width="strokeWidth"
      :stroke-dasharray="`${c} ${c}`"
      :stroke-dashoffset="percentCompleteToStrokeDashoffset"
      :transform="`rotate(-90 ${width/2} ${width/2})`"
      fill="transparent">
    </circle>
    <circle
      :cx="width/2"
      :cy="width/2"
      :r="r"
      :stroke="fill"
      :stroke-width="strokeWidth"
      stroke-opacity="0.15"
      fill="transparent">
    </circle>
  </svg>
</template>

<script>

export default {
  name: "icon-play-pause",
  props: {
    width: {
      required: false,
      type: Number,
      default: 17
    },
    fill: {
      required: false,
      type: String,
      default: "#ffffff"
    },
    paused: {
      required: true,
      type: Boolean
    },
    percentComplete: {
      required: true,
      type: Number
    },
    active: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    height () {
      return this.width;
    },
    strokeWidth () {
      return this.width / 10;
    },
    r () {
      return this.width / 2 - this.strokeWidth;
    },
    d () {
      return this.r * 2;
    },
    c () {
      return this.d * Math.PI;
    },
    percentCompleteToStrokeDashoffset () {
      if (!this.active) { return this.c; }
      return this.c - this.percentComplete * this.c;
    },
    playButtonPoints () {
      const p1 = `${this.width * 0.4},${this.height * 0.3333}`;
      const p2 = `${this.width * 0.6667},${this.height * 0.5}`;
      const p3 = `${this.width * 0.4},${this.height * 0.6667}`;
      return `${p1} ${p2} ${p3}`;
    },
    pauseButtonRectWidth () {
      return this.width * 0.1;
    },
    pauseButtonRectHeight () {
      return this.height * 0.3;
    },
    pauseButtonSeparatorWidth () {
      return this.width * 0.0667;
    },
    pauseButtonLeftX () {
      return this.width / 2 - this.pauseButtonSeparatorWidth / 2 - this.pauseButtonRectWidth;
    },
    pauseButtonRightX () {
      return this.width / 2 + this.pauseButtonSeparatorWidth / 2;
    },
    pauseButtonY () {
      return this.height * 0.35;
    },
    shouldShowPlayButton () {
      return !this.active || this.paused;
    }
  }
};
</script>

<style lang="sass">

.icon-play-pause
  cursor: pointer
  transition: transform 0.2s ease
  &:hover
    transform: scale(1.3)
</style>
