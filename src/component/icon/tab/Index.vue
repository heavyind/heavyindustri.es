<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 90 54"
    :class="iconTabClass">
    <rect
      x="1.5"
      y="1.5"
      width="87"
      height="51"
      rx="5"
      ry="5"
      fill="transparent"
      :stroke="fill"
      stroke-width="3"/>
    <text
      x="13"
      y="38"
      font-family="Sofia Pro"
      font-size="20"
      :fill="fill">
      tab
    </text>
  </svg>
</template>

<script>


export default {
  name: "icon-tab",
  props: {
    width: {
      required: false,
      type: String,
      default: "45"
    },
    height: {
      required: false,
      type: String,
      default: "25"
    },
    fill: {
      required: false,
      type: String,
      default: "#ffffff"
    }
  },
  data () {
    return {
      clicked: false
    };
  },
  computed: {
    iconTabClass () {
      return {
        "icon-tab": true,
        "icon-tab--clicked": this.clicked
      };
    }
  },
  methods: {
    handleKeyDown (e) {
      if (e.keyCode === 9) { this.clicked = true; }
    },
    handleKeyUp (e) {
      if (e.keyCode === 9) { this.clicked = false; }
    }
  },
  mounted () {
    addEventListener("keydown", this.handleKeyDown);
    addEventListener("keyup", this.handleKeyUp);
  }
};
</script>

<style lang="sass">

.icon-tab
  cursor: pointer
  transition: transform 50ms linear
  &:hover
    transform: scale(1.05)
  &:active
    transform: scale(0.95)
  &--clicked
    transform: scale(0.90)
</style>
