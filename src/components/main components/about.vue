<script>
import bottone from "../support components/button.vue";
import paragraph from "../support components/paragraph.vue";

export default {
  components: { bottone, paragraph },

  data() {
    return {
      txtCenter: true,
      txtLittleTitle: "CORPORATE & WEDDINGS",
      txtBigTitle: `Baking Special Moments`,

      txtBottone: "Explore More",
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
      <paragraph
        :center="txtCenter"
        :littleTitle="txtLittleTitle"
        :bigTitle="txtBigTitle"
        :paragraph="txtParagraph"
      />
      <div class="row justify-content-between">
        <div class="col-6 p-3 about-corporate">
          <img src="/images/about/corporate-bg.jpg" alt="" id="corporate" />
          <div class="m-3 corporate-to-hoover">
            <paragraph
              :invertColor="true"
              :center="true"
              littleTitle="INTERNATIONAL BAKERY"
              bigTitle="Corporate Events"
            />
            <bottone :innerText="txtBottone" :invert="true" />
          </div>
        </div>
        <div class="col-6 p-3 about-wedding">
          <img src="/images/about/wedding-bg.jpg" alt="" id="wedding" />
          <div class="m-3 wedding-to-hoover">
            <paragraph
              :invertColor="true"
              :center="true"
              littleTitle="INTERNATIONAL BAKERY"
              bigTitle="Wedding Events"
            />
            <bottone :innerText="txtBottone" :invert="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}
.about-corporate {
  position: relative;
}

.about-corporate:hover .corporate-to-hoover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.corporate-to-hoover {
  display: none;
  background-image: url("/images/about/corporate-hover-bg.jpg");
  background-size: contain;
}

.about-wedding {
  position: relative;
}

.about-wedding:hover .wedding-to-hoover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.wedding-to-hoover {
  display: none;
  background-image: url("/images/about/wedding-hover-bg.jpg");
  background-size: contain;
}
</style>
