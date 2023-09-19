<script>
// importo lo store
import { store } from "./data/store";

// importo i componenti
// import AppHeader from "./components/AppHeader.vue";

export default {
  // components: { AppHeader },

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
  <h1>
    hey oh
    <div class="m-5">saaa</div>
    let's go
  </h1>
  <font-awesome-icon icon="fa-solid fa-paper-plane" />
  {{ store.prova }}
</template>

<style lang="scss">
h1 {
  color: red;
  div {
    color: blue;
  }
}
</style>
