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
    littleTitle: String,
    bigTitle: String,
    paragraph: String,
  },

  emits: [],
};
</script>

<template>
  <p>{{ littleTitle }}</p>
  <h1>{{ bigTitle }}</h1>
  <p>
    {{ paragraph }}
  </p>
</template>

<style lang="scss" scoped>
@use "../../style/variables.scss" as *;
@use "../../style/general.scss" as *;
</style>
