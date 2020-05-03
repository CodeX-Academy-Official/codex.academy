import LandingContainer from "../views/landing/LandingContainer.vue";
import HomeApril2020 from "../views/landing/HomeApril2020.vue";
import StudentApril2020 from "../views/landing/StudentApril2020.vue";
import ThinkDigitalApril2020 from "../views/landing/ThinkDigitalApril2020.vue";
import DeferredApril2020 from "../views/landing/DeferredApril2020.vue";

const routes: Array<any> = [
  {
    path: "/landing",
    name: "Landing",
    component: LandingContainer,
    children: [
      {
        path: "202004s",
        component: StudentApril2020,
        meta: { layout: "no-navbar" },
      },
      {
        path: "202004",
        meta: { layout: "no-navbar" },
        component: HomeApril2020,
      },
      {
        path: "thinkDigitalApril2020b",
        meta: { layout: "no-navbar" },
        component: ThinkDigitalApril2020,
      },
      {
        path: "202004d",
        component: DeferredApril2020,
      },
    ],
  },
];
export default routes;
