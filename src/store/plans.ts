import { Plan } from "@/types/Plan";

const planCommonDetails = [
  "Self-Paced",
  "Unlimited Learning Pathway Access",
  "24/7 Community Chat Access",
  "Build a Portfolio",
];

const mentorDrivenCommonDetails = [
  ...planCommonDetails,
  "Internship Opportunities",
  "Career Counseling",
];

export function mapToActivePlan(plan: any, startDate: Date): Plan {
  return {
    id: plan.id,
    name: plan.title,
    description: plan.description,
    startDate,
    studyHours: plan.studyHours,
    totalStudyHours: plan.studyHours,
    mentorHours: plan.mentorHours,
    price: plan.price,
    months: 0,
    isMonthly: true,
  };
}

const lowMonthly = [
  {
    priceClass: "low-monthly",
    id: "lowMonthly1",
    title: "Light-Support Monthly",
    description: "Learning to code at a very relaxed pace.",
    studyHours: 40,
    mentorHours: 0,
    monthlyEvaluations: 1,
    levelPerMonth: 1 / 4,
    price: 100,
    total: 100,
    duration: "per month",
    details: [...planCommonDetails],
    isSelfpaced: true,
    isMentoring: true,
  },
  {
    priceClass: "low-monthly",
    id: "lowMonthly2",
    title: "Medium-Support Monthly",
    description: "Learning to code at a very relaxed pace.",
    studyHours: 40,
    mentorHours: 1,
    monthlyEvaluations: 1,
    levelPerMonth: 1 / 4,
    price: 300,
    total: 300,
    duration: "per month",
    details: [...planCommonDetails],
    isSelfpaced: true,
    isMentoring: true,
  },
  {
    priceClass: "low-monthly",
    id: "lowMonthly3",
    title: "High-Support Monthly",
    description: "Learning to code at a very relaxed pace.",
    studyHours: 40,
    mentorHours: 2,
    monthlyEvaluations: 1,
    levelPerMonth: 1 / 4,
    price: 500,
    total: 500,
    duration: "per month",
    details: [...planCommonDetails],
    isSelfpaced: true,
    isMentoring: true,
  },
];

export const selfPacedPlans = [
  ...lowMonthly,
  {
    id: "selfpaced2",
    title: "Light-Support Monthly",
    description: "Learning to code at a very relaxed pace.",
    studyHours: 10,
    mentorHours: 1,
    monthlyEvaluations: 3,
    levelPerMonth: 1 / 4,
    price: 400,
    total: 400,
    duration: "per month",
    details: [
      //"10 hour/week commitment",
      ...mentorDrivenCommonDetails,
      //"1 hour/week live 1:1 mentoring",
      //"Up to 3 Evaluations/month"
    ],
    isSelfpaced: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/tpi4vFUd",
        testUrl: "https://app.hubspot.com/sales-checkout/test_OqVDtXse",
      },
      {
        type: "callBack",
      },
    ],
  },
  {
    id: "selfpaced5",
    title: "Medium Support Monthly",
    description: "Learning to code while holding your day-job.",
    studyHours: 20,
    mentorHours: 2,
    levelPerMonth: 1 / 2,
    monthlyEvaluations: 5,
    total: 800,
    price: 800,
    duration: "per month",
    details: [
      //"20 hour/week commitment",
      ...mentorDrivenCommonDetails,
      //"2 hours/week live 1:1 mentoring",
      //"Up to 5 Evaluations/month"
    ],
    isSelfpaced: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/wBN890ZZ",
        testUrl: "https://app.hubspot.com/sales-checkout/test_fi5hBGei",
      },
      {
        type: "callBack",
      },
    ],
  },
  {
    id: "selfpaced10",
    title: "Daily Support Monthly",
    description: "Your full-time job is to learn to code.",
    studyHours: 40,
    mentorHours: 5,
    levelPerMonth: 1,
    monthlyEvaluations: 10,
    total: 1500,
    price: 1500,
    duration: "per month",
    details: [
      //"40 hour/week commitment",
      ...mentorDrivenCommonDetails,
      //"5 hours/week live 1:1 mentoring",
      //"Up to 10 Evaluations/month"
    ],
    primary: true,
    isSelfpaced: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/lTFpUJBC",
        testUrl: "https://app.hubspot.com/sales-checkout/test_9bmF4PDE",
      },
      {
        type: "callBack",
      },
    ],
  },
  {
    id: "selfpaced20",
    title: "Hyper Support Monthly",
    description: "Supercharged learning with extra mentor hours.",
    levelPerMonth: 1.2,
    studyHours: 40,
    mentorHours: 10,
    monthlyEvaluations: 20,
    total: 2800,
    price: 2800,
    duration: "per month",
    details: [
      //"40-50 hour/week commitment",
      ...mentorDrivenCommonDetails,
      //"10 hours/week live 1:1 mentoring",
      //"Up to 20 Evaluations/month"
    ],
    isSelfpaced: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/3IILq-Ug",
        testUrl: "https://app.hubspot.com/sales-checkout/test_Q2LszpvP",
      },
      {
        type: "callBack",
      },
    ],
  },
];

export const bootcampFeatures = [
  "Unlimited Learning Pathway Access",
  "24/7 Community Chat Access",
  "Build a Portfolio",
  "Internship Opportunities",
  "Career Counseling",
  //"5 hours/week live 1:1 mentoring"
];

const bootcamps = [
  {
    id: "bootcamp3",
    title: "3-Month Bootcamp",
    startMonday: 1,
    durationMonths: 3,
    mentorHours: 5,
    studyHours: 40,
    monthlyEvaluations: 10,
    levelPerMonth: 1,
    price: 1500,
    total: 4500,
    duration: "over 3 months",
    description:
      "Graduates able to develop and deploy simple web applications using HTML, CSS, JavaScript and JQuery.",
    details: [...bootcampFeatures],
    isBootcamp: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "climb",
        programName: "Frontend Developer",
      },
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/npnCjJOv",
        testUrl: "https://app.hubspot.com/sales-checkout/test_AIL7qMLK",
      },
      {
        type: "callBack",
      },
    ],
  },
  {
    id: "bootcamp6",
    title: "6-Month Bootcamp",
    startMonday: 2,
    durationMonths: 6,
    studyHours: 40,
    mentorHours: 5,
    levelPerMonth: 1,
    monthlyEvaluations: 10,
    total: 9000,
    price: 1500,
    duration: "over 6 months",
    description:
      "Graduates able to develop challenging full-stack data-driven web applications using best practices in technologies like ReactJS and NodeJS.",
    details: [...bootcampFeatures],
    primary: true,
    isBootcamp: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "climb",
        programName: "Full-Stack Developer",
      },
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/mSpPTv7B",
        testUrl: "https://app.hubspot.com/sales-checkout/test_jQz_nidL",
      },
      {
        type: "callBack",
      },
    ],
  },
  {
    id: "bootcamp9",
    title: "9-Month Bootcamp",
    startMonday: 3,
    durationMonths: 9,
    mentorHours: 5,
    studyHours: 40,
    monthlyEvaluations: 10,
    levelPerMonth: 1,
    total: 13500,
    price: 1500,
    duration: "over 9 months",
    description:
      "Graduates able to develop complex, secure and well-engineered full-stack web applications using multiple front-end and back-end technologies.",
    details: [...bootcampFeatures],
    isBootcamp: true,
    isMentoring: true,
    paymentTypes: [
      {
        type: "climb",
        programName: "Agile Full-Stack Engineer",
      },
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/1P9YipN5",
        testUrl: "https://app.hubspot.com/sales-checkout/test_GaKZU8H-",
      },
      {
        type: "callBack",
      },
    ],
  },
];

const community = [
  {
    id: "community",
    title: "Community Plan",
    description:
      "Independent learning with access to curriculum and developer community.",
    price: 50,
    mentorHours: 0,
    studyHours: 0,
    duration: "per month",
    details: ["Independent Study", ...planCommonDetails],
    primary: false,
    isMentoring: false,
    paymentTypes: [
      {
        type: "creditCard",
        url: "https://app.hubspot.com/sales-checkout/YkUECPjJ",
        testUrl: "https://app.hubspot.com/sales-checkout/test_D3sgM1ph",
      },
      {
        type: "callBack",
      },
    ],
  },
];

export const programs = [...bootcamps, ...selfPacedPlans, ...community];
