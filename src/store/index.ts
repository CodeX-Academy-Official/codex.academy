import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { shuffle } from "./utils";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

const testimonials = [
  {
    name: "Randy K.",
    location: "Miami, FL USA",
    position: "Learner",
    headshot: "img/headshots/randy.jpg",
    comments:
      "The CodeX curriculum allowed me to work at my own pace with mentors who were flexible with my ever changing schedule. As a busy professional, the scheduling flexibility made a big difference in helping me successfully complete the curriculum."
  },
  {
    name: "Yamil G.",
    location: "Tegucigalpa, Honduras",
    position: "Learner",
    headshot: "img/headshots/yamil.jpeg",
    comments:
      "I have tried to learn programming many times before with no success. This time I feel I'm making significant progress. There's something about the CodeX methodology that just makes sense and keep you motivated."
  },
  {
    name: "Louis P.",
    location: "Nashville, TN USA",
    position: "Learner",
    headshot: "img/headshots/louis.jpg",
    comments:
      "I’ve wanted to learn code for years. CodeX has mentors that ensure I am understanding the material. I have learned so much and I am set up for success, I love it!"
  },
  {
    name: "LeAnne B.",
    location: "Atlanta, GA USA",
    position: "Learner",
    headshot: "img/headshots/leanne.jpg",
    comments:
      "CodeX was a really fun experience and has been valuable for my career!"
  },
  {
    name: "Rony V.",
    location: "Tegucigalpa, Honduras",
    position: "Mentor",
    headshot: "img/headshots/ronyv.jpg",
    comments:
      "Mentoring someone at CodeX Academy is a really fulfilling experience. What's incredible is seeing someone go from zero to a full-stack developer right before your eyes."
  },
  {
    name: "Byron S.",
    location: "Murfreesboro, TN USA",
    position: "Mentor",
    headshot: "img/headshots/byron.jpeg",
    comments:
      "Being a mentor at CodeX Academy means seeing lives sent in new directions! I love to spend time with my learners, hear what new things they have discovered, and motivate them to keep going!"
  }
];

const methods = [
  {
    id: "2",
    title: "Mentorship",
    subtitle: "Live 1-on-1 Mentorship",
    isPrimary: true,
    description:
      "CodeX Academy believes mentorship is the key to achieving true mastery in programming. As you learn to code, you will get stuck several times (maybe a pesky semi-colon missing). As a CodeX Academy Learner, you have access to a personal mentor who can answer you via chat or even jump on a video call to work it out. Live 1-on-1 mentorship accelerates learning and makes it stick!",
    icon: "faPeopleCarry"
  },
  {
    id: "6",
    title: "Internship",
    subtitle: "Gaining Meaningful Experience",
    isPrimary: true,
    description:
      "Certification from a coding school is respectable, but experience beats paper every time! CodeX Academy graduates are given the opportunity to participate in an impactful internship where they can prove out newly learned skills, forge lasting relationships and jump start the “experience” section of their resumes.",
    icon: "faBriefcase"
  },
  {
    id: "1",
    title: "Popular Technologies",
    subtitle: "Tech that powers the planet",
    description:
      "With so many choices in front-end, back-end and database technologies, how do you know where to start or what to learn? CodeX Academy leads you to the most popular, most marketable technologies throughout the stack. As a CodeX Academy graduate, you'll be equipped to work with the technologies that power the majority of the world's systems and development teams.",
    icon: "faSimCard",
    accentColor: "default"
  },
  {
    id: "3",
    title: "Self-Paced",
    subtitle: "Learn at your own pace, No cohorts",
    description:
      "Some learn certain concepts quickly, while other concepts may take more time. CodeX Academy gives you the freedom to build mastery at your own pace. Some have a natural gift to understand technology and move quickly. Others require more time. Both groups can thrive at CodeX Academy.",
    icon: "faClock",
    accentColor: "periwinkle"
  },
  {
    id: "4",
    title: "Remote",
    subtitle: "From the Comfort of Anywhere",
    description:
      "CodeX Academy is 100% remote. That means you can learn to code from just about anywhere. All you need is a computer, internet, power and a comfortable spot.",
    icon: "faTv",
    accentColor: "lilac"
  },
  {
    id: "5",
    title: "Mastery-Based",
    subtitle: "Actually learn, No sliding through",
    description:
      "Traditional education programs are set to a rigid schedule while students try their best to stay caught up. CodeX Academy offers a program that is based on your own mastery of the concepts and skills. We don’t move on to the next thing until we are sure you’ve really got it!",
    icon: "faTasks",
    accentColor: "fucia"
  }
];

const technologies = [
  {
    order: 10,
    name: "ASP.NET",
    logo: "aspnet.png",
    info: "Robust backend servers",
    url: "https://dotnet.microsoft.com/apps/aspnet"
  },
  {
    order: 10,
    name: "Amazon AWS",
    logo: "aws.png",
    info: "Cloud hosting, distribution, services",
    url: "https://aws.amazon.com/"
  },
  {
    order: 10,
    name: "C#",
    logo: "cs.svg",
    info: "Powerful statically typed programming language",
    url: "https://docs.microsoft.com/en-us/dotnet/csharp/"
  },
  {
    order: 1,
    name: "CSS3",
    logo: "css.png",
    info: "Control the way elements are displayed in the web browser",
    url: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
  },
  {
    order: 10,
    name: "Docker",
    logo: "docker.png",
    info: "Package servers in reusable, distributable, reliable containers",
    url: "https://www.docker.com/"
  },
  {
    order: 10,
    name: "ExpressJS",
    logo: "express.jpeg",
    info: "Lightweight but powerful NodeJS-based backend server",
    url: "https://expressjs.com/"
  },
  {
    order: 10,
    name: "Figma",
    logo: "figma.svg",
    info: "Design and share interactive web and mobile mockups",
    url: "https://www.figma.com/"
  },
  {
    order: 2,
    name: "Heroku",
    logo: "heroku.png",
    info: "Cloud-based web hosting platform",
    url: "https://www.heroku.com/"
  },
  {
    order: 0,
    name: "HTML5",
    logo: "html.png",
    info: "Structure web pages and components",
    url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
  },
  {
    order: 10,
    name: "Jest",
    logo: "jest.png",
    info: "Test javascript code and web components",
    url: "https://jestjs.io/"
  },
  {
    order: 1,
    name: "JavaScript",
    logo: "js.png",
    info: "",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    order: 10,
    name: "Mongo DB",
    logo: "mongo.png",
    info: "",
    url: "https://www.mongodb.com/"
  },
  {
    order: 3,
    name: "NodeJS",
    logo: "node.webp",
    info: "",
    url: "https://nodejs.org/"
  },
  {
    order: 2,
    name: "NPM - Node Package Manager",
    logo: "npm.png",
    info: "",
    url: "https://www.npmjs.com/"
  },
  {
    order: 10,
    name: "PostgrSQL",
    logo: "pg.png",
    info: "",
    url: "https://www.postgresql.org/"
  },
  {
    order: 10,
    name: "ReactJS",
    logo: "react.png",
    info: "",
    url: "https://reactjs.org/"
  },
  {
    order: 10,
    name: "SASS",
    logo: "sass.svg",
    info: "",
    url: "https://sass-lang.com/"
  },
  {
    order: 10,
    name: "TypeScript",
    logo: "tsd.png",
    info: "",
    url: "https://www.typescriptlang.org/"
  },
  {
    order: 10,
    name: "Visual Studio Code",
    logo: "vscode.png",
    info: "",
    url: "https://code.visualstudio.com/"
  },
  {
    order: 10,
    name: "VueJS",
    logo: "vue.png",
    info: "",
    url: "https://vuejs.org/"
  },
  {
    order: 10,
    name: "Chrome",
    logo: "chrome.png",
    info: "",
    url: "https://www.google.com/chrome/"
  },
  {
    order: 10,
    name: "Github",
    logo: "github.png",
    info: "",
    url: "https://github.com"
  },
  {
    order: 10,
    name: "Postman",
    logo: "postman.png",
    info: "",
    url: "https://postman.com"
  },
  {
    order: 10,
    name: "Terminal",
    logo: "terminal.png",
    info: "",
    url: "http://linuxcommand.org/"
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
    description: "Learning to code at a very relaxed pace.",
    minimumWeeklyStudyHours: 10,
    levelPerMonth: 1 / 4,
    price: 400,
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
    description: "Learning to code while holding your day-job.",
    minimumWeeklyStudyHours: 20,
    levelPerMonth: 1 / 2,
    price: 800,
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
    description: "Your full-time job is to learn to code.",
    minimumWeeklyStudyHours: 40,
    levelPerMonth: 1,
    price: 1500,
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
    description: "Supercharged learning with extra mentor hours.",
    levelPerMonth: 1.2,
    minimumWeeklyStudyHours: 40,
    price: 2800,
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
    climbName: "Level 3 Developer",
    durationMonths: 3,
    minimumWeeklyStudyHours: 40,
    levelPerMonth: 1,
    price: 1500,
    total: 4500,
    duration: "over 3 months",
    description:
      "Graduates able to develop and deploy simple web applications using HTML, CSS, JavaScript and JQuery.",
    details: [...bootcampCommonDetails, "Up to 30 Micro-Certifications"],
    isBootcamp: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "climb"
      },
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
    climbName: "Level 6 Developer",
    durationMonths: 6,
    minimumWeeklyStudyHours: 40,
    levelPerMonth: 1,
    price: 1500,
    duration: "over 6 months",
    description:
      "Graduates able to develop challenging full-stack data-driven web applications using best practices in technologies like ReactJS and NodeJS.",
    details: [...bootcampCommonDetails, "Up to 60 Micro-Certifications"],
    primary: true,
    isBootcamp: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "climb"
      },
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
    climbName: "Level 9 Developer",
    durationMonths: 9,
    minimumWeeklyStudyHours: 40,
    levelPerMonth: 1,
    price: 1500,
    duration: "over 9 months",
    description:
      "Graduates able to develop complex, secure and well-engineered full-stack web applications using multiple front-end and back-end technologies.",
    details: [...bootcampCommonDetails, "Up to 90 Micro-Certifications"],
    isBootcamp: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "climb"
      },
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
  }
];

const community = [
  {
    id: "community",
    title: "Community Plan",
    price: 50,
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
const ENROLL = "ENROLL";

export default new Vuex.Store({
  state: {
    testMode: false,
    plans: [...bootcamps, ...selfpaceds, ...community],
    planOptions,
    selectedPlan: undefined,
    applicant: undefined,
    technologies,
    methods,
    testimonials,
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
    },
    [ENROLL](state: any, applicant) {
      state.applicant = applicant;
    }
  },
  actions: {
    selectPlan(context, planId) {
      context.commit(SELECT_PLAN, planId);
    },
    enroll(context, applicant) {
      const applicantWithId = { ...applicant, id: Date.now() };
      //send to HS
      context.commit(ENROLL, applicantWithId);
    }
  },
  getters: {
    getSelectedPlan: state => state.selectedPlan,
    getBootcamp6: state => state.plans.find((x: any) => x.id == "bootcamp6"),
    getCommunityPlan: state =>
      state.plans.find((x: any) => x.id == "community"),
    getPlan: state => (planId: string) =>
      state.plans.find((x: any) => x.id === planId),
    getPlans: state => state.plans,
    getPlanOptions: state => state.planOptions,
    getPathways: state => state.pathways,
    getTechnologies: state =>
      state.technologies.sort((a: any, b: any) => a.order - b.order),
    getMethods: state => state.methods,
    getThreeTestimonials: state => {
      const arr = state.testimonials;
      const shuffled = shuffle(arr);
      return shuffled.slice(0, 3);
    },
    getApplicant: state => state.applicant
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
