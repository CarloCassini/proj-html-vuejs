<script>
// importo lo store
import { store } from "../data/store";

export default {
  components: {},

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
  <section>
    <div class="container header-zone">
      <div>
        <img src="images/logo/avada-bakery-logo.png" alt="" />
      </div>
      <div>aaasss</div>
      <div>aaaaaaxz</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  align-items: center;
}
.header-zone {
  display: flex;
  align-items: center;
  img {
    height: var(--header-height);
  }

  :first-child {
    margin-right: auto;
  }
}
</style>
