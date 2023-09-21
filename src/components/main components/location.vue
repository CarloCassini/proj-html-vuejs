<script>
import bottone from "../support components/button.vue";
import paragraph from "../support components/paragraph.vue";

export default {
  components: { bottone, paragraph },

  data() {
    return {
      txtCenter: true,
      txtLittleTitle: "LOCATIONS",
      txtBigTitle: `Visit our Bakeries`,

      txtBottone: "Explore More",
    };
  },

  computed: {},

  methods: {},

  // created(): {},

  props: {
    products: Array,
  },

  emits: [],
};
</script>

<template>
  <section class="mt-5">
    <div class="container">
      <paragraph
        :center="txtCenter"
        :littleTitle="txtLittleTitle"
        :bigTitle="txtBigTitle"
        :paragraph="txtParagraph"
      />
      <div class="row">
        <div class="col-6 p-0 debug">
          <img src="/images/stores/new-york-bk.jpg" alt="" />
        </div>
        <div class="col-6 p-0 debug">
          <img src="/images/stores/london-bk.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
