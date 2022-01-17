 <template>
  <div>
    <Header company="Gusto" slogan="From Farm to Street"></Header>
    <Navigation></Navigation>
    <Jumbotron
      title="Calculate Your Plate"
      content="Select from the following ingredients for more accurate nutrition information when crafting your own."
    ></Jumbotron>

    <div class="px-5 py-3">
      <div class="btn-group my-4 pb-3">
        <button
          type="button"
          class="btn btn-primary mr-1"
          :class="{ active: showPizza }"
          @click="showPizzaInfo"
        >Flatbread</button>
        <button
          type="button"
          class="btn btn-primary mr-5"
          :class="{ active: showSalad }"
          @click="showSaladInfo"
        >Salad</button>
        <Servings></Servings>
      </div>

      <div v-if="showPizza">
        <BuildPizza></BuildPizza>
      </div>
      <div v-if="showSalad">
        <BuildSalad></BuildSalad>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import BuildPizza from "@/components/BuildPizza";
import BuildSalad from "@/components/BuildSalad";
import Servings from "./nutrition/ServingBtn";

export default {
  name: "CalculatePlate",
  data() {
    return {
      showPizza: true,
      showSalad: false
    };
  },
  methods: {
    showPizzaInfo: function() {
      this.showPizza = true;
      this.showSalad = false;
      this.$store.state.foodType = "flatbread";
      this.reset();
    },
    showSaladInfo: function() {
      this.showSalad = true;
      this.showPizza = false;
      this.$store.state.foodType = "salad";
      this.reset();
    },
    reset: function() {
      this.$store.state.selectedIngredients = [];
      this.$refs.ing.forEach(function(el) {
        return (el.isSelected = false);
      });
    }
  },
  components: {
    BuildPizza,
    BuildSalad,
    Servings
  }
};
</script>