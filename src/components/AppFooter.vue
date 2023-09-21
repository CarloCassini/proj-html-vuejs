<script>
// importo lo store
import { store } from "../data/store";

// importo i componenti
import bottone from "./support components/button.vue";

export default {
  components: { bottone },

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
  <section class="container">
    <div class="m-2 footer-zone row">
      <div class="col-8">
        <div>
          <img src="images/logo/avada-bakery-logo.png" alt="" />
        </div>

        <ul class="my-3 ps-0">
          <li class="me-4" v-for="(section, index) in store.siteSections">
            <div v-if="!section.icon">
              <a :href="section" @click.prevent="activatePage(index)">
                {{ section.index }}
              </a>
              <div class="underline" v-show="section.active == true"></div>
            </div>
            <div v-else class="d-flex">
              <a :href="section" @click.prevent="activatePage(index)">
                <font-awesome-icon :icon="section.index" />
              </a>
              <div class="underline" v-show="section.active == true"></div>
              <div class="mx-2 small-circle">
                {{ store.wishList }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-4 d-flex flex-column justify-content-center">
        <h5 class="text-end my-3">Subscribe to our newsletter</h5>
        <form>
          <div class="d-flex">
            <input
              type="email"
              class="form-control me-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter e-mail adress*"
            />
            <bottone inner-text="subscribe" :invert="true" />
          </div>
        </form>
      </div>
      <div class="col-12 my-5">
        <div class="info-footer d-flex justify-content-between align-items-end">
          <div id="copyright">
            copiright all right rederved Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tempore, tempora.
          </div>
          <div class="mx-2">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </div>
          <div class="mx-2">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </div>
          <div class="mx-2">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </div>
          <div class="mx-2">
            <font-awesome-icon icon="fa-brands fa-pinterest-p" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
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
  }
}

.footer-zone {
  display: flex;

  img {
    height: 70px;
  }
}

.small-circle {
  display: inline-block;
  color: var(--palette-purple);
  text-align: center;
  background-color: var(--palette-white);
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
}
.info-footer {
  color: var(--palette-purple);
}

#copyright {
  margin-right: auto;
  font-size: xx-small;
  color: var(--palette-gray);
}
</style>
