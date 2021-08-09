import Vue from "vue";
import VueRouter from "vue-router";
import { scrollToHash } from "./scrollToHash";
import ProgramOverview from "../views/ProgramOverview.vue";
import Community from "../views/Community.vue";
import Contact from "../views/Contact.vue";
import FAQs from "../views/FAQs.vue";
import Blog from "../views/Blog.vue";
import Method from "../views/Method.vue";
import Testimonials from "../views/Testimonials.vue";
import CallBack from "../views/CallBack.vue";
import AdmissionsCallBack from "../views/AdmissionsCallBack.vue";
import AdmissionsCallBackSetup from "../views/AdmissionsCallBackSetup.vue";
import HowItWorks from "../views/HowItWorks.vue";
import Pathways from "../views/Pathways.vue";
import EnrollmentContainer from "../views/enroll/EnrollmentContainer.vue";
import PlanConfirmation from "../views/enroll/PlanConfirmation.vue";
import EnrollmentForm from "../views/enroll/EnrollmentForm.vue";
import WaitForApproval from "../views/enroll/WaitForApproval.vue";
import EnrollmentComplete from "../views/enroll/EnrollmentComplete.vue";
import PaymentOptions from "../views/enroll/PaymentOptions.vue";
import FinancialAid from "../views/enroll/FinancialAid.vue";
import FinancialAidMarketing from "../views/FinancialAid.vue";
import CodeXStudentLoan from "../views/CodeXStudentLoan.vue";
import DeferredPaymentMarketing from "../views/DeferredPayment.vue";
import ISAPaymentMarketing from "../views/ISA.vue";
import Curriculum from "../views/Curriculum.vue";
import ApplicationFee from "../views/enroll/ApplicationFee.vue";
import MeetWithAdmissions from "../views/enroll/MeetWithAdmissions.vue";
import landingPageRoutes from "./landingPages";
import policyRoutes from "./policyRoutes";
import programRoutes from "./programRoutes";

Vue.use(VueRouter);

const routes = [
  ...landingPageRoutes,
  ...policyRoutes,
  ...programRoutes,
  {
    path: "/community",
    name: "Community",
    component: Community,
  },
  {
    path: "/programs/overview",
    name: "ProgramOverview",
    component: ProgramOverview,
  },
  {
    path: "/faqs",
    name: "FAQs",
    component: FAQs,
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
  },
  {
    path: "/pathways",
    name: "Pathways",
    component: Pathways,
  },
  {
    path: "/howitworks",
    name: "HowItWorks",
    component: HowItWorks,
  },
  {
    path: "/method",
    name: "Method",
    component: Method,
  },
  {
    path: "/financial-aid",
    name: "Financial Aid",
    component: FinancialAidMarketing,
  },
  {
    path: "/financing/codex",
    component: CodeXStudentLoan,
  },
  {
    path: "/deferred-payment",
    component: DeferredPaymentMarketing,
  },
  {
    path: "/isa",
    component: ISAPaymentMarketing,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/admissions-call-back-requested",
    name: "AdmissionsCallBack",
    component: AdmissionsCallBack,
  },
  {
    path: "/admissions-call-back",
    name: "AdmissionsCallBackSetup",
    component: AdmissionsCallBackSetup,
  },
  {
    path: "/call-back",
    name: "CallBack",
    component: CallBack,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/curriculum",
    name: "curriculum",
    component: Curriculum,
  },
  {
    path: "/findplan",
    redirect: "/programs",
  },
  {
    path: "/enroll",
    component: EnrollmentContainer,
    children: [
      {
        path: "",
        component: PlanConfirmation,
      },
      {
        path: "applicant",
        component: EnrollmentForm,
      },
      {
        name: "waitForApproval",
        path: "waitForApproval",
        component: WaitForApproval,
      },
      {
        name: "enroll-payment",
        path: "payment",
        component: PaymentOptions,
      },
      {
        name: "appfee",
        path: "appfee",
        component: ApplicationFee,
      },
      {
        path: "climb",
        component: FinancialAid,
      },
      {
        path: "admissions",
        component: MeetWithAdmissions,
      },
      {
        name: "enroll-complete",
        path: "complete",
        component: EnrollmentComplete,
      },
    ],
  },
  {
    path: "/enrollment-complete",
    redirect: "/enroll/complete",
  },
  {
    path: "/team",
    name: "Team",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Team.vue"),
  },
];

const router = new VueRouter({
  //mode: "history",
  //base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      scrollToHash(to.hash);
    } else {
      return { x: 0, y: 0 };
    }
  },
});

if (location.hash) {
  scrollToHash(location.hash);
}

export default router;
