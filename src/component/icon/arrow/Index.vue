<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    viewBox="0 0 102 70">
    <path
      d="M 1.5 28 L 75 28 L 47 1.5 L 67 1.5 L 100.5 35 L 67 68.5 L 47 68.5 L 75 42 L 3.00 42 L 3.00 29.50"
      :fill="_fill"
      :stroke="fill"
      stroke-width="3"/>
  </svg>
</template>

<script>


export default {
  props: {
    width: {
      required: false,
      type: String,
      default: "20"
    },
    fill: {
      required: false,
      type: String,
      default: "#ffffff"
    },
    isFilled: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    _fill () {
      return this.isFilled ? this.fill : "transparent";
    }
  }
};
</script>
