<template>
  <div id="app">
    <transition mode="out-in"
      :duration="settings.preload.duration"
      @afterEnter="preloadAfterEnter">
      <preloader v-if="!ready"></preloader>
      <div v-else>
        <modal transitionName="trans-modal"></modal>
        <trans-router-view></trans-router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import * as settings from "@/settings";
import Preloader from "@/component/preloader/Index.vue";
import Modal from "@/component/modal/Index.vue";
import TransFadeInFadeOut from "@/component/trans-wrapper/FadeInFadeOut.vue";


export default {
  name: "app",
  components: {
    Preloader,
    Modal,
    TransFadeInFadeOut
  },
  data () {
    return {
      ready: false
    };
  },
  computed: {
    ...mapState({
      preloadDone: state => state.preload.done
    }),
    settings () {
      return settings;
    }
  },
  methods: {
    ...mapActions({
      preloadSetDone: "preload/setDone"
    }),
    preloadAfterEnter () {
      // Since actual app content doesn't render until preloading transition
      // out is complete, the trans module should only be initialized when 
      // this is done. Otherwise, we jump the gun and set the store's `initFlag`
      // early, within the preload sequence rather than within the main app, so
      // `showOnce` transitions never occur
      this.transInitialize();
    },
    mountedHook () {
      // This is set to a timer for the sake of example. Change it to suit
      // your own requirements (e.g., an array of images' `onload`).
      setTimeout(this.preloadSetDone, 0);
    }
  },
  watch: {
    preloadDone (b) {
      if (b === true) {
        Vue.nextTick(() => {
          // A proxy for `preloadDone`, required because `<preloader>` component
          // uses `preloadDone`. If parent conditional rendering/transition logic is
          // not done after children, the children are pruned from the virtual DOM 
          // and updates never propagate (meaning child transitions never fire).
          this.ready = true;
        });
      }
    },
    $route () {
      if (this.$route.meta && this.$route.meta.title) {
        document.title = this.$route.meta.title;
      }
    }
  },
  mounted () {
    this.mountedHook();
  }
};
</script>

<style lang="sass">
@import "~SASS/main";
</style>

