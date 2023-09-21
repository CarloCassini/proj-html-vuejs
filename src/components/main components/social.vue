<script>
import paragraph from "../support components/paragraph.vue";
export default {
  components: { paragraph },

  data() {
    return {
      txtLittleTitle: `DON'T JUST TAKE OUR WORD FOR IT`,
      txtBigTitle: `"finally found asd fe dsfvccx jug   Lorem ipsum, dolo consectetur adipisicing eipsum, dolo  consectetur adipisicidolo consectetur adipisicing eipsum, dolo consectetur adipisicing e lit. Assumenda, iste? "`,
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
        <div class="social-card">
          <div>
            <img src="images/backgrounds/bakery-process-1.jpg" alt="" />
          </div>
          <div
            class="social-card-text p-5 d-flex flex-column justify-content-between"
          >
            <div class="d-flex justify-content-between align-items-start">
              <h1 class="social-card-title">Tell us what u have in mind</h1>
              <h1 class="social-card-number">01</h1>
            </div>
            <div class="d-flex justify-content-end align-items-end">
              <paragraph
                class="paragraph-dimension"
                :invertColor="true"
                littleTitle="MANUAL INGREDIENTS SELECTION"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo velit vero dolorem aperiam obcaec
                ur adipisicing elit. Porro explicabo velit vero dolorem aperiam obcaecur adipisicing elit. Porro explicabo velit vero dolorem aperiam obcaecatiLorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo velit vero dolorem aperiam obcaecati!!"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 p-3 jumbo">
        <div class="social-card">
          <div>
            <img src="images/backgrounds/bakery-process-2.jpg" alt="" />
          </div>
          <div
            class="social-card-text p-5 d-flex flex-column justify-content-between"
          >
            <div class="d-flex justify-content-between align-items-start">
              <h1 class="social-card-title">We start Baking</h1>
              <h1 class="social-card-number">02</h1>
            </div>
            <div class="d-flex justify-content-start align-items-end">
              <paragraph
                class="paragraph-dimension"
                :invertColor="true"
                littleTitle="Sweet & Delicious"
                paragraph="Lorem ipsum dolor sit amet colorem aperiam obcaecur adipisicing elitum dolor sit amet consectetur adipisicing elit. Porro explicabo velit vero dolorem aperiam obcaecati!!"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 p-3 jumbo">
        <div class="social-form p-5">
          <paragraph
            :littleTitle="txtLittleTitle"
            :bigTitle="txtBigTitle"
            :paragraph="txtParagraph"
          />
        </div>
      </div>
      <div class="col-12 p-3 jumbo">
        <div class="social-card">
          <div>
            <img src="images/backgrounds/bakery-process-3.jpg" alt="" />
          </div>
          <div
            class="social-card-text p-5 d-flex flex-column justify-content-between"
          >
            <div class="d-flex justify-content-between align-items-start">
              <h1 class="social-card-title">Delivery to your home</h1>
              <h1 class="social-card-number">03</h1>
            </div>
            <div class="d-flex justify-content-start align-items-end">
              <paragraph
                class="paragraph-dimension"
                :invertColor="true"
                littleTitle="Baked to order a Gift Wrapped"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo velit vero dolorem aperiam obcaec
                ur adipisicing elit. Porro explicabo velit vero dolorem aperiam obcaecur adipisicing elit. Porro explicabo velit vero dolorem aperiam obcaecatiLorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo velit vero dolorem aperiam obcaecati!!"
              />
            </div>
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
    position: relative;
    overflow: hidden;

    .social-card-text {
      color: white;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.4);
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      .social-card-title {
        font-size: 3rem;
      }
      .social-card-number {
        font-weight: lighter;
        font-size: 6rem;
      }
      .paragraph-dimension {
        max-width: 40%;
      }
    }

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
