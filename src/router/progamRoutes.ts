import Programs from "../views/Programs.vue";
import FullStackDeveloper from "../views/programs/fullstackdev.vue";
import FrontEndDeveloper from "../views/programs/frontenddev.vue";
import FullStackEngineer from "../views/programs/fullstackeng.vue";

const routes: Array<any> = [
  {
    path: "/programs",
    component: Programs,
  },
  { path: "/programs/full-stack-developer", component: FullStackDeveloper },
  { path: "/programs/full-stack-engineer", component: FullStackEngineer },
  { path: "/programs/front-end-developer", component: FrontEndDeveloper },
];
export default routes;
