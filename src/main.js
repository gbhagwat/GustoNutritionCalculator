import Vue from "vue";
import App from "./App.vue";

import Header from "./components/layout/Header";
import Jumbotron from "./components/layout/Jumbotron";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

import { store } from "./store/store";
import router from "./router";

Vue.component("Header", Header);
Vue.component("Jumbotron", Jumbotron);
Vue.component("Navigation", Navigation);
Vue.component("Footer", Footer);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
