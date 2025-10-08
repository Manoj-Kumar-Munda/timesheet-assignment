import { getStatus } from "@/utils/utils";

export const user = {
  id: "1",
  name: "J Smith",
  email: "jsmith@example.com",
  username: "jsmith",
  password: "123456",
};

export interface ITimesheetData {
  week: string;
  startDate: string;
  endDate: string;
  status: Status;
  totalWorkedHours: number;
}

export type Status = "COMPLETED" | "INCOMPLETE" | "MISSING";

const timesheetData: ITimesheetData[] = [
  {
    week: "1",
    startDate: new Date("2024-01-01").toISOString(),
    endDate: new Date("2024-01-05").toISOString(),
    totalWorkedHours: 40,
    status: getStatus(40),
  },
  {
    week: "2",
    startDate: new Date("2024-01-08").toISOString(),
    endDate: new Date("2024-01-12").toISOString(),
    totalWorkedHours: 30,
    status: getStatus(30),
  },
  {
    week: "3",
    startDate: new Date("2024-01-15").toISOString(),
    endDate: new Date("2024-01-19").toISOString(),
    status: getStatus(30),
    totalWorkedHours: 30,
  },
  {
    week: "4",
    startDate: new Date("2024-01-22").toISOString(),
    endDate: new Date("2024-01-26").toISOString(),
    status: getStatus(40),
    totalWorkedHours: 40,
  },
  {
    week: "5",
    startDate: new Date("2024-01-28").toISOString(),
    endDate: new Date("2024-02-01").toISOString(),
    status: getStatus(0),
    totalWorkedHours: 0,
  },
  {
    week: "6",
    startDate: new Date("2024-02-02").toISOString(),
    endDate: new Date("2024-02-06").toISOString(),
    status: getStatus(0),
    totalWorkedHours: 0,
  },
  {
    week: "7",
    startDate: new Date("2024-02-07").toISOString(),
    endDate: new Date("2024-02-11").toISOString(),
    status: getStatus(0),
    totalWorkedHours: 0,
  },
];

export interface ITaskData {
  id: string;
  name: string;
  hours: number;
  project: string;
  date: string;
}

export const taskData: ITaskData[] = [
  {
    id: "1",
    name: "Homepage Development",
    hours: 4,
    project: "Project Name",
    date: new Date("2024-01-01").toISOString(),
  },
  {
    id: "2",
    name: "Homepage Development",
    hours: 4,
    project: "Project Name",
    date: new Date("2024-01-01").toISOString(),
  },
  {
    id: "3",
    name: "Landing Page Development",
    hours: 4,
    project: "Project Name",
    date: new Date("2024-01-02").toISOString(),
  },
  {
    id: "4",
    name: "Login Page Development",
    hours: 4,
    project: "Project Name",
    date: new Date("2024-01-03").toISOString(),
  },
  {
    id: "5",
    name: "Dashboard Development",
    hours: 4,
    project: "Project Name",
    date: new Date("2024-01-04").toISOString(),
  },
  {
    id: "6",
    name: "Profile Page Development",
    hours: 4,
    project: "Project Name",
    date: new Date("2024-01-05").toISOString(),
  },
];

export { timesheetData };
