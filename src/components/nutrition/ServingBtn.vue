<template>
  <div>
      <button
        type="button"
        class="btn btn-primary mr-1"
        :class="{ active: showFullFacts }"
        @click="showFullIng"
      >Full-Size</button>
      <button
        type="button"
        class="btn btn-primary mr-1"
        :class="{ active: showHalfFacts }"
        @click="showHalfIng"
      >Half-Size</button>  </div>
</template>

<script>
export default {
  name: "ServingBtn",
  data() {
    return {
      showFullFacts: true,
      showHalfFacts: false
    };
  },
  methods: {
    showHalfIng: function() {
      this.showHalfFacts = true;
      this.showFullFacts = false;
      this.$store.state.portionSize = "half";
    },
    showFullIng: function() {
      this.showFullFacts = true;
      this.showHalfFacts = false;
      this.$store.state.portionSize = "full";
    }
  }
};
</script>

<style scoped>
 button {
   border-radius: 0;
 }
</style>

