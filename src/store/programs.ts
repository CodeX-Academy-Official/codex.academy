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

export const programs = [...bootcamps, ...selfpaceds, ...community];
