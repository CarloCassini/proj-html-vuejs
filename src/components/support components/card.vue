<script>
import paragraph from "../support components/paragraph.vue";
export default {
  components: { paragraph },

  data() {
    return {
      txtCenter: true,
    };
  },

  methods: {},

  // created(): {},

  props: {
    product: Object,
    cardTipe: String,
  },

  emits: [],
  computed: {},
};
</script>

<template>
  <div class="card-image">
    <img :src="product.img" alt="" />
    <!-- regole per lo shop -->
    <div v-if="cardTipe == 'shop'">
      <div class="onhover">
        <paragraph
          :invertColor="true"
          :center="txtCenter"
          :bigTitle="product.title"
          :paragraph="product.tipe"
        />
        <div>
          <paragraph
            :invertColor="true"
            :center="txtCenter"
            :littleTitle="'$' + product.priceA + ' ' + '$' + product.priceB"
          />
        </div>
      </div>
    </div>
    <!-- regole per la gallery -->
    <div v-if="cardTipe == 'gallery'">
      <div class="onhover">
        <div><a href="#"> SELECT OPTIONS</a> / <a href="#"> QUICK VIEW</a></div>
      </div>
    </div>
  </div>
  <!-- sottotitolo x gallery -->
  <div v-if="cardTipe == 'gallery'" class="text-center m-1 gallery-description">
    <div class="gallery-title">{{ product.title }}</div>
    <div>${{ product.priceA }} - ${{ product.priceB }}</div>
  </div>
</template>

<style lang="scss" scoped>
.gallery-description {
  color: var(--palette-purple);
  .gallery-title {
    font-weight: bold;
    font-size: large;
  }
}
img {
  width: 100%;
}
.onhover {
  color: var(--palette-purewhite);
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);

  a {
    font-size: x-small;
    color: currentColor;
    text-decoration: none;
  }
}
.card-image {
  position: relative;
}
.card-image:hover .onhover {
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
