<script>
import bottone from "../support components/button.vue";
export default {
  components: { bottone },

  data() {
    return {
      backgrounImage: "images/backgrounds/hero-header-bakery.jpg",
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
    <div class="container">
      <div class="row hero-zone">
        <div class="col-4">
          <p>fresh & tasty backery every day</p>
          <h1>the perfect fresh bread</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            velit fugit iure, necessitatibus blanditiis maxime esse perferendis
            reiciendis earum atque dicta officia tempora sunt reprehenderit ut
            hic a ipsam et.
          </p>

          <bottone :innerText="'explore our products'" />
        </div>
      </div>
    </div>
  </section>
  <!-- <img :src="backgrounImage" alt="" /> -->
</template>

<style lang="scss" scoped>
section {
  background-size: cover;
  background-image: url("images/backgrounds/hero-header-bakery.jpg");

  .hero-zone {
    padding: 200px 0;
  }
}
img {
  width: 100%;
}
</style>
