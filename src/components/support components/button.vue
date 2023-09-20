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
    innerText: String,
  },

  emits: [],
};
</script>

<template>
  <button
    type="button"
    class="btn d-flex justify-content-center align-items-center"
  >
    {{ innerText }}
  </button>
</template>

<style lang="scss" scoped>
.btn {
  color: var(--palette-purple);
  background-color: var(--palette-white);
  &:hover {
    color: var(--palette-white);
    background-color: var(--palette-purple);
  }
}
</style>
