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
    <div class="float_btn">bottone datas</div>
    <div class="float_btn">bottone %%%</div>
    <div class="float_btn">freccetta ^^</div>
  </div>
</template>

<style lang="scss" scoped>
.float-zone {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: var(--header-height);

  height: calc(100vh - var(--header-height));
  right: 1%;
}
.float_btn {
  height: 50px;
  aspect-ratio: 1;
  margin: 5px;
  background-color: skyblue;

  &:last-child {
    margin-top: auto;
    margin-bottom: 0;
  }
}
</style>
