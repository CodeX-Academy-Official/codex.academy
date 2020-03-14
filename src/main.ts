import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueYouTube from "vue-youtube";

Vue.use(VueYouTube);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

window.addEventListener("load", function() {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
