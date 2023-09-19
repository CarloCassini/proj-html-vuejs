<script>
// importo lo store
import { store } from "./data/store";

// importo i componenti principali
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

// importo componenti aggiuntivi
import Floating_button from "./components/support components/Floating_button.vue";

export default {
  components: { AppHeader, AppMain, AppFooter, Floating_button },

  data() {
    return {
      store,
    };
  },

  computed: {},

  methods: {},

  // created(): {},

  props: {},

  emits: [],
};
</script>

<template>
  <Floating_button />
  <AppHeader class="header-zone debug" />
  <div v-for="section in store.siteSections">
    {{ section }}
  </div>
  <AppMain class="debug" />

  <AppFooter class="debug" />
</template>

<style lang="scss">
@use "./style/variables.scss" as *;
@use "./style/general.scss" as *;

.header-zone {
  height: 10vh;
}
</style>
