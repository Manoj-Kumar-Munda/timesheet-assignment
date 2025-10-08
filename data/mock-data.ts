export const user = {
  id: "1",
  name: "J Smith",
  email: "jsmith@example.com",
  username: "jsmith",
  password: "123456",
};

export interface ITimesheetData {
  startDate: string;
  endDate: string;
  status: Status;
}

export type Status = "COMPLETED" | "INCOMPLETE" | "MISSING";

const timesheetData: ITimesheetData[] = [
  {
    startDate: new Date("2024-01-01").toISOString(),
    endDate: new Date("2024-01-05").toISOString(),
    status: "COMPLETED",
  },
  {
    startDate: new Date("2024-01-08").toISOString(),
    endDate: new Date("2024-01-12").toISOString(),
    status: "COMPLETED",
  },
  {
    startDate: new Date("2024-01-15").toISOString(),
    endDate: new Date("2024-01-19").toISOString(),
    status: "INCOMPLETE",
  },
  {
    startDate: new Date("2024-01-22").toISOString(),
    endDate: new Date("2024-01-26").toISOString(),
    status: "COMPLETED",
  },
  {
    startDate: new Date("2024-01-28").toISOString(),
    endDate: new Date("2024-02-01").toISOString(),
    status: "MISSING",
  },
  {
    startDate: new Date("2024-01-31").toISOString(),
    endDate: new Date("2024-02-04").toISOString(),
    status: "COMPLETED",
  },
  {
    startDate: new Date("2024-02-07").toISOString(),
    endDate: new Date("2024-02-11").toISOString(),
    status: "INCOMPLETE",
  },
];

export { timesheetData };
