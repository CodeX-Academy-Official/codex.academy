import LandingContainer from "../views/landing/LandingContainer.vue";
import HomeApril2020 from "../views/landing/HomeApril2020.vue";
import StudentApril2020 from "../views/landing/StudentApril2020.vue";
import IndiaMay2020 from "../views/landing/IndiaMay2020.vue";
import SummerCampMay2020 from "../views/landing/SummerCampMay2020.vue";
import InternationalMay2020 from "../views/landing/InternationalMay2020.vue";
import TalentlyAug2020 from "../views/landing/TalentlyAug2020.vue";
import PathriseAug2020 from "../views/landing/PathriseAug2020.vue";
import InternationalPathriseAug2020 from "../views/landing/InternationalPathriseAug2020.vue";

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
        path: "in202005",
        component: IndiaMay2020,
        meta: { layout: "no-navbar" },
      },
      {
        path: "camp202005",
        component: SummerCampMay2020,
        meta: { layout: "no-navbar" },
      },
      {
        path: "int202005",
        component: InternationalMay2020,
      },
      {
        path: "talently202008",
        component: TalentlyAug2020,
      },
      {
        path: "pathrise1202008",
        component: PathriseAug2020
      },
      {
        path: "pathriseint1202008",
        component: InternationalPathriseAug2020
      }
    ],
  },
];
export default routes;
