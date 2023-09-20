<script>
import bottone from "../support components/button.vue";
import paragraph from "../support components/paragraph.vue";
import carousel from "../support components/carousel.vue";
export default {
  components: { bottone, paragraph, carousel },

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
          <div>
            <carousel :products="products" :index="5" :nrImages="3" />

            <!-- <div v-for="product in products">
              <img :src="product.img" alt="" />
              <div>{{ product.priceA }}</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
img {
  width: 50%;
}
</style>
