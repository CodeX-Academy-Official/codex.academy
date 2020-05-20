export interface Plan {
  id: string;
  isMonthly: boolean;
  name: string;
  description: string;
  startDate: Date;
  studyHours: number;
  mentorSessions: number;
  totalStudyHours: number;
  price: number;
  months: number;
  isFixed: boolean;
  appFee: boolean;
}
