<script>
export default {
  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {},

  // created(): {},

  props: {
    invertColor: Boolean,
    center: Boolean,
    littleTitle: String,
    bigTitle: String,
    paragraph: String,
  },

  emits: [],
};
</script>

<template>
  <div v-if="invertColor" :class="center ? 'text-center' : ''">
    <p class="invert">{{ littleTitle }}</p>
    <h1 class="invert">{{ bigTitle }}</h1>
    <p class="invert">
      {{ paragraph }}
    </p>
  </div>
  <div v-else :class="center ? 'text-center' : ''">
    <p>{{ littleTitle }}</p>
    <h1>{{ bigTitle }}</h1>
    <p>
      {{ paragraph }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/variables.scss" as *;
@use "../../style/general.scss" as *;

p.invert {
  color: var(--palette-purewhite);
}
h1.invert {
  color: var(--palette-purewhite);
}
</style>
