<script>
import paragraph from "../support components/paragraph.vue";
export default {
  components: { paragraph },

  data() {
    return {
      txtLittleTitle: `DON'T JUST TAKE OUR WORD FOR IT`,
      txtBigTitle: `"finally found asd fe dsfvccx jug   Lorem ipsum, dolo consectetur adipisicing eipsum, dolo consectetur adipisicing eipsum, dolo consectetur adipisicing e lit. Assumenda, iste? "`,
      txtParagraph: `Rachel Cooper, Founder`,
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
      <div class="col-12 p-3 jumbo">
        <div class="debug social-card">
          <div>
            <img src="images/backgrounds/bakery-process-1.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="col-6 p-3 jumbo">
        <div class="debug social-card">
          <div>
            <img src="images/backgrounds/bakery-process-2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="col-6 p-3 jumbo">
        <div class="debug social-form p-5">
          <paragraph
            :littleTitle="txtLittleTitle"
            :bigTitle="txtBigTitle"
            :paragraph="txtParagraph"
          />
        </div>
      </div>
      <div class="col-12 p-3 jumbo">
        <div class="debug social-card">
          <div>
            <img src="images/backgrounds/bakery-process-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.jumbo {
  height: 100%;
  .social-card {
    overflow: hidden;

    img {
      max-width: 100%;
      object-fit: cover;
    }
  }
  .social-form {
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--palette-white);
  }
}
</style>
