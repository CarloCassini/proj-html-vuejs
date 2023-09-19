<script>
export default {
  components: {},

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
          <div class="intro-title">fresh and tasty backery every day</div>
          <h2>the perfect fresh bread</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            velit fugit iure, necessitatibus blanditiis maxime esse perferendis
            reiciendis earum atque dicta officia tempora sunt reprehenderit ut
            hic a ipsam et.
          </div>
          <div>XXX BOTTONE XXX</div>
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
.intro-title {
  color: grey;
}
</style>
