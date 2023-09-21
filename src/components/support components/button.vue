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
    {{ innerText }}
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
