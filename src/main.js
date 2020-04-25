import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.config.devtools = true;
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
