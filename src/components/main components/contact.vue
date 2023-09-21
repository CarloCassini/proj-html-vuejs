<script>
import bottone from "../support components/button.vue";
import paragraph from "../support components/paragraph.vue";

export default {
  components: { paragraph, bottone },

  data() {
    return {
      txtCenter: true,
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
  <section class="container">
    <div class="row">
      <!-- first row -->
      <div class="col-3 p-3">
        <div class="">
          <img src="images/social/social-1.jpg" alt="" />
        </div>
      </div>
      <!-- form zone -->
      <div class="col-6 p-3">
        <div class="bg-form">
          <paragraph
            :center="txtCenter"
            littleTitle="MADE FOR SHARING"
            bigTitle="Let's stay in touch"
          />
          <bottone
            innerText="follow-us"
            :invert="true"
            class="mt-3"
            :icon="'fa-brands fa-instagram'"
          />
        </div>
      </div>
      <div class="col-3 p-3">
        <div class=""><img src="images/social/social-2.jpg" alt="" /></div>
      </div>
      <!-- second row -->
      <div class="col-3 p-3">
        <div class=""><img src="images/social/social-3.jpg" alt="" /></div>
      </div>
      <div class="col-3 p-3">
        <div class=""><img src="images/social/social-5.jpg" alt="" /></div>
      </div>
      <div class="col-3 p-3">
        <div class=""><img src="images/social/social-4.jpg" alt="" /></div>
      </div>
      <div class="col-3 p-3">
        <div class=""><img src="images/social/social-6.jpg" alt="" /></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bg-form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--palette-white);
}
img {
  width: 100%;
}
</style>
