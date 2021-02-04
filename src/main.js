import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueA11yDialog from "vue-a11y-dialog";

Vue.use(VueA11yDialog);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
