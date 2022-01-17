import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import Menu from "@/components/Menu";
import NutritionInfo from "@/components/NutritionInfo";
import CalculatePlate from "@/components/CalculatePlate";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "",
      component: Home
    },
    {
      path: "/menu",
      component: Menu
    },
    {
      path: "/nutrition-info",
      component: NutritionInfo
    },
    {
      path: "/calculate-your-plate",
      component: CalculatePlate
    }
  ]
});
