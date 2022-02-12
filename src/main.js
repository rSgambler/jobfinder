import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import {
  BNavbar,
  BNavbarNav,
  BNavbarBrand,
  BNavbarToggle,
} from "bootstrap-vue";
Vue.component("b-navbar", BNavbar);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-navbar-brand", BNavbarBrand);
Vue.component("b-navbar-toggle", BNavbarToggle);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
