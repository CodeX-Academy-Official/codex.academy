import { Plan } from "@/types/Plan";

const planCommonDetails = [
  "Self-Paced",
  "Unlimited Learning Pathway Access",
  "24/7 Chat Access",
  "Build a Portfolio",
];

const mentorDrivenCommonDetails = [
  ...planCommonDetails,
  "Internship Opportunities",
  "Career Counseling",
  "Job Placement Services"
];

export function mapToActivePlan(plan: any, startDate: Date): Plan {
  return {
    id: plan.id,
    name: plan.title,
    description: plan.description,
    startDate,
    studyHours: plan.studyHours,
    totalStudyHours: plan.studyHours,
    mentorSessions: plan.mentorSessions,
    price: plan.price,
    months: 0,
    isMonthly: true,
    isFixed: true,
    appFee: plan.appFee,
  };
}

export const internationalPlans = [
  {
    priceClass: "international",
    id: "international1",
    title: "Light-Support Monthly",
    description: "Community Learning with Mentor Chat Support",
    studyHours: 10,
    mentorSessions: 1,
    monthlyEvaluations: 0,
    monthlyProjectEvals: 1,
    levelPerMonth: 1 / 4,
    price: 200,
    total: 200,
    duration: "per month",
    details: [...mentorDrivenCommonDetails],
    isSelfpaced: true,
    isMentoring: true,
    appFee: false,
  },
  {
    priceClass: "international",
    id: "international2",
    title: "Medium-Support Monthly",
    description: "Community Learning with Weekly 1:1 Mentor Sessions",
    studyHours: 20,
    mentorSessions: 2,
    monthlyEvaluations: 0,
    monthlyProjectEvals: 1,
    levelPerMonth: 1 / 4,
    price: 400,
    total: 400,
    duration: "per month",
    details: [...mentorDrivenCommonDetails],
    isSelfpaced: true,
    isMentoring: true,
    appFee: false,
  },
  {
    priceClass: "international",
    id: "international3",
    title: "High-Support Monthly",
    description: "Community Learning with Bi-Weekly 1:1 Mentor Sessions",
    studyHours: 30,
    mentorSessions: 4,
    monthlyEvaluations: 0,
    monthlyProjectEvals: 1,
    levelPerMonth: 1 / 4,
    price: 600,
    total: 600,
    duration: "per month",
    details: [...mentorDrivenCommonDetails],
    isSelfpaced: true,
    isMentoring: true,
    appFee: false,
  },
];

export const bootcampFeatures = [
  "Unlimited Learning Pathway Access",
  "Live Sessions with Experts",
  "Human Evaluations", 
  "24/7 Chat Access",
  "Build a Portfolio",
  "Get Credit for Previous Knowledge",
  "Internship Opportunities",
  "Career Counseling",
  "Job Placement Services"
];

// const bootcamps = [
//   {
//     id: "bootcamp3",
//     title: "3-Month Bootcamp",
//     startMonday: 1,
//     durationMonths: 3,
//     mentorSessions: 5,
//     studyHours: 40,
//     monthlyEvaluations: 10,
//     levelPerMonth: 1,
//     price: 1500,
//     total: 4500,
//     duration: "over 3 months",
//     description:
//       "Graduates able to develop and deploy simple web applications using HTML, CSS, JavaScript and JQuery.",
//     details: [...bootcampFeatures],
//     isBootcamp: true,
//     isMentoring: true,
//     paymentTypes: [
//       {
//         type: "climb",
//         programName: "Frontend Developer",
//       },
//       {
//         type: "creditCard",
//         url: "https://app.hubspot.com/sales-checkout/npnCjJOv",
//         testUrl: "https://app.hubspot.com/sales-checkout/test_AIL7qMLK",
//       },
//       {
//         type: "callBack",
//       },
//     ],
//   },
//   {
//     id: "bootcamp6",
//     title: "6-Month Bootcamp",
//     startMonday: 2,
//     durationMonths: 6,
//     studyHours: 40,
//     mentorSessions: 5,
//     levelPerMonth: 1,
//     monthlyEvaluations: 10,
//     total: 9000,
//     price: 1500,
//     duration: "over 6 months",
//     description:
//       "Graduates able to develop challenging full-stack data-driven web applications using best practices in technologies like ReactJS and NodeJS.",
//     details: [...bootcampFeatures],
//     primary: true,
//     isBootcamp: true,
//     isMentoring: true,
//     paymentTypes: [
//       {
//         type: "climb",
//         programName: "Full-Stack Developer",
//       },
//       {
//         type: "creditCard",
//         url: "https://app.hubspot.com/sales-checkout/mSpPTv7B",
//         testUrl: "https://app.hubspot.com/sales-checkout/test_jQz_nidL",
//       },
//       {
//         type: "callBack",
//       },
//     ],
//   },
//   {
//     id: "bootcamp9",
//     title: "9-Month Bootcamp",
//     startMonday: 3,
//     durationMonths: 9,
//     mentorSessions: 5,
//     studyHours: 40,
//     monthlyEvaluations: 10,
//     levelPerMonth: 1,
//     total: 13500,
//     price: 1500,
//     duration: "over 9 months",
//     description:
//       "Graduates able to develop complex, secure and well-engineered full-stack web applications using multiple front-end and back-end technologies.",
//     details: [...bootcampFeatures],
//     isBootcamp: true,
//     isMentoring: true,
//     paymentTypes: [
//       {
//         type: "climb",
//         programName: "Agile Full-Stack Engineer",
//       },
//       {
//         type: "creditCard",
//         url: "https://app.hubspot.com/sales-checkout/1P9YipN5",
//         testUrl: "https://app.hubspot.com/sales-checkout/test_GaKZU8H-",
//       },
//       {
//         type: "callBack",
//       },
//     ],
//   },
// ];

// const community = [
//   {
//     id: "community",
//     title: "Community Plan",
//     description:
//       "Independent learning with access to curriculum and developer community.",
//     price: 50,
//     mentorSessions: 0,
//     studyHours: 0,
//     duration: "per month",
//     details: ["Independent Study", ...planCommonDetails],
//     primary: false,
//     isMentoring: false,
//     paymentTypes: [
//       {
//         type: "creditCard",
//         url: "https://app.hubspot.com/sales-checkout/YkUECPjJ",
//         testUrl: "https://app.hubspot.com/sales-checkout/test_D3sgM1ph",
//       },
//       {
//         type: "callBack",
//       },
//     ],
//   },
// ];

// export const programs = [...bootcamps, ...selfPacedPlans, ...community];
