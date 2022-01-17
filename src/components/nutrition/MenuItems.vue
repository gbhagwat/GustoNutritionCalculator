<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">{{ name }}</h4>
        <p class="text-small mt-2 font-italic">
          {{ serving }}
          <span>{{ crust }}</span>
        </p>
      </div>
      <div class="card-body container">
        <dl class="row">
          <dt class="col-3 col-sm-auto text-left">Calories</dt>
          <dd class="col text-sm-right">{{ calories }}</dd>
          <div class="w-100"></div>
          <dt class="col-3 col-sm-auto text-left">Total Fat(g)</dt>
          <dd class="col text-sm-right">{{ fat }}</dd>
          <div class="w-100"></div>
          <dt class="col-3 col-sm-auto text-left">Saturated Fat(g)</dt>
          <dd class="col text-sm-right">{{ satFat }}</dd>
          <div class="w-100"></div>
          <dt class="col-3 col-sm-auto text-left">Cholesterol(mg)</dt>
          <dd class="col text-sm-right">{{ chol }}</dd>
          <div class="w-100"></div>
          <dt class="col-3 col-sm-auto text-left">Sodium(mg)</dt>
          <dd class="col text-sm-right">{{ sodium }}</dd>
          <div class="w-100"></div>
          <dt class="col-3 col-sm-auto text-left">Carbs(g)</dt>
          <dd class="col text-sm-right">{{ carbs }}</dd>
          <div class="w-100"></div>
          <dt class="col-3 col-sm-auto text-left">Fiber(g)</dt>
          <dd class="col text-sm-right">{{ fiber }}</dd>
          <div class="w-100"></div>
          <dt class="col-3 col-sm-auto text-left">Protein(g)</dt>
          <dd class="col text-sm-right">{{ protein }}</dd>
          <div class="w-100"></div>
          <dt class="col-3 col-sm-auto text-left">Sugars(g)</dt>
          <dd class="col text-sm-right">{{ sugars }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItems",
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
    crust: String
  }
};
</script>

<style scoped>
.card {
  margin: 1em;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 0;
}

.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>