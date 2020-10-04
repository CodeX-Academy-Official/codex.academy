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

function isPathrise(applicant: any) {
  const source = (applicant || {}).source || "none";
  const is = source.toLowerCase().indexOf("pathrise") > -1;
  return is;
}

const leifPaymentOptions = [
  {
    type: "leif",
    minimumSalary: 30000,
    ratePercent: 10,
    termMonths: 24,
    url: "https://leif.org/commit?product_id=5ea9f9b405af553e40c404d6",
    worksWith: (program: Plan, applicant: any) => {

      return !isPathrise(applicant)
        && leif(program, applicant, "Front-End Developer", fullTime);
    },
  },
  {
    type: "leif",
    minimumSalary: 30000,
    ratePercent: 10,
    termMonths: 24,
    url: "https://leif.org/commit?product_id=5ea9faa086aac87083c404ea",
    worksWith: (program: Plan, applicant: any) => {
      return !isPathrise(applicant)
        && leif(program, applicant, "Front-End Developer", partTime);
    },
  },
  {
    type: "leif",
    minimumSalary: 40000,
    ratePercent: 10,
    termMonths: 36,
    url: "https://leif.org/commit?product_id=5ea9f8f5562d30bc52c404d8",
    worksWith: (program: Plan, applicant: any) => {
      return !isPathrise(applicant)
        && leif(program, applicant, "Full-Stack Developer", fullTime);
    },
  },
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9fa7a574769e4d5c404f7",
    minimumSalary: 40000,
    ratePercent: 10,
    termMonths: 36,
    worksWith: (program: Plan, applicant: any) => {
      return !isPathrise(applicant)
        && leif(program, applicant, "Full-Stack Developer", partTime);
    },
  },
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9f95286aac87083c404df",
    minimumSalary: 50000,
    ratePercent: 10,
    termMonths: 42,
    worksWith: (program: Plan, applicant: any) => {
      return !isPathrise(applicant)
        && leif(program, applicant, "Full-Stack Engineer", fullTime);
    },
  },
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9fac786aac87083c404ee",
    minimumSalary: 50000,
    ratePercent: 10,
    termMonths: 42,
    worksWith: (program: Plan, applicant: any) => {
      return !isPathrise(applicant)
        && leif(program, applicant, "Full-Stack Engineer", partTime);
    },
  },
];

const leifPathrisePaymentOptions = [
  {
    type: "leif-pathrise",
    minimumSalary: 30000,
    ratePercent: 10,
    termMonths: 24,
    url: "https://leif.org/commit?product_id=5f451b8b87b9307d95dc1daa",
    worksWith: (program: Plan, applicant: any) => {

      return isPathrise(applicant)
        && leif(program, applicant, "Front-End Developer", fullTime);
    },
  },
  // {
  //   type: "leif-pathrise",
  //   minimumSalary: 30000,
  //   ratePercent: 10,
  //   termMonths: 24,
  //   url: "https://leif.org/commit?product_id=5ea9faa086aac87083c404ea",
  //   worksWith: (program: Plan, applicant: any) => {
  //     return isPathrise(applicant) 
  //     && leif(program, applicant, "Front-End Developer", partTime);
  //   },
  // },
  {
    type: "leif-pathrise",
    minimumSalary: 40000,
    ratePercent: 10,
    termMonths: 36,
    url: "https://leif.org/commit?product_id=5f451b505b4dd6ce73dc1f80",
    worksWith: (program: Plan, applicant: any) => {
      return isPathrise(applicant)
        && leif(program, applicant, "Full-Stack Developer", fullTime);
    },
  },
  // {
  //   type: "leif-pathrise",
  //   url: "https://leif.org/commit?product_id=5ea9fa7a574769e4d5c404f7",
  //   minimumSalary: 40000,
  //   ratePercent: 10,
  //   termMonths: 36,
  //   worksWith: (program: Plan, applicant: any) => {
  //     return isPathrise(applicant) 
  //     && leif(program, applicant, "Full-Stack Developer", partTime);
  //   },
  // },
  {
    type: "leif-pathrise",
    url: "https://leif.org/commit?product_id=5f451b6187b9307d95dc1da8",
    minimumSalary: 50000,
    ratePercent: 10,
    termMonths: 42,
    worksWith: (program: Plan, applicant: any) => {
      return isPathrise(applicant)
        && leif(program, applicant, "Full-Stack Engineer", fullTime);
    },
  },
  // {
  //   type: "leif-pathrise",
  //   url: "https://leif.org/commit?product_id=5ea9fac786aac87083c404ee",
  //   minimumSalary: 50000,
  //   ratePercent: 10,
  //   termMonths: 42,
  //   worksWith: (program: Plan, applicant: any) => {
  //     return isPathrise(applicant) 
  //     && leif(program, applicant, "Full-Stack Engineer", partTime);
  //   },
  // },
];

// const stripeCreditCard = [
//   {
//     type: "stripeCreditCard",
//     stripePlanId: "plan_HJTuA9lhMNXIQF",
//     testStripePlanId: "plan_GlVXLoyCgmQxjW",
//     monthlyCharge: 1500,
//     worksWith: (plan: Plan, applicant: any) => {
//       return plan.price / plan.months === 1500;
//     },
//   },
// ];

const internationalSupportCreditCard = [
  {
    type: "stripeCreditCard",
    stripePlanId: "plan_HKHieufyiMV3LK",
    testStripePlanId: "plan_HKHk0SA8zoVa7u",
    monthlyCharge: 100,
    worksWith: (plan: Plan, applicant: any) => {
      return plan.price === 100;
    },
  },
  {
    type: "stripeCreditCard",
    stripePlanId: "plan_HKHiZDlGalUlVv",
    testStripePlanId: "plan_HKHkI369XDcDLA",
    monthlyCharge: 300,
    worksWith: (plan: Plan, applicant: any) => {
      return plan.price === 300;
    },
  },
  {
    type: "stripeCreditCard",
    stripePlanId: "plan_HKHi8KrWnTYpkF",
    testStripePlanId: "plan_HKHl6m7bGvQUgH",
    monthlyCharge: 500,
    worksWith: (plan: Plan, applicant: any) => {
      return plan.price === 500;
    },
  },
];

const creditCardOptions = [
  {
    type: "stripeCreditCard",
    stripePlanId: "plan_GfCj106qZLQXBr",
    testStripePlanId: "plan_GlodVF5i54MCil",
    monthlyCharge: 400,
    worksWith: (plan: Plan, applicant: any) => {
      return plan.price === 400;
    },
  },
  {
    type: "stripeCreditCard",
    stripePlanId: "plan_GfCj7I6nKHJIoY",
    testStripePlanId: "plan_GlOujit9Muz8ts",
    monthlyCharge: 800,
    worksWith: (plan: Plan, applicant: any) => {
      return plan.price === 800;
    },
  },
  {
    type: "stripeCreditCard",
    stripePlanId: "plan_HJTw629gIrNNl9",
    testStripePlanId: "plan_GrQE3VeRF49qCN",
    monthlyCharge: 2800,
    worksWith: (plan: Plan, applicant: any) => {
      if (plan.price === 2800) return true;

      const perMonth = plan.price / plan.months;
      return perMonth === 2800;
    },
  },
  {
    type: "stripeCreditCard",
    stripePlanId: "plan_HJTuA9lhMNXIQF",
    testStripePlanId: "plan_GlVXLoyCgmQxjW",
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
    type: "stripeCreditCard",
    stripePlanId: "plan_HKHq87esyCOr27",
    testStripePlanId: "plan_HKHpgiFqx1EZ2G",
    monthlyCharge: 1500 * 0.75,
    worksWith: (plan: Plan, applicant: any) => {
      const perMonth = plan.price / plan.months;
      return perMonth === 1500 * 0.75;
    },
  },
  {
    type: "stripeCreditCard",
    stripePlanId: "plan_HKHXom1iK8Lxw5",
    testStripePlanId: "plan_HKHYvMpV1FJvaG",
    monthlyCharge: 1500 * 0.5,
    worksWith: (plan: Plan, applicant: any) => {
      const perMonth = plan.price / plan.months;
      return perMonth === 1500 * 0.5;
    },
  },
  {
    type: "stripeCreditCard",
    stripePlanId: "plan_HKHaZ1KlbEyj9j",
    testStripePlanId: "plan_HKHZK56OUbvYWO",
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
    stripePlanId: "plan_HJi6V12NZXKYN0",
    testStripePlanId: "plan_HKIEVCRChizWeQ",
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
    stripePlanId: "plan_HKIW5IOMiw4C4p",
    testStripePlanId: "plan_HKIWadWTfsvFVJ",
    monthlyCharge: 600,
    worksWith: (plan: Plan, applicant: any) => {
      if (plan.id !== "camp2020") return false;
      return true;
    },
  },
];

export const paymentTypes = [
  ...leifPaymentOptions,
  ...leifPathrisePaymentOptions,
  ...climbOptions,
  ...creditCardOptions,
  ...internationalSupportCreditCard,
  ...installments,
  ...campOptions,
  //   {
  //     type: "callBack",
  //     worksWith: (program: Plan, applicant: any) => {
  //       return true;
  //     },
  //   },
];
