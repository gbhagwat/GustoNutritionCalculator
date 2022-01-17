 <template>
  <div>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <section class="px-3 py-3 mb-5">
          <h4>{{serving}}-Size {{type}} Nutrition Facts</h4>

          <!-- choose a base -->
          <h5>
            <span>Start with a</span> Base.
          </h5>
          <div class="ingredients card-deck mb-4">
            <!-- Greens -->
            <Ingredients
              ref="ing"
              v-for="item in filterCategory(this.ingredients, 'Greens')"
              :key="item.id"
              :name="item.name"
              :calories="( $store.state.portionSize === 'full') ? item.full.calories : item.half.calories"
              :fat="( $store.state.portionSize === 'full') ? item.full.fat : item.half.fat"
              :satFat="( $store.state.portionSize === 'full') ? item.full.satFat : item.half.satFat"
              :chol="( $store.state.portionSize === 'full') ? item.full.chol : item.half.chol"
              :sodium="( $store.state.portionSize === 'full') ? item.full.sodium : item.half.sodium"
              :carbs="( $store.state.portionSize === 'full') ? item.full.carbs : item.half.carbs"
              :fiber="( $store.state.portionSize === 'full') ? item.full.fiber : item.half.fiber"
              :protein="( $store.state.portionSize === 'full') ? item.full.protein : item.half.protein"
              :sugars="( $store.state.portionSize === 'full') ? item.full.sugars : item.half.sugars"
              :category="item.category"
            ></Ingredients>
            <!-- Grains -->
            <Ingredients
              ref="ing"
              v-for="item in filterCategory( this.ingredients , 'Grains')"
              :key="item.id"
              :name="item.name"
              :calories="( $store.state.portionSize === 'full') ? item.full.calories : item.half.calories"
              :fat="( $store.state.portionSize === 'full') ? item.full.fat : item.half.fat"
              :satFat="( $store.state.portionSize === 'full') ? item.full.satFat : item.half.satFat"
              :chol="( $store.state.portionSize === 'full') ? item.full.chol : item.half.chol"
              :sodium="( $store.state.portionSize === 'full') ? item.full.sodium : item.half.sodium"
              :carbs="( $store.state.portionSize === 'full') ? item.full.carbs : item.half.carbs"
              :fiber="( $store.state.portionSize === 'full') ? item.full.fiber : item.half.fiber"
              :protein="( $store.state.portionSize === 'full') ? item.full.protein : item.half.protein"
              :sugars="( $store.state.portionSize === 'full') ? item.full.sugars : item.half.sugars"
              :category="item.category"
            ></Ingredients>
          </div>
          <!-- Choose your cheese. -->
          <h5>
            <span>Choose your</span> cheese.
          </h5>
          <div class="ingredients card-deck mb-4">
            <Ingredients
              ref="ing"
              v-for="item in filterCategory(this.ingredients, 'Cheese')"
              :key="item.id"
              :name="item.name"
              :calories="( $store.state.portionSize === 'full') ? item.full.calories : item.half.calories"
              :fat="( $store.state.portionSize === 'full') ? item.full.fat : item.half.fat"
              :satFat="( $store.state.portionSize === 'full') ? item.full.satFat : item.half.satFat"
              :chol="( $store.state.portionSize === 'full') ? item.full.chol : item.half.chol"
              :sodium="( $store.state.portionSize === 'full') ? item.full.sodium : item.half.sodium"
              :carbs="( $store.state.portionSize === 'full') ? item.full.carbs : item.half.carbs"
              :fiber="( $store.state.portionSize === 'full') ? item.full.fiber : item.half.fiber"
              :protein="( $store.state.portionSize === 'full') ? item.full.protein : item.half.protein"
              :sugars="( $store.state.portionSize === 'full') ? item.full.sugars : item.half.sugars"
              :category="item.category"
            ></Ingredients>
          </div>
        </section>
      </div>
      <div class="col-12 col-lg-3">
        <Calculator title="Nutrition Facts" subTitle="Items Selected"></Calculator>
        <button @click="reset" class="btn btn-secondary">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import Calculator from "./nutrition/Calculator";
import Ingredients from "./nutrition/Ingredients";

import ingredients from "../assets/ingredients.json";

export default {
  name: "BuildSalad",
  data() {
    return {
      selectedItems: this.$store.state.selectedItems,
      ingredients: ingredients
    };
  },
  computed: {
    serving: function() {
      return this.$store.state.portionSize;
    },
    type: function() {
      return this.$store.state.foodType;
    }
  },
  components: {
    Calculator,
    Ingredients
  },
  methods: {
    compare: function(a, b) {
      // Use toUpperCase() to ignore character casing
      const itemA = a.name.toUpperCase();
      const itemB = b.name.toUpperCase();

      let comparison = 0;
      if (itemA > itemB) {
        comparison = 1;
      } else if (itemA < itemB) {
        comparison = -1;
      }
      return comparison;
    },
    filterCategory: function(array, cat) {
      var output = array.filter(function(item) {
        return item.category === cat;
      });
      output.sort(this.compare);
      return output;
    },
    reset: function() {
      this.$store.state.selectedIngredients = [];
      this.$refs.ing.forEach(function(el) {
        return (el.isSelected = false);
      });
    }
  }
};
</script>

<style>
section {
  position: relative;
  padding: 10px;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to top, #899851, #bcd852) 10;
}

section h4 {
  position: absolute;
  top: 0;
  font-size: 1.75rem;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  margin: -9px 0 0; /* half of font-size */
  background: #fff;
  color: #6a7839;
  padding: 0 3px;
}

p.h4 {
  margin: 25px 0;
}

p.h4 span {
  font-style: "italic";
}

h5 {
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 25px 0 15px 0;
  text-align: left;
}

#app {
  counter-reset: h5;
}

h5::before {
  counter-increment: h5;
  content: counter(h5);
  display: inline-block;
  height: 40px;
  width: 40px;
  color: #4A3716;
  border: 1px solid #B9D452;
  border-radius: 50%;
  padding-top: 5px;
  padding-left: 12px;
  margin-right: 13px;
  font-weight: 700;
}

h5 span {
  font-style: italic;
  text-transform: none;
}

small {
  text-transform: none;
}

.ingredients {
  justify-content: center;
}

.btn-primary {
  background-color: #728032;
  border-color: #677527;
}
</style>
