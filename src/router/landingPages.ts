import LandingContainer from "../views/landing/LandingContainer.vue";
import April2020 from "../views/landing/April2020.vue";
import April2020b from "../views/landing/April2020b.vue";

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
        component: April2020b,
      },
    ],
  },
];
export default routes;
