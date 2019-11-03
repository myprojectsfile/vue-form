import Vue from "vue";
import App from "./App.vue";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full";
// import { ValidationProvider, extend } from "vee-validate";

Vue.component("ValidationProvider", ValidationProvider);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
