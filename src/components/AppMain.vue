<script>
// importo lo store
import { store } from "../data/store";

// importo i sotto componenti
import about from "./main components/about.vue";
import contact from "./main components/contact.vue";
import gallery from "./main components/gallery.vue";
import home from "./main components/home.vue";
import location from "./main components/location.vue";
import orders from "./main components/orders.vue";
import shop from "./main components/shop.vue";
import social from "./main components/social.vue";

export default {
  components: { about, contact, gallery, home, location, orders, shop, social },

  data() {
    return {
      store,
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
  <div>
    <!-- questo l'ordine di presentazione dei componenti -->
    <home id="home" />
    <shop id="shop" />
    <about id="about" />
    <gallery id="gallery" />
    <social id="social" />
    <location id="location" />
    <contact id="contact" />
    <orders id="orders" />
  </div>
</template>

<style lang="scss" scoped></style>
