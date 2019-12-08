<template>
  <div class="page-index">
    <layout-header></layout-header>
    <bi18n>
      <template v-slot:en>Welcome</template>
      <template v-slot:fr>Bienvenue</template>
    </bi18n>
  </div>
</template>

<script>
import LayoutHeader from "@/component/shared/layout-header/Index.vue";

export default {
  name: "page-index",
  components: {
    LayoutHeader
  }
};
</script>

<style lang="sass">
</style>
