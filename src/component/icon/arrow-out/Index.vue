<template>
  <svg
    :width="width"
    :height="width"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M 0 0 L 22 0 L 22 22 L 18 22 L 18 7 L 3 22 L 0 19 L 15 4 L 0 4 L 0 0" :fill="fill"/>
  </svg>
</template>

<script>


export default {
  name: "icon-arrow-out",
  props: {
    width: {
      required: false,
      type: Number,
      default:10 
    },
    fill: {
      required: false,
      type: String,
      default: "#ffffff"
    }
  }
};
</script>
