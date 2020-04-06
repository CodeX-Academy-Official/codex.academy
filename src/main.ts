import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueYouTube from "vue-youtube";
import VueGtag from "vue-gtag";
import Hotjar from "vue-hotjar";
import Vuelidate from "vuelidate";
import bootstrapFontAwesome from "./bootstrapFontAwesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Default from "@/components/layout/Default.vue";
import NoNavbar from "@/components/layout/NoNavbar.vue";

Vue.component("default-layout", Default);
Vue.component("no-navbar-layout", NoNavbar);

Vue.component("font-awesome-icon", FontAwesomeIcon);
bootstrapFontAwesome();

Vue.use(Vuelidate);

Vue.use(Hotjar, {
  id: "1739723",
  isProduction: true,
});

Vue.use(
  VueGtag,
  {
    config: { id: "UA-158800537-1" },
  },
  router
);

Vue.use(VueYouTube);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

window.addEventListener("load", function () {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
