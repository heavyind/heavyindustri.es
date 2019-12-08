<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    viewBox="0 0 102 70">
    <path
      d="M 0 28 L 75 28 L 47 0 L 67 0 L 102 35 L 67 70 L 47 70 L 75 42 L 0 42 L 0 28"
      :fill="fill"/>
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
    }
  }
};
</script>
