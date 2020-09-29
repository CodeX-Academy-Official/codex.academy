import LandingContainer from "../views/landing/LandingContainer.vue";
import Home from "../views/Home.vue";
import Loading from "../views/landing/Loading.vue";

const routes: Array<any> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  // OLD ROUTES 
  {
    path: "/landing",
    name: "Landing",
    component: LandingContainer,
    children: [
      {
        path: "202004s",
        component: Loading,
        meta: { layout: "no-navbar" },
      },
      {
        path: "202004",
        meta: { layout: "no-navbar" },
        component: Loading,
      },
      {
        path: "in202005",
        component: Loading,
        meta: {
          layout: "no-navbar",
          source: "none",
          international: true
        }
      },
      {
        path: "camp202005",
        component: Loading,
        meta: { layout: "no-navbar" },
      },
      {
        path: "int202005",
        component: Loading,
        meta: {
          source: "none",
          international: true
        }
      },
      {
        path: "talently202008",
        component: Loading,
        meta: {
          source: "talently",
          international: true
        }
      },
      {
        path: "pathrise1202008",
        component: Loading,
        meta: {
          source: "pathrise",
          international: false
        }
      },
      {
        path: "pathriseint1202008",
        component: Loading,
        meta: {
          source: "pathrise",
          international: true
        }
      }
    ],
  },
];
export default routes;
