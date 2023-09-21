<script>
import bottone from "../support components/button.vue";
import paragraph from "../support components/paragraph.vue";

export default {
  components: { bottone, paragraph },

  data() {
    return {
      txtCenter: true,
      txtLittleTitle: "LOCATIONS",
      txtBigTitle: `Visit our Bakeries`,

      txtBottone: "view map",
    };
  },

  computed: {},

  methods: {},

  // created(): {},

  props: {
    cities: Array,
  },

  emits: [],
};
</script>

<template>
  <section class="my-5">
    <div class="container">
      <paragraph
        class="mb-5"
        :center="txtCenter"
        :littleTitle="txtLittleTitle"
        :bigTitle="txtBigTitle"
        :paragraph="txtParagraph"
      />
      <div class="row">
        <!-- new-york -->
        <div v-for="city in cities" class="col-6 p-0 change-bg">
          <img :src="city.img" alt="" />
          <h1 class="text-center p-3">{{ city.name }}</h1>
          <div
            class="city-data d-flex justify-content-between align-items-center"
          >
            <paragraph
              :center="txtCenter"
              littleTitle="CALL US"
              :paragraph="city.phone"
            />
            <paragraph
              :center="txtCenter"
              littleTitle="OPEN ALL WEEK"
              :paragraph="city.workTime"
            />
            <div>
              <bottone :innerText="txtBottone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../style/general.scss" as *;
.change-bg:nth-child(odd) {
  background-color: #f1f9fb;
}
.change-bg:nth-child(even) {
  background-color: #faf3e3;
}

.city-data {
  padding: 0 5% 2% 5%;
}

img {
  width: 100%;
}
</style>
