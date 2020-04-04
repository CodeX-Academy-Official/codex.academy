import Privacy from "../views/policies/Privacy.vue";
import PolicyContainer from "../views/policies/PolicyContainer.vue";

const routes: Array<any> = [
  {
    path: "/policy",
    component: PolicyContainer,
    children: [
      {
        path: "privacy",
        component: Privacy,
      },
    ],
  },
];
export default routes;
