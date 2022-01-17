 <template>
  <div>
    <Header company="Gusto" slogan="From Farm to Street"></Header>
    <Navigation></Navigation>
    <Jumbotron
      title="Nutrition Information"
      content="See the facts for our specialty flatbreads and salads."
    ></Jumbotron>
    <div class="btn-group my-4">
      <button
        type="button"
        class="btn btn-primary mr-1"
        :class="{ active: showSalads }"
        @click="saladsShow"
      >Salads</button>
      <button
        type="button"
        class="btn btn-primary mr-1"
        :class="{ active: showFlatbreads }"
        @click="flatbreadsShow"
      >Flatbreads</button>
      <button
        type="button"
        class="btn btn-primary"
        :class="{ active: showSalads && showFlatbreads }"
        @click="showAll"
      >All</button>
    </div>
    <div v-if="showSalads">
      <h3>Salads</h3>
      <div class="p-3 mb-3">
        <div class="card-deck">
          <MenuItems
            v-for="item in filterCategory(this.menuItems, 'Salad')"
            :key="item.id"
            :name="item.name"
            :calories="item.calories"
            :fat="item.fat"
            :satFat="item.satFat"
            :chol="item.chol"
            :sodium="item.sodium"
            :carbs="item.carbs"
            :fiber="item.fiber"
            :protein="item.protein"
            :sugars="item.sugars"
            :serving="item.serving"
          ></MenuItems>
        </div>
      </div>
    </div>
    <div v-if="showFlatbreads">
      <h3>Flatbreads</h3>
      <div class="p-3 mb-3">
        <div class="card-deck">
          <MenuItems
            v-for="item in filterCategory(this.menuItems, 'Flatbread')"
            :key="item.id"
            :name="item.name"
            :calories="item.calories"
            :fat="item.fat"
            :satFat="item.satFat"
            :chol="item.chol"
            :sodium="item.sodium"
            :carbs="item.carbs"
            :fiber="item.fiber"
            :protein="item.protein"
            :sugars="item.sugars"
            :serving="item.serving"
            :crust="item.crust"
          ></MenuItems>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import MenuItems from "./nutrition/MenuItems";

import menuItems from "../assets/menuItems.json";

export default {
  name: "NutritionInfo",
  data() {
    return {
      showSalads: true,
      showFlatbreads: false,
      menuItems: menuItems
    };
  },
  components: {
    MenuItems
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
    flatbreadsShow: function() {
      this.showSalads = false;
      this.showFlatbreads = true;
    },
    saladsShow: function() {
      this.showFlatbreads = false;
      this.showSalads = true;
    },
    showAll: function() {
      this.showFlatbreads = true;
      this.showSalads = true;
    }
  }
};
</script>

<style scoped>
.card-deck {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 0.5rem;
}
</style>
