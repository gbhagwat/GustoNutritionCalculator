 <template>
  <div>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">{{ title }}</h4>
      </div>
      <div class="card-body">
        <dl class="row justify-content-center px-2 py-3">
          <dt class="col-2 col-sm-auto text-left">Calories</dt>
          <dd class="col text-sm-right">{{ (totals.calories > 0) ? totals.calories : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Total Fat(g)</dt>
          <dd class="col text-sm-right">{{ (totals.fat > 0) ? totals.fat : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Saturated Fat(g)</dt>
          <dd class="col text-sm-right">{{ (totals.satFat > 0) ? totals.satFat : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Cholesterol(mg)</dt>
          <dd class="col text-sm-right">{{ (totals.chol > 0) ? totals.chol : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Sodium(mg)</dt>
          <dd class="col text-sm-right">{{ (totals.sodium > 0) ? totals.sodium : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Carbs(g)</dt>
          <dd class="col text-sm-right">{{ (totals.carbs > 0) ? totals.carbs : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Fiber(g)</dt>
          <dd class="col text-sm-right">{{ (totals.fiber > 0) ? totals.fiber : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Protein(g)</dt>
          <dd class="col text-sm-right">{{ (totals.protein > 0) ? totals.protein : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Sugars(g)</dt>
          <dd class="col text-sm-right">{{ (totals.sugar > 0) ? totals.sugar : '0' }}</dd>
        </dl>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">{{ subTitle }}</h4>
      </div>
      <div class="card-body">
        <ul>
          <li class="tags" v-for="name in selection" :key="name.id">
            {{ name }}
            <span @click="removeTag(name)" class="float-right mr-1">x</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import ingredients from "../../assets/ingredients.json";

export default {
  name: "Calculator",
  props: {
    title: String,
    subTitle: String
  },
  data() {
    return {
      name: "",
      calories: 0,
      fat: 0,
      satFat: 0,
      chol: 0,
      fiber: 0,
      protein: 0,
      carbs: 0,
      sugars: 0
    };
  },
  methods: {
    removeTag: function(name) {
      console.log(name);
      var filtered = this.$store.state.selectedIngredients.filter(function(
        value
      ) {
        return value !== name;
      });
      this.$store.state.selectedIngredients = filtered;
    }
  },
  computed: {
    selection: function() {
      let selectedIngredients = this.$store.state.selectedIngredients;
      return selectedIngredients;
    },
    totals: function() {
      let selectedIngredients = this.$store.state.selectedIngredients;
      let portionSize = this.$store.state.portionSize;
      let facts = {};
      let totalCal = this.calories;
      let totalFat = this.fat;
      let totalSatFat = this.satFat;
      let totalChol = this.chol;
      let totalSodium = this.sodium;
      let totalCarbs = this.carbs;
      let totalFiber = this.fiber;
      let totalProtein = this.protein;
      let totalSugars = this.sugars;

      ingredients.forEach(function(ing) {
        if (selectedIngredients.indexOf(ing.name) > -1) {
          if (portionSize === "half") {
            facts.calories = totalCal += ing.half.calories;
            facts.fat = totalFat += ing.half.fat;
            facts.satFat = totalSatFat += ing.half.satFat;
            facts.chol = totalChol + ing.half.chol;
            facts.sodium = totalSodium + ing.half.sodium;
            facts.carbs = totalCarbs + ing.half.carbs;
            facts.fiber = totalFiber + ing.half.fiber;
            facts.protein = totalProtein + ing.half.protein;
            facts.sugars = totalSugars + ing.half.sugars;
          } else {
            facts.calories = totalCal += ing.full.calories;
            facts.fat = totalFat += ing.full.fat;
            facts.satFat = totalSatFat += ing.full.satFat;
            facts.chol = totalChol += ing.full.chol;
            facts.sodium = totalSodium += ing.full.sodium;
            facts.carbs = totalCarbs += ing.full.carbs;
            facts.fiber = totalFiber += ing.full.fiber;
            facts.protein = totalProtein += ing.full.protein;
            facts.sugars = totalSugars += ing.full.sugars;
          }
        }
      });
      return facts;
    }
  }
};
</script>

<style scoped>
.tags {
  display: block;
  background-color: #899851;
  margin: 2px 5px;
  color: #fff;
  padding: 6px;
  text-decoration: none;
}
</style>