export interface Plan {
  id: string;
  isMonthly: boolean;
  name: string;
  description: string;
  startDate: Date;
  studyHours: number;
  mentorHours: number;
  totalStudyHours: number;
  price: number;
  months: number;
}
