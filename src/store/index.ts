import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

const planCommonDetails = [
  "Self-Paced",
  "Mentor-Driven",
  "Unlimited Learning Pathway Access",
  "24/7 Community Chat Access",
  "Build a Portfolio",
  "Internship Opportunities",
  "Certifications Included",
  "Career Counseling"
];

const plans = [
  {
    id: "selfpaced2",
    title: "Casual",
    price: "400",
    duration: "per month",
    details: [
      "10 hour/week commitment",
      ...planCommonDetails,
      "2 hours/week live 1:1 mentoring",
      "Up to 3 Evaluations/month"
    ],
    isBootcamp: false,
    paymentTypes: {
      creditCard: "https://app.hubspot.com/sales-checkout/tpi4vFUd"
    }
  },
  {
    id: "selfpaced5",
    title: "Part-Time",
    price: "800",
    duration: "per month",
    details: [
      "20 hour/week commitment",
      ...planCommonDetails,
      "5 hours/week live 1:1 mentoring",
      "Up to 5 Evaluations/month"
    ],
    isBootcamp: false,
    paymentTypes: {
      creditCard: "https://app.hubspot.com/sales-checkout/wBN890ZZ"
    }
  },
  {
    id: "selfpaced10",
    title: "Full-Time",
    price: "1,500",
    duration: "per month",
    details: [
      "40 hour/week commitment",
      ...planCommonDetails,
      "10 hours/week live 1:1 mentoring",
      "Up to 10 Evaluations/month"
    ],
    primary: true,
    isBootcamp: false,
    paymentTypes: {
      creditCard: "https://app.hubspot.com/sales-checkout/lTFpUJBC",
      callback: true
    }
  },
  {
    id: "selfpaced20",
    title: "Overtime",
    price: "2,800",
    duration: "per month",
    details: [
      "40-50 hour/week commitment",
      ...planCommonDetails,
      "20 hours/week live 1:1 mentoring",
      "Up to 20 Evaluations/month"
    ],
    isBootcamp: false,
    paymentTypes: {
      callback: true
    }
  }
];

const bootcampCommonDetails = [
  "40-50 hour/week commitment",
  "Mentor-Driven",
  "Unlimited Learning Pathway Access",
  "24/7 Community Chat Access",
  "Build a Portfolio",
  "Internship Opportunities",
  "Career Counseling",
  "10 hours/week live 1:1 mentoring"
];

const bootcamps = [
  {
    id: "bootcamp3",
    title: "3-Month Bootcamp",
    price: "4,500",
    duration: "over 3 months",
    details: [
      "Graduates able to develop and deploy simple web applications using HTML, CSS, JavaScipt and JQuery.",
      ...bootcampCommonDetails,
      "Up to 30 Micro-Certifications"
    ],
    isBootcamp: true,
    paymentTypes: { callback: true }
  },
  {
    id: "bootcamp6",
    title: "6-Month Bootcamp",
    price: "9,000",
    duration: "over 6 months",
    details: [
      "Graduates able to develop challenging full-stack data-driven web applications using best practices in technologies like ReactJS and NodeJS.",
      ...bootcampCommonDetails,
      "Up to 60 Micro-Certifications"
    ],
    primary: true,
    isBootcamp: true,
    paymentTypes: {
      creditCard: "https://app.hubspot.com/sales-checkout/mSpPTv7B",
      callback: true
    }
  },
  {
    id: "bootcamp9",
    title: "9-Month Bootcamp",
    price: "13,500",
    duration: "over 9 months",
    details: [
      "Graduates able to develop complex, secure and well-engineered full-stack web applications using multiple front-end and back-end technologies.",
      ...bootcampCommonDetails,
      "Up to 90 Micro-Certifications"
    ],
    primary: false,
    isBootcamp: true,
    paymentTypes: {
      financing: true,
      callback: true
    }
  }
];

const SELECT_PLAN = "SELECT_PLAN";

export default new Vuex.Store({
  state: {
    plans: [...bootcamps, ...plans],
    selectedPlan: false
  },
  mutations: {
    [SELECT_PLAN](state: any, planId) {
      state.selectedPlan = planId;
    }
  },
  actions: {
    selectPlan(context, planId) {
      context.commit(SELECT_PLAN, planId);
    }
  },
  getters: {
    getPlan: state => (planId: string) => {
      return state.plans.find((x: any) => x.id === planId);
    }
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
