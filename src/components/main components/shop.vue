<script>
import bottone from "../support components/button.vue";
import paragraph from "../support components/paragraph.vue";
export default {
  components: { bottone, paragraph },

  data() {
    return {
      txtLittleTitle: `our products`,
      txtBigTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dsbdfn dnsb èapw `,
      txtParagraph: ``,

      txtBottone: "start shopping",
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
  <section>
    <div class="container">
      <div class="row my-5">
        <!-- trascrizione del paragrafo -->
        <div class="col-4">
          <paragraph
            :littleTitle="txtLittleTitle"
            :bigTitle="txtBigTitle"
            :paragraph="txtParagraph"
          />
          <bottone :innerText="txtBottone" />
        </div>
        <div class="col-8">
          <h1>carosellooooo</h1>
          <div class="d-flex">
            <!-- <img :src="products[1].img" alt="" /> -->
          </div>
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
