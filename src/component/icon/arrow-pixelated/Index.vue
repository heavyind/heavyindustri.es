<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-arrow-pixelated"
    :width="width"
    :height="height">
    <circle
      :cx="cx"
      :cy="cy"
      :r="r"
      :stroke="fill"
      :stroke-width="strokeWidth"
      fill="transparent">
    </circle>
    <g :transform="transform">
      <rect
        v-for="i in [1,2,3,4,5]"
        :key="i"
        :width="pixelWidth"
        :height="pixelHeight"
        :fill="fill"
        :x="getPixelCoords(i).x"
        :y="getPixelCoords(i).y">
      </rect>
    </g>
  </svg>
</template>

<script>


export default {
  name: "",
  props: {
    width: {
      required: false,
      type: Number,
      default: 33
    },
    fill: {
      required: false,
      type: String,
      default: "#ffffff"
    },
    direction: {
      required: true,
      type: String
    }
  },
  computed: {
    height () {
      return this.width;
    },
    strokeWidth () {
      return this.width * 0.0455;
    },
    cx () {
      return this.width / 2;
    },
    cy () {
      return this. width / 2;
    },
    r () {
      return this.width / 2 - this.strokeWidth;
    },
    pixelWidth () {
      return this.width * 0.0606;
    },
    pixelHeight () {
      return this.pixelWidth;
    },
    arrowOrigin () {
      return {x: this.width * 0.40, y: this.height * 0.29};
    },
    transform () {
      const rots = {
        "up": -90,
        "left": 180,
        "right": 0,
        "down": 90 
      };
      return `rotate(${rots[this.direction]} ${this.width/2} ${this.height/2})`;
    }
  },
  methods: {
    getPixelCoords(i) {
      const fX = (i) => {
        if (i <= 3) {
          return this.arrowOrigin.x + this.pixelWidth * i;
        } else {
          return this.arrowOrigin.x + this.pixelWidth * (6-i);
        }
      };
      const fY = (i) => {
        return this.arrowOrigin.y + this.pixelHeight * i;
      };
      return { x: fX(i), y: fY(i) };
    }
  }
};
</script>

<style lang="sass">

.icon-arrow-pixelated
  cursor: pointer
  transition: transform 0.2s ease
  &:hover
    transform: scale(1.05)
</style>
