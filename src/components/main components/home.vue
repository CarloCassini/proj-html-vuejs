<script>
export default {
  components: {},

  data() {
    return {
      ciccio: "images/backgrounds/hero-header-bakery.jpg",
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
  <img :src="ciccio" alt="" />
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
