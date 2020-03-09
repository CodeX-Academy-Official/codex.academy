import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

const planCommonDetails = [
  "Self-Paced",
  "Unlimited Learning Pathway Access",
  "24/7 Community Chat Access",
  "Build a Portfolio"
];

const mentorDrivenCommonDetails = [
  "Mentor-Driven",
  ...planCommonDetails,
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
      ...mentorDrivenCommonDetails,
      "2 hours/week live 1:1 mentoring",
      "Up to 3 Evaluations/month"
    ],
    isBootcamp: false,
    isMentoring: true,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/tpi4vFUd",
        testUrl: "https://app.hubspot.com/sales-checkout/test_OqVDtXse"
      },
      {
        type: "callBack"
      }
    ]
  },
  {
    id: "selfpaced5",
    title: "Part-Time",
    price: "800",
    duration: "per month",
    details: [
      "20 hour/week commitment",
      ...mentorDrivenCommonDetails,
      "5 hours/week live 1:1 mentoring",
      "Up to 5 Evaluations/month"
    ],
    isBootcamp: false,
    isMentoring: true,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/wBN890ZZ",
        testUrl: "https://app.hubspot.com/sales-checkout/test_fi5hBGei"
      },
      {
        type: "callBack"
      }
    ]
  },
  {
    id: "selfpaced10",
    title: "Full-Time",
    price: "1,500",
    duration: "per month",
    details: [
      "40 hour/week commitment",
      ...mentorDrivenCommonDetails,
      "10 hours/week live 1:1 mentoring",
      "Up to 10 Evaluations/month"
    ],
    primary: true,
    isBootcamp: false,
    isMentoring: true,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/lTFpUJBC",
        testUrl: "https://app.hubspot.com/sales-checkout/test_9bmF4PDE"
      },
      {
        type: "callBack"
      }
    ]
  },
  {
    id: "selfpaced20",
    title: "Overtime",
    price: "2,800",
    duration: "per month",
    details: [
      "40-50 hour/week commitment",
      ...mentorDrivenCommonDetails,
      "20 hours/week live 1:1 mentoring",
      "Up to 20 Evaluations/month"
    ],
    isBootcamp: false,
    isMentoring: true,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/3IILq-Ug",
        testUrl: "https://app.hubspot.com/sales-checkout/test_Q2LszpvP"
      },
      {
        type: "callBack"
      }
    ]
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
      {
        css: "bootcamp-description",
        text:
          "Graduates able to develop and deploy simple web applications using HTML, CSS, JavaScipt and JQuery."
      },
      ...bootcampCommonDetails,
      "Up to 30 Micro-Certifications"
    ],
    isBootcamp: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/npnCjJOv",
        testUrl: "https://app.hubspot.com/sales-checkout/test_AIL7qMLK"
      },
      {
        type: "callBack"
      }
    ]
  },
  {
    id: "bootcamp6",
    title: "6-Month Bootcamp",
    price: "9,000",
    duration: "over 6 months",
    details: [
      {
        css: "bootcamp-description",
        text:
          "Graduates able to develop challenging full-stack data-driven web applications using best practices in technologies like ReactJS and NodeJS."
      },
      ...bootcampCommonDetails,
      "Up to 60 Micro-Certifications"
    ],
    primary: true,
    isBootcamp: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/mSpPTv7B",
        testUrl: "https://app.hubspot.com/sales-checkout/test_jQz_nidL"
      },
      {
        type: "callBack"
      }
    ]
  },
  {
    id: "bootcamp9",
    title: "9-Month Bootcamp",
    price: "13,500",
    duration: "over 9 months",
    details: [
      {
        css: "bootcamp-description",
        text:
          "Graduates able to develop complex, secure and well-engineered full-stack web applications using multiple front-end and back-end technologies."
      },
      ...bootcampCommonDetails,
      "Up to 90 Micro-Certifications"
    ],
    primary: false,
    isBootcamp: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/1P9YipN5",
        testUrl: "https://app.hubspot.com/sales-checkout/test_GaKZU8H-"
      },
      {
        type: "callBack"
      }
    ]
  }
];

const community = [
  {
    id: "community",
    title: "Community Plan",
    price: "50",
    duration: "per month",
    details: ["Independent Study", ...planCommonDetails],
    primary: false,
    isBootcamp: false,
    isMentoring: false,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/YkUECPjJ",
        testUrl: "https://app.hubspot.com/sales-checkout/test_D3sgM1ph"
      },
      {
        type: "callBack"
      }
    ]
  }
];

const SELECT_PLAN = "SELECT_PLAN";

export default new Vuex.Store({
  state: {
    testMode: false,
    plans: [...bootcamps, ...plans, ...community],
    selectedPlan: false,
    pathways: [
      {
        name: "Level 1",
        description:
          "Able to build and deploy simple public websites using HTML and CSS.",
        badgeImageUrl: "img/badges/level1.png",
        pathwayUrl:
          "https://badgr.com/public/pathway/5df3b7bc46e0fb002140cd03/element/5df3b7bc46e0fb002140cd02"
      },
      {
        name: "Level 2",
        description:
          "Able to build and auto-deploy dynamic web applications using HTML, CSS and Javascript.",
        badgeImageUrl: "img/badges/level2.png",
        pathwayUrl:
          "https://badgr.com/public/pathway/5df50e9d46e0fb002140d64f/element/5df50e9d46e0fb002140d64e"
      },
      {
        name: "Level 3",
        description:
          "Able to build and auto-deploy responsive data-driven web applications using advanced HTML, CSS and Javascript.",
        badgeImageUrl: "img/badges/level3.png",
        pathwayUrl:
          "https://badgr.com/public/pathway/5e0f533246e0fb002739c4f1/element/5e0f533246e0fb002739c4f0"
      },
      {
        name: "Level 4",
        description:
          "Able to build backend-driven web applications using HTML, CSS, Javascript and NodeJS.",
        badgeImageUrl: "img/badges/level4.png",
        pathwayUrl:
          "https://badgr.com/public/pathway/5e0f7a9d46e0fb00221bc2b9/element/5e0f7a9d46e0fb00221bc2b8"
      },
      {
        name: "Level 5",
        description:
          "Able to build and deploy database-driven web applications using ReactJS and NodeJS.",
        badgeImageUrl: "img/badges/level5.png",
        pathwayUrl: false
      }
    ]
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
    },
    getPathways: state => {
      return state.pathways;
    }
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
