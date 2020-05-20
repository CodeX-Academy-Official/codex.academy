import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueYouTube from "vue-youtube";
import VueGtag from "vue-gtag";
import Hotjar from "vue-hotjar";
import bootstrapFontAwesome from "./bootstrapFontAwesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueScrollTo from "vue-scrollto";
import VueProgressiveImage from "vue-progressive-image";
import Rollbar from "vue-rollbar";

Vue.use(VueProgressiveImage);

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -180,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

import Default from "@/components/layout/Default.vue";
import NoNavbar from "@/components/layout/NoNavbar.vue";

Vue.component("default-layout", Default);
Vue.component("no-navbar-layout", NoNavbar);

Vue.component("font-awesome-icon", FontAwesomeIcon);
bootstrapFontAwesome();

Vue.use(Hotjar, {
  id: "1739723",
  isProduction: true,
});

Vue.use(
  VueGtag,
  {
    config: { id: "UA-158800537-1" },
    includes: [{ id: "AW-650985233", params: { send_page_views: false } }],
  },
  router
);

Vue.use(Rollbar, {
  accessToken: "8e73588e9df640c5bc4c1e2c9f081107",
  captureUncaught: true,
  captureUnhandledRejections: true,
  enabled: true,
  source_map_enabled: true,
  environment: "production",
  payload: {
    client: {
      javascript: {
        code_version: "1.0",
      },
    },
  },
});

Vue.use(VueYouTube);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.errorHandler = (err) => {
  if (location.hostname === "localhost") throw err;

  console.log("Exception: ", err);
  const v: any = Vue;
  v.rollbar.error(err);
  store.dispatch("reset");
  window.open("/");
};

window.onerror = function(message, source, lineno, colno, error) {
  console.log("Exception: ", error);
};

Vue.config.productionTip = false;

window.addEventListener("load", function() {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
