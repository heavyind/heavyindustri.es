<template>
  <div>
    <svg width="30" height="14" xmlns="http://www.w3.org/2000/svg">
      <rect
        v-for="(i, k) in [0,1,2,3]"
        :key="k"
        id="foo"
        :x="4.5 + 22 * i"
        y="1.5"
        width="17"
        height="11"
        :stroke="fill"
        stroke-width="1.5"
        fill="transparent">
      </rect>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    fill: {
      required: false,
      default: "#ffffff"
    },
    width: {
      required: false,
      default: 30
    }
  }
};
</script>
