<script>
export default {
  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {},

  // created(): {},

  props: {
    invert: Boolean,
    innerText: String,
    icon: String,
  },

  emits: [],
};
</script>

<template>
  <button
    type="button"
    class="btn d-flex justify-content-center align-items-center"
    :class="invert ? 'invert' : 'base'"
  >
    <!-- se viene passata una icona al bottone -->
    <div class="mx-3">
      <font-awesome-icon v-if="icon" :icon="icon" class="me-3" />

      {{ innerText }}
    </div>
  </button>
</template>

<style lang="scss" scoped>
.base {
  color: var(--palette-purple);
  background-color: var(--palette-white);
  &:hover {
    color: var(--palette-white);
    background-color: var(--palette-purple);
  }
}
.invert {
  color: var(--palette-white);
  background-color: var(--palette-purple);
  &:hover {
    color: var(--palette-purple);
    background-color: var(--palette-white);
  }
}
</style>
