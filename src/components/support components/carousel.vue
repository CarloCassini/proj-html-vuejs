<script>
import card from "./card.vue";

export default {
  components: { card },

  data() {
    return {};
  },

  methods: {},

  // created(): {},

  props: {
    products: Array,
    index: Number,
    nrImages: Number,
    cardTipe: String,
  },

  emits: ["change-index-prev", "change-index-next"],
  computed: {
    indexArray() {
      const path = this.nrImages - 1;

      return path;
    },
  },
};
</script>

<template>
  <div class="carousel-zone">
    <!-- zona delle immagini -->
    <div class="d-flex justify-content-between gap-3">
      <div v-for="numero in nrImages">
        <div>
          <card :product="products[index + numero - 1]" :cardTipe="cardTipe" />
          <!-- <img
            :src="products[index + numero - 1].img"
            class="d-block w-100"
            alt="..."
          /> -->
        </div>
      </div>
    </div>
    <!-- bottoni -->
    <div
      class="carousel-btn carousel-control-prev-icon"
      @click="$emit('change-index-prev')"
    ></div>
    <div
      class="carousel-btn carousel-control-next-icon"
      @click="$emit('change-index-next')"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-zone {
  position: relative;
  .carousel-btn {
    color: var(--palette-white);
    background-color: var(--palette-lilla);
    padding: 3% 1%;

    cursor: pointer;

    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

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
