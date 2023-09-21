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

  methods: {
    activatePage(index) {
      for (let i = 0; i < store.siteSections.length; i++) {
        store.siteSections[i].active = false;
      }
      store.siteSections[index].active = true;
    },
  },

  // created(): {},

  props: {},

  emits: [],
};
</script>

<template>
  <section>
    <div class="m-3 header-zone">
      <div>
        <img src="images/logo/avada-bakery-logo.png" alt="" />
      </div>
      <div class="list">
        <ul>
          <li class="mx-3" v-for="(section, index) in store.siteSections">
            <div v-if="!section.icon">
              <a :href="section" @click.prevent="activatePage(index)">
                {{ section.index }}
              </a>
              <div class="underline" v-show="section.active == true"></div>
            </div>
            <div v-else>
              <a :href="section" @click.prevent="activatePage(index)">
                <font-awesome-icon :icon="section.index" />
              </a>
              <div class="underline" v-show="section.active == true"></div>
            </div>
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
    .underline {
      content: " ";
      border-bottom: 3px solid;
    }
    // &:hover {
    //   content: " ";
    //   border-bottom: 3px solid;
    // }
  }
}

.header-zone {
  display: flex;
  align-items: center;

  img {
    height: 70px;
  }

  :first-child {
    margin-right: auto;
  }
}
</style>
