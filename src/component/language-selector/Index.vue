<template>
  <div class="dropdown">
    <button
      @click="open"
      ref="dropdownButton"
      class="dropdown__button">{{ bi18n.language.toUpperCase() }}
    </button>
    <ul
      v-if="this.isOpen"
      class="dropdown__menu">
      <li
        v-for="(l, k) in bi18n.languages"
        @click="selectItem(k)"
        :key="k"
        class="dropdown__menu__item">
        {{ l.toUpperCase() }}
      </li>
    </ul>
  </div>
</template>

<script>
import { setLanguage as setLanguageOnServer } from "@/api";
import { mapState, mapActions } from "vuex";

export default {
  name: "dropdown",
  data () {
    return {
      isOpen: false
    };
  },
  methods: {
    open () {
      this.isOpen = !this.isOpen;
    },
    selectItem(i) {
      this.bi18n.setByIdx(i);
      setLanguageOnServer(this.bi18n.language);
      this.isOpen = false;
    },
    handleDocumentClick (e) {
      const dropdownButton = this.$refs.dropdownButton;
      const clickTarget = e.target;
      if ((dropdownButton !== clickTarget)) { this.isOpen = false; }
    }
  },
  mounted () {
    document.addEventListener("click", this.handleDocumentClick);
  },
  beforeDestroy () {
    document.removeEventListener("click", this.handleDocumentClick);
  }
};
</script>

<style lang="sass">
@import "~SASS/mixin/strip";

.dropdown
  position: relative
  &__button
    @include strip-button
    font-size: 0.75em
    background: white
    letter-spacing: 0.1em
    color: #111
    border-radius: 2.0px
    width: 2.75em
    padding: 0.1em 0 0.2em 0
  &__menu
    position: absolute
    font-size: 0.75em
    list-style-type: none
    padding: 0
    color: black
    top: 1.5em
    right: 0
    width: 2.75em
    border-radius: 2.0px
    background: white
    z-index: 100
    &__item
      cursor: pointer
      text-align: center
      padding: 0.5em 0
      &:first-of-type
        border-radius: 2px 2px 0 0
      &:last-of-type
        border-radius: 0 0 2px 2px
      &:hover
        background-color: #ddd

</style>
