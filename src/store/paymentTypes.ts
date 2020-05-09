function climb(program: any, applicant: any, programName: string) {
  const applicantInUSA = applicant.country === "USA";
  if (!applicantInUSA) return false;
  const programIsFrontEnd = program.name.indexOf(programName) > -1;
  if (!programIsFrontEnd) return false;
  const isFullTime = program.weeklyStudyHours >= 30;
  if (!isFullTime) return false;
  return true;
}

const climbOptions = [
  {
    type: "climb",
    programName: "Front-End Developer",
    worksWith: (program: any, applicant: any) => {
      return climb(program, applicant, "Front-End Developer");
    },
  },
  {
    type: "climb",
    programName: "Full-Stack Developer",
    worksWith: (program: any, applicant: any) => {
      return climb(program, applicant, "Full-Stack Developer");
    },
  },
  {
    type: "climb",
    programName: "Full-Stack Engineer",
    worksWith: (program: any, applicant: any) => {
      return climb(program, applicant, "Full-Stack Engineer");
    },
  },
];

const fullTime = true;
const partTime = false;
function leif(
  program: any,
  applicant: any,
  programName: string,
  requiresFullTime: boolean
) {
  const isFullTime = program.weeklyStudyHours >= 30;
  if (requiresFullTime && !isFullTime) return false;
  if (!requiresFullTime && isFullTime) return false;
  const applicantInUSA = applicant.country === "USA";
  if (!applicantInUSA) return false;
  const programNameMatches = program.name.indexOf(programName) > -1;
  if (!programNameMatches) return false;
  return true;
}

const leifPaymentOptions = [
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9f9b405af553e40c404d6",
    worksWith: (program: any, applicant: any) => {
      return leif(program, applicant, "Front-End Developer", fullTime);
    },
  },
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9faa086aac87083c404ea",
    worksWith: (program: any, applicant: any) => {
      return leif(program, applicant, "Front-End Developer", partTime);
    },
  },
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9f8f5562d30bc52c404d8",
    worksWith: (program: any, applicant: any) => {
      return leif(program, applicant, "Full-Stack Developer", fullTime);
    },
  },
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9fa7a574769e4d5c404f7",
    worksWith: (program: any, applicant: any) => {
      return leif(program, applicant, "Full-Stack Developer", partTime);
    },
  },
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9f95286aac87083c404df",
    worksWith: (program: any, applicant: any) => {
      return leif(program, applicant, "Full-Stack Engineer", fullTime);
    },
  },
  {
    type: "leif",
    url: "https://leif.org/commit?product_id=5ea9fac786aac87083c404ee",
    worksWith: (program: any, applicant: any) => {
      return leif(program, applicant, "Full-Stack Engineer", partTime);
    },
  },
];

const creditCardOptions = [
  {
    type: "creditCard",
    url: "https://app.hubspot.com/sales-checkout/mSpPTv7B",
    testUrl: "https://app.hubspot.com/sales-checkout/test_jQz_nidL",
    worksWith: (program: any, applicant: any) => {
      const perMonth = program.price / program.months;
      return perMonth > 1500 * 0.5; //anything higher than half-time
    },
  },
  {
    type: "creditCard",
    // url: "https://app.hubspot.com/sales-checkout/wBN890ZZ",
    // testUrl: "https://app.hubspot.com/sales-checkout/test_fi5hBGei",
    worksWith: (program: any, applicant: any) => {
      return false; //not yet implemented in HS
      const perMonth = program.price / program.months;
      return perMonth === 1500 * 0.75;
    },
  },
  {
    type: "creditCard",
    url: "https://app.hubspot.com/sales-checkout/wBN890ZZ",
    testUrl: "https://app.hubspot.com/sales-checkout/test_fi5hBGei",
    worksWith: (program: any, applicant: any) => {
      const perMonth = program.price / program.months;
      return perMonth === 1500 * 0.5;
    },
  },
  {
    type: "creditCard",
    url: "https://app.hubspot.com/sales-checkout/tpi4vFUd",
    testUrl: "https://app.hubspot.com/sales-checkout/test_OqVDtXse",
    worksWith: (program: any, applicant: any) => {
      const perMonth = program.price / program.months;
      return perMonth === 1500 * 0.25;
    },
  },
];

export const paymentTypes = [
  ...climbOptions,
  ...creditCardOptions,
  ...leifPaymentOptions,
  {
    type: "callBack",
    worksWith: (program: any, applicant: any) => {
      return true;
    },
  },
];
