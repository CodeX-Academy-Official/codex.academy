import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

window.addEventListener("load", function() {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
