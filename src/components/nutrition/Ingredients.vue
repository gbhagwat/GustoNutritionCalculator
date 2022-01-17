<template>
  <div>
    <button
      class="card px-3 py-2 mb-3"
      @click="toggleSelected"
      :class="{ isSelected: isSelected }"
      @keyup.enter="isShowFacts = !isShowFacts"
      :aria-label="isShowFacts ? 'Close Nutrition Facts' : 'Open Nutrition Facts'"
    >
      <span class="font-italic">{{ category }}</span>
      <h6>
        {{ name }}
        <br>
        <span
          :class="{ 'minus': isShowFacts, 'plus': !isShowFacts }"
          @mouseenter="isShowFacts = true"
          @mouseleave="isShowFacts = false"
          :aria-label="isShowFacts ? 'Close Nutrition Facts' : 'Open Nutrition Facts'"
          :title="isShowFacts ? 'Close Nutrition Facts' : 'Open Nutrition Facts'"
        ></span>
      </h6>
      <dl class="row justify-content-center px-2 py-3" v-if="isShowFacts">
        <dt class="col-2 col-sm-auto text-left">Calories</dt>
        <dd class="col text-sm-right">{{ calories }}</dd>
        <div class="w-100"></div>
        <dt class="col-2 col-sm-auto text-left">Total Fat(g)</dt>
        <dd class="col text-sm-right">{{ fat }}</dd>
        <div class="w-100"></div>
        <dt class="col-2 col-sm-auto text-left">Saturated Fat(g)</dt>
        <dd class="col text-sm-right">{{ satFat }}</dd>
        <div class="w-100"></div>
        <dt class="col-2 col-sm-auto text-left">Cholesterol(mg)</dt>
        <dd class="col text-sm-right">{{ chol }}</dd>
        <div class="w-100"></div>
        <dt class="col-2 col-sm-auto text-left">Sodium(mg)</dt>
        <dd class="col text-sm-right">{{ sodium }}</dd>
        <div class="w-100"></div>
        <dt class="col-2 col-sm-auto text-left">Carbs(g)</dt>
        <dd class="col text-sm-right">{{ carbs }}</dd>
        <div class="w-100"></div>
        <dt class="col-2 col-sm-auto text-left">Fiber(g)</dt>
        <dd class="col text-sm-right">{{ fiber }}</dd>
        <div class="w-100"></div>
        <dt class="col-2 col-sm-auto text-left">Protein(g)</dt>
        <dd class="col text-sm-right">{{ protein }}</dd>
        <div class="w-100"></div>
        <dt class="col-2 col-sm-auto text-left">Sugars(g)</dt>
        <dd class="col text-sm-right">{{ sugars }}</dd>
      </dl>
    </button>
  </div>
</template>

<script>
export default {
  name: "Ingredients",
  data() {
    return {
      isShowFacts: false
    };
  },
  props: {
    name: String,
    calories: Number,
    carbs: Number,
    fat: Number,
    satFat: Number,
    chol: Number,
    sodium: Number,
    fiber: Number,
    protein: Number,
    sugars: Number,
    category: String,
    serving: String,
    type: String
  },
  computed: {
    isSelected: function() {
      if (this.$store.state.selectedIngredients.indexOf(this.name) === -1) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    toggleSelected: function() {
      if (this.$store.state.selectedIngredients.indexOf(this.name) === -1) {
        this.$store.state.selectedIngredients.push(this.name);
      } else {
        let vm = this;
        var filtered = this.$store.state.selectedIngredients.filter(function(
          value,
          index,
          arr
        ) {
          return value !== vm.name;
        });
        this.$store.state.selectedIngredients = filtered;
      }
    }
  }
};
</script>

<style scoped>
span.plus::after,
span.minus::after {
  position: relative;
  display: inline-block;
  width: 6px;
  height: 6px;
}

span.plus::after {
  content: "+";
}

span.minus::after {
  content: "-";
}

dl.row {
  position: absolute;
  top: 63%;
  left: 20%;
  z-index: 100;
  background-color: #3d401b;
  width: 225px;
  color: #fff;
}

button {
  position: relative;
  height: 160px;
  width: 160px;
  font-size: 0.85rem;
  white-space: nowrap;
  color: #3d401b;
  cursor: pointer;
  border: 2px solid #ccc;
}

button:focus,
button:hover {
  border: 2px solid #bcd852;
  outline-color: #bcd852;
}

button span {
  font-size: 1rem;
  color: #4A3716;
}

button.isSelected {
  background-color: #899851;
  outline: 1px #3d401b;
  color: #fff;
}

button.isSelected span {
  color: rgba(255, 255, 255, 0.9);
}

h6 {
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: bold;
  white-space: normal;
  text-align: left;
}

h6 span {
  font-size: 1.5rem;
  padding: 0;
}
</style>