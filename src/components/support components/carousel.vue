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
    products: Array,
    index: Number,
    nrImages: Number,
  },

  emits: [],
};
</script>

<template>
  <div class="carousel-zone">
    <!-- zona delle immagini -->
    <div class="d-flex justify-content-between gap-3">
      <div>
        <img :src="products[index].img" class="d-block w-100" alt="..." />
      </div>
      <div>
        <img :src="products[index + 1].img" class="d-block w-100" alt="..." />
      </div>
    </div>
    <!-- bottoni -->
    <div class="carousel-btn carousel-control-prev-icon"></div>
    <div class="carousel-btn carousel-control-next-icon"></div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-zone {
  position: relative;
  .carousel-btn {
    color: var(--palette-white);
    background-color: var(--palette-lilla);
    padding: 5% 2%;

    cursor: pointer;

    position: absolute;
    top: 50%;

    &:first-child {
      left: 0px;
    }
    &:last-child {
      right: 0px;
    }
  }
}

img {
  width: 100%;
}
</style>
