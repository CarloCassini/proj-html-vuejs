<script>
// importo lo store
import { store } from "../data/store";

export default {
  components: {},

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
  <section>
    <div class="container header-zone">
      <div>
        <img src="images/logo/avada-bakery-logo.png" alt="" />
      </div>
      <div class="list">
        <ul>
          <li class="mx-3" v-for="section in store.siteSections">
            <a :href="section">
              {{ section }}
            </a>
          </li>
          <!-- per lo shop -->
          <li>
            <a href="#">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  align-items: center;
}

ul {
  color: #55328b;
  li {
    list-style: none;
    display: inline-block;
    a {
      color: currentColor;
      text-decoration: none;
    }
    &:hover {
      content: " ";
      border-bottom: 3px solid;
    }
  }
}

.header-zone {
  display: flex;
  align-items: center;

  img {
    height: var(--header-height);
  }

  :first-child {
    margin-right: auto;
  }
}
</style>
