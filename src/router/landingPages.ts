import LandingContainer from "../views/landing/LandingContainer.vue";
import April2020 from "../views/landing/April2020.vue";
import HomeApril2020 from "../views/landing/HomeApril2020.vue";

const routes: Array<any> = [
  {
    path: "/landing",
    name: "Landing",
    component: LandingContainer,
    children: [
      {
        path: "april2020",
        component: April2020,
      },
      {
        path: "april2020b",
        meta: { layout: "no-navbar" },
        component: HomeApril2020,
      },
    ],
  },
];
export default routes;
