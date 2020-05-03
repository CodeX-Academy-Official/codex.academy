import Programs from "../views/Programs.vue";
import FullStackDeveloper from "../views/programs/fullstackdev.vue";

const routes: Array<any> = [
  {
    path: "/programs",
    component: Programs,
  },
  { path: "/programs/full-stack-dev", component: FullStackDeveloper },
  // { path: "/programs/full-stack-eng", component: FullStackDeveloper },
  // { path: "/programs/front-end-dev", component: FullStackDeveloper },
];
export default routes;
