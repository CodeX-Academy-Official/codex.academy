import { Plan } from "@/types/Plan";

function isInUSA(applicant: any) {
  if (!applicant) return false;
  const applicantInUSA =
    applicant.country === "USA" || applicant.country === "United States";
  return applicantInUSA;
}

function climb(program: Plan, applicant: any, programName: string) {
  const applicantInUSA = isInUSA(applicant);
  if (!applicantInUSA) return false;
  const programIsFrontEnd = program.name.indexOf(programName) > -1;
  if (!programIsFrontEnd) return false;
  const isFullTime = program.studyHours >= 30;
  if (!isFullTime) return false;
  return true;
}

const climbOptions = [
  {
    type: "climb",
    programName: "Front-End Developer",
    startingMonthlyPayments: 250,
    worksWith: (program: Plan, applicant: any) => {
      return climb(program, applicant, "Front-End Developer");
    },
  },
  {
    type: "climb",
    programName: "Full-Stack Developer",
    startingMonthlyPayments: 250,
    worksWith: (program: Plan, applicant: any) => {
      return climb(program, applicant, "Full-Stack Developer");
    },
  },
  {
    type: "climb",
    programName: "Full-Stack Engineer",
    startingMonthlyPayments: 250,
    worksWith: (program: Plan, applicant: any) => {
      return climb(program, applicant, "Full-Stack Engineer");
    },
  },
];

const fullTime = true;
const partTime = false;
function leif(
  program: Plan,
  applicant: any,
  programName: string,
  requiresFullTime: boolean
) {
  const isFullTime = program.studyHours >= 30;
  if (requiresFullTime && !isFullTime) return false;
  if (!requiresFullTime && isFullTime) return false;
  const applicantInUSA = isInUSA(applicant);
  if (!applicantInUSA) return false;
  const programNameMatches = program.name.indexOf(programName) > -1;
  if (!programNameMatches) return false;
  return true;
}

const leifPaymentOptions = [
  {
    type: "leif",
    minimumSalary: 30000,
    ratePercent: 10,
    termMonths: 24,
    url: "https://leif.org/commit?product_id=5ea9f9b405af553e40c404d6",
    worksWith: (program: Plan, applicant: any) => {
      return leif(program, applicant, "Front-End Developer", fullTime);
    },
  },
  {
    type: "leif",
    minimumSalary: 30000,
    ratePercent: 10,
    termMonths: 24,
    url: "https://leif.org/commit?product_id=5ea9faa086aac87083c404ea",
    worksWith: (program: Plan, applicant: any) => {
      return leif(program, applicant, "Front-End Developer", partTime);
    },
  },
  {
    type: "leif",
    minimumSalary: 40000,
    ratePercent: 10,
    termMonths: 36,
    url: "https://leif.org/commit?product_id=5ea9f8f5562d30bc52c404d8",
    worksWith: (program: Plan, applicant: any) => {
      return leif(program, applicant, "Full-Stack Developer", fullTime);
    },
  },
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9fa7a574769e4d5c404f7",
    minimumSalary: 40000,
    ratePercent: 10,
    termMonths: 36,
    worksWith: (program: Plan, applicant: any) => {
      return leif(program, applicant, "Full-Stack Developer", partTime);
    },
  },
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9f95286aac87083c404df",
    minimumSalary: 50000,
    ratePercent: 10,
    termMonths: 42,
    worksWith: (program: Plan, applicant: any) => {
      return leif(program, applicant, "Full-Stack Engineer", fullTime);
    },
  },
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9fac786aac87083c404ee",
    minimumSalary: 50000,
    ratePercent: 10,
    termMonths: 42,
    worksWith: (program: Plan, applicant: any) => {
      return leif(program, applicant, "Full-Stack Engineer", partTime);
    },
  },
];

const lowMonthly = [
  {
    type: "creditCard",
    url: "https://app.hubspot.com/sales-checkout/h7GdbUcj",
    testUrl: "https://app.hubspot.com/sales-checkout/test_HOYd1nva",
    monthlyCharge: 100,
    worksWith: (plan: Plan, applicant: any) => {
      return plan.price === 100;
    },
  },
  {
    type: "creditCard",
    url: "https://app.hubspot.com/sales-checkout/jVIi5tqq",
    testUrl: "https://app.hubspot.com/sales-checkout/test_ezF3nEz-",
    monthlyCharge: 300,
    worksWith: (plan: Plan, applicant: any) => {
      return plan.price === 300;
    },
  },
  {
    type: "creditCard",
    url: "https://app.hubspot.com/sales-checkout/EmnkUpln",
    testUrl: "https://app.hubspot.com/sales-checkout/test_GEp1bO_R",
    monthlyCharge: 500,
    worksWith: (plan: Plan, applicant: any) => {
      return plan.price === 500;
    },
  },
];

const creditCardOptions = [
  ...lowMonthly,
  {
    type: "creditCardPre",
    url: "https://app.hubspot.com/sales-checkout/tpi4vFUd",
    testUrl: "https://app.hubspot.com/sales-checkout/test_OqVDtXse",
    monthlyCharge: 400,
    worksWith: (plan: Plan, applicant: any) => {
      return plan.price === 400;
    },
  },
  {
    type: "creditCardPre",
    url: "https://app.hubspot.com/sales-checkout/wBN890ZZ",
    testUrl: "https://app.hubspot.com/sales-checkout/test_fi5hBGei",
    monthlyCharge: 800,
    worksWith: (plan: Plan, applicant: any) => {
      return plan.price === 800;
    },
  },
  {
    type: "creditCardPre",
    url: "https://app.hubspot.com/sales-checkout/3IILq-Ug",
    testUrl: "https://app.hubspot.com/sales-checkout/test_Q2LszpvP",
    monthlyCharge: 2800,
    worksWith: (plan: Plan, applicant: any) => {
      return plan.price === 2800;
    },
  },
  {
    type: "creditCardPre",
    url: "https://app.hubspot.com/sales-checkout/mSpPTv7B",
    testUrl: "https://app.hubspot.com/sales-checkout/test_jQz_nidL",
    monthlyCharge: 1500,
    worksWith: (plan: Plan, applicant: any) => {
      if (plan.price === 1500) {
        return true;
      }

      const perMonth = plan.price / plan.months;
      return perMonth === 1500;
    },
  },
  {
    type: "creditCardPre",
    url: "https://app.hubspot.com/sales-checkout/rfhDkvY-",
    testUrl: "https://app.hubspot.com/sales-checkout/test_nNvYy-hv",
    monthlyCharge: 1500 * 0.75,
    worksWith: (plan: Plan, applicant: any) => {
      const perMonth = plan.price / plan.months;
      return perMonth === 1500 * 0.75;
    },
  },
  {
    type: "creditCardPre",
    url: "https://app.hubspot.com/sales-checkout/wBN890ZZ",
    testUrl: "https://app.hubspot.com/sales-checkout/test_fi5hBGei",
    monthlyCharge: 1500 * 0.5,
    worksWith: (plan: Plan, applicant: any) => {
      const perMonth = plan.price / plan.months;
      return perMonth === 1500 * 0.5;
    },
  },
  {
    type: "creditCardPre",
    url: "https://app.hubspot.com/sales-checkout/tpi4vFUd",
    testUrl: "https://app.hubspot.com/sales-checkout/test_OqVDtXse",
    monthlyCharge: 1500 * 0.25,
    worksWith: (plan: Plan, applicant: any) => {
      const perMonth = plan.price / plan.months;
      return perMonth === 1500 * 0.25;
    },
  },
];

const installments = [
  {
    type: "codex-installments",
    url: "https://app.hubspot.com/sales-checkout/WVjSMExg",
    testUrl: "https://app.hubspot.com/sales-checkout/test_AysK9wYz",
    monthlyCharge: 500,
    worksWith: (plan: Plan, applicant: any) => {
      if (isInUSA(applicant)) return false;
      if (plan.price < 3000) return false;

      return true;
    },
  },
];

const campOptions = [
  {
    type: "creditCard-camp",
    url: "https://app.hubspot.com/sales-checkout/eWHZ2i5J",
    testUrl: "https://app.hubspot.com/sales-checkout/test_e8TjGc2d",
    monthlyCharge: 600,
    worksWith: (plan: Plan, applicant: any) => {
      if (plan.id !== "camp2020") return false;
      return true;
    },
  },
];

export const paymentTypes = [
  ...leifPaymentOptions,
  ...climbOptions,
  ...creditCardOptions,
  ...installments,
  ...campOptions,
  //   {
  //     type: "callBack",
  //     worksWith: (program: Plan, applicant: any) => {
  //       return true;
  //     },
  //   },
];
