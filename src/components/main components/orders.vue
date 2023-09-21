<script>
import bottone from "../support components/button.vue";
import paragraph from "../support components/paragraph.vue";
export default {
  components: { bottone, paragraph },

  data() {
    return {
      backgrounImage: "images/backgrounds/hero-header-bakery.jpg",
      txtLittleTitle: `try our seasonal products`,
      txtBigTitle: `Order for pic-up order delivery to your home`,

      txtBottone: "shop now",
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
      <div class="row">
        <div class="col-8 p-5">
          <paragraph
            :invertColor="true"
            :littleTitle="txtLittleTitle"
            :bigTitle="txtBigTitle"
          />
          <bottone class="mt-5" :innerText="txtBottone" />
        </div>
      </div>
    </div>
  </section>
  <!-- <img :src="backgrounImage" alt="" /> -->
</template>

<style lang="scss" scoped>
section {
  height: 60vh;
  background-size: cover;
  background-image: url("images/backgrounds/call-to-action-bg.jpg");
}
img {
  width: 100%;
}
</style>
