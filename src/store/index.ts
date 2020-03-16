import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

const technologies = [
  {
    order: 10,
    name: "ASP.NET",
    logo: "aspnet.png",
    info: "Robust backend servers",
    url: "https://lmgtfy.com/?q=asp.net"
  },
  {
    order: 10,
    name: "Amazon AWS",
    logo: "aws.png",
    info: "Cloud hosting, distribution, services",
    url: "https://lmgtfy.com/?q=amazon aws"
  },
  {
    order: 10,
    name: "C#",
    logo: "cs.svg",
    info: "Powerful statically typed programming language",
    url: "https://lmgtfy.com/?q=csharp"
  },
  {
    order: 1,
    name: "CSS3",
    logo: "css.png",
    info: "Control the way elements are displayed in the web browser",
    url: "https://lmgtfy.com/?q=css3"
  },
  {
    order: 10,
    name: "Docker",
    logo: "docker.png",
    info: "Package servers in reusable, distributable, reliable containers",
    url: "https://lmgtfy.com/?q=docker"
  },
  {
    order: 10,
    name: "ExpressJS",
    logo: "ExpressJS.png",
    info: "Lightweight but powerful NodeJS-based backend server",
    url: "https://lmgtfy.com/?q=expressJS"
  },
  {
    order: 10,
    name: "Figma",
    logo: "figma.svg",
    info: "Design and share interactive web and mobile mockups",
    url: "https://lmgtfy.com/?q=figma"
  },
  {
    order: 2,
    name: "Heroku",
    logo: "heroku.png",
    info: "Cloud-based web hosting platform",
    url: "https://lmgtfy.com/?q=heroku"
  },
  {
    order: 0,
    name: "HTML5",
    logo: "html.png",
    info: "Structure web pages and components",
    url: "https://lmgtfy.com/?q=html5"
  },
  {
    order: 10,
    name: "Jest",
    logo: "jest.png",
    info: "Test javascript code and web components",
    url: "https://lmgtfy.com/?q=jest unit test"
  },
  {
    order: 1,
    name: "JavaScript",
    logo: "js.png",
    info: "",
    url: "https://lmgtfy.com/?q=javascript"
  },
  {
    order: 10,
    name: "Mongo DB",
    logo: "mongo.png",
    info: "",
    url: "https://lmgtfy.com/?q=mongo"
  },
  {
    order: 3,
    name: "NodeJS",
    logo: "node.webp",
    info: "",
    url: "https://lmgtfy.com/?q=node"
  },
  {
    order: 2,
    name: "NPM - Node Package Manager",
    logo: "npm.png",
    info: "",
    url: "https://lmgtfy.com/?q=npm"
  },
  // {
  //   order: 10,
  //   name: "Mozilla's Open Badges",
  //   logo: "openbadges.png",
  //   info: "",
  //   url: "https://lmgtfy.com/?q=openbadges"
  // },
  {
    order: 10,
    name: "PostgrSQL",
    logo: "pg.png",
    info: "",
    url: "https://lmgtfy.com/?q=postgres"
  },
  {
    order: 10,
    name: "ReactJS",
    logo: "react.png",
    info: "",
    url: "https://lmgtfy.com/?q=react js"
  },
  {
    order: 10,
    name: "SASS",
    logo: "sass.svg",
    info: "",
    url: "https://lmgtfy.com/?q=sass"
  },
  {
    order: 10,
    name: "TypeScript",
    logo: "tsd.png",
    info: "",
    url: "https://lmgtfy.com/?q=typescript"
  },
  {
    order: 10,
    name: "Visual Studio Code",
    logo: "vscode.png",
    info: "",
    url: "https://lmgtfy.com/?q=vscode"
  },
  {
    order: 10,
    name: "VueJS",
    logo: "vue.png",
    info: "",
    url: "https://lmgtfy.com/?q=vuejs"
  }
];

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

const selfpaceds = [
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
    isSelfpaced: true,
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
    isSelfpaced: true,
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
    isSelfpaced: true,
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
    isSelfpaced: true,
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

const planOptions = [
  {
    id: "CommPlan",
    title: "Community Plan",
    price: "Only $50/month",
    pace: "Self-Paced",
    mentor: "Independent Study",
    commitment: "No Weekly Commitment",
    isPlanCompare: true,
    imgSrc: "https://source.unsplash.com/YK0HPwWDJ1I/348x232",
    routerLink: "/community"

  },
  {
    id: "SelfPacedPlan",
    title: "Self-Paced Plans",
    price: "$400/mo and up",
    pace: "Self-Paced",
    mentor: "Mentor-Driven",
    commitment: "5 to 40 Hours/Week Commitment",
    isPlanCompare: true,
    imgSrc: "https://source.unsplash.com/kwzWjTnDPLk/348x232",
    routerLink: "/selfpaced"
  },
  {
    id: "BootCampPlan",
    title: "Immersive Bootcamps",
    price: "$4500 and up",
    pace: "Self-Paced with Schedule",
    mentor: "Mentor-Driven",
    commitment: "40 to 50 Hours/Week Commitment",
    isPlanCompare: true,
    imgSrc: "https://source.unsplash.com/ABVE1cyT7hk/348x232",
    routerLink: "/bootcamps"
    
  },
];

const community = [
  {
    id: "community",
    title: "Community Plan",
    price: "50",
    duration: "per month",
    details: ["Independent Study", ...planCommonDetails],
    primary: false,
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
    plans: [...bootcamps, ...selfpaceds, ...community, ...planOptions],
    selectedPlan: false,
    technologies,
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
    getPlan: state => (planId: string) =>
      state.plans.find((x: any) => x.id === planId),
    getPathways: state => state.pathways,
    getTechnologies: state =>
      state.technologies.sort((a: any, b: any) => a.order - b.order)
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
