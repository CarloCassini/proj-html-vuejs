<script>
import bottone from "../support components/button.vue";
import paragraph from "../support components/paragraph.vue";
export default {
  components: { bottone, paragraph },

  data() {
    return {
      backgrounImage: "images/backgrounds/hero-header-bakery.jpg",
      txtLittleTitle: `fresh & tasty backery every day`,
      txtBigTitle: `the perfect fresh bread`,
      txtParagraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt velit fugit iure, necessitatibus blanditiis maxime esse perferendis reiciendis earum atque dicta officia tempora sunt reprehenderit ut hic a ipsam et.`,

      txtBottone: "explore our products",
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
          <paragraph
            :littleTitle="txtLittleTitle"
            :bigTitle="txtBigTitle"
            :paragraph="txtParagraph"
          />
          <bottone :innerText="txtBottone" />
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
