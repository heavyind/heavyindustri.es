<template>
  <header
    class="layout-header">
    <div class="layout-header__wrap">
      <trans-link to="/" class="layout-header__logo">
        <trans name="fifo" :initOnly="true" :duration="750">
          <img src="/img/logo.png" width="82">
        </trans>
      </trans-link>
      <div class="layout-header__util">
        <trans name="fifo" :initOnly="true" :duration="750">
          <language-selector></language-selector>
        </trans>
        <div class="layout-header__nav-wrap" @mouseup="toggleModal('Navigation')">
          <trans name="fifo" :initOnly="true" :duration="750">
            <navicon :open="isModalOpen"></navicon>
          </trans>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LanguageSelector from "@/component/language-selector/Index.vue";
import Navicon from "@/component/icon/navicon/Index.vue";
import { mapState, mapActions } from "vuex";


export default {
  name: "layout-header",
  components: {
    LanguageSelector,
    Navicon
  },
  computed: {
    ...mapState({
      isModalOpen: state => state.modal.open
    })
  },
  methods: {
    ...mapActions({
      toggleModal: "modal/toggle"
    })
  }
};
</script>

<style lang="sass">
@import "~SASS/mixin/layout";
@import "~SASS/mixin/strip";

.navicon
  @include strip-button

.layout-header
  position: relative
  padding-top: 1.50em
  &__wrap
    @include padded-wrap
    display: flex
    justify-content: space-between
  &__logo
    display: block
    z-index: 100 
  &__util
    display: flex
    justify-content: space-between
    align-items: center
    width: 5em
  &__nav-wrap
    z-index: 100 
</style>

