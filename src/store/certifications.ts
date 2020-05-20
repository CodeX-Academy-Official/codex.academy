import {
  FULL_STACK_ENGINEER,
  FULL_STACK_DEVELOPER,
  FRONT_END_DEVELOPER,
} from "./constants";
import { Plan } from "@/types/Plan";

export function mapCertificationToPlan(cert: any, startDate: Date): Plan {
  return {
    id: cert.id,
    name: cert.name,
    description: cert.description,
    startDate: startDate,
    studyHours: 40,
    totalStudyHours: cert.studyHours,
    mentorHours: cert.mentorHours / 5,
    price: cert.price,
    months: 0,
    isMonthly: false,
    isFixed: false,
    appFee: true,
  };
}

export const certifications = [
  {
    id: 1,
    name: FRONT_END_DEVELOPER,
    description:
      "Graduates able to develop and deploy simple web applications using HTML, CSS, JavaScript and JQuery.",
    studyHours: 520,
    levels: 3,
    icon: "pencil-ruler",
    noun: "design",
    mentorHours: 65,
    evaluations: 30,
    price: 4500,
  },
  {
    id: 2,
    name: FULL_STACK_DEVELOPER,
    description:
      "Graduates able to develop challenging full-stack data-driven web applications using best practices in technologies like ReactJS and NodeJS.",
    recommended: true,
    studyHours: 1040,
    levels: 6,
    icon: "laptop-code",
    noun: "develop",
    mentorHours: 130,
    evaluations: 60,
    price: 9000,
  },
  {
    id: 3,
    name: FULL_STACK_ENGINEER,
    description:
      "Graduates able to develop complex, secure and well-engineered full-stack web applications using multiple front-end and back-end technologies.",
    studyHours: 1560,
    levels: 9,
    icon: "server",
    noun: "server",
    mentorHours: 195,
    evaluations: 90,
    price: 13500,
  },
];
