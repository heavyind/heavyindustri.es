<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    class="navicon">
    <rect
      class="navicon__bar navicon__bar--top"
      :width="barWidthTop"
      :height="barHeight"
      :fill="fill"
      :style="styleBarTop">
    </rect>
    <rect
      class="navicon__bar navicon__bar--bottom"
      :width="barWidthBottom"
      :height="barHeight"
      :fill="fill"
      :style="styleBarBottom">
    </rect>
  </svg>
</template>

<script>

export default {
  name: "",
  props: {
    open: {
      required: true,
      type: Boolean
    },
    width: {
      required: false,
      type: Number,
      default: 25
    },
    fill: {
      required: false,
      type: String,
      default: "#ffffff"
    },
    duration: {
      required: false,
      type: Number,
      default: 450
    }
  },
  computed: {
    height () {
      return this.width * 0.8; // 20 by default
    },
    barHeight () {
      return this.height * 0.075;
    },
    barWidthTop () {
      if (this.open === true) { return this.width; }
      return this.width - (this.width * 0.08);
    },
    barWidthBottom () {
      return this.width;
    },
    barYTop () {
      const halfBarHeight = this.barHeight / 2;
      return this.open === true ? this.height * 0.5 - halfBarHeight : this.height * 0.275;
    },
    barYBottom () {
      const halfBarHeight = this.barHeight / 2;
      return this.open === true ? this.height * 0.5 - halfBarHeight: this.height * 0.650;
    },
    barRotTop () {
      return this.open === true ? 45 : 0;
    },
    barRotBottom () {
      return this.open === true ? -45 : 0;
    },
    transitionStyle () {
      return `transform ${this.duration}ms ease, width ${this.duration}ms ease`;
    },
    styleBarBottom () {
      return {
        "transform-origin": "center",
        "transform": `rotate(${this.barRotBottom}deg) translateY(${this.barYBottom}px)`,
        "transition": this.transitionStyle
      };
    },
    styleBarTop () {
      return {
        "transform-origin": "center",
        "transform": `rotate(${this.barRotTop}deg) translateY(${this.barYTop}px)`,
        "transition": this.transitionStyle
      };
    }
  }
};
</script>

<style lang="sass">
.navicon
  cursor: pointer
  &__bar
    &--top
</style>
