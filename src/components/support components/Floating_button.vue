<script>
export default {
  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {},

  // created(): {},

  props: {},

  emits: [],
};
</script>

<template>
  <div class="float-zone">
    <div class="float-btn">
      <div class="d-flex flex-column justify-content-center">
        <font-awesome-icon icon="fa-solid fa-folder-open" size="xl" />
        <div class="txt-small">demos</div>
      </div>
    </div>
    <div class="float-btn">
      <div class="d-flex flex-column justify-content-center">
        <div class="promo-zone">
          <span style="position: absolute; top: 1px">$</span>
          <span
            style="font-size: x-large; font-weight: bolder; margin-left: 10px"
            >39</span
          >
        </div>
        <div class="txt-small">on sale</div>
      </div>
    </div>
    <div class="float-btn-arrow">
      <font-awesome-icon icon="fa-solid fa-chevron-up" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.float-zone {
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: var(--header-height);

  height: calc(100vh - var(--header-height));
  right: 1%;
}
.float-btn {
  box-shadow: 0px 0px 8px var(--palette-white), 0px 0px 8px var(--palette-white),
    0px 0px 8px var(--palette-white), 0px 0px 8px var(--palette-purewhite);
  border-radius: 10px;
  height: 50px;
  aspect-ratio: 1;
  margin: 5px;
  background-color: var(--palette-white);
}
.txt-small {
  margin-top: 3px;
  text-align: center;
  font-size: x-small;
}

.float-btn-arrow {
  text-align: center;
  color: white;
  margin-top: auto;
  margin-bottom: 0;
  padding: 1px 3px;

  background-color: #474747;
  border-radius: 3px;
}

.promo-zone {
  position: relative;
  display: flex;
  justify-content: start;
  color: #65bc7b;
}
</style>
