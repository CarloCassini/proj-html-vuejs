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
      txtParagraph: `asd`,

      txtBottone: "shop all products",

      carouselStart: 0,
      carouselCountImg: 4,
    };
  },

  computed: {},

  methods: {
    changeIndexPrev() {
      if (this.carouselStart <= 0) {
        this.carouselStart = this.products.length - this.carouselCountImg;
      } else {
        this.carouselStart = this.carouselStart - 1;
      }
    },
    changeIndexNext() {
      this.carouselStart = this.carouselStart + 1;
      if (
        this.carouselStart >=
        this.products.length - this.carouselCountImg + 1
      ) {
        this.carouselStart = 0;
      }
    },
  },

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
        <div class="col-3">
          <paragraph
            :littleTitle="txtLittleTitle"
            :bigTitle="txtBigTitle"
            :paragraph="txtParagraph"
          />
          <bottone :innerText="txtBottone" />
        </div>
        <div class="col-9">
          <div>
            <carousel
              :products="products"
              :index="carouselStart"
              :nrImages="carouselCountImg"
              @change-index-prev="changeIndexPrev()"
              @change-index-next="changeIndexNext()"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
