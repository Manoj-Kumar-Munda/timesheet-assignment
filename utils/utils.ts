import { Status } from "@/data/mock-data";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// Format date to "Jan 1"
export const formattedDate = (date: string) => {
  const dateObj = new Date(date);
  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();
  return `${month} ${day}`;
};

export function getStatus(totalWorkedHours: number): Status {
  if (totalWorkedHours >= 40) {
    return "COMPLETED";
  } else if (totalWorkedHours > 0) {
    return "INCOMPLETE";
  } else {
    return "MISSING";
  }
}

// Format duration to "1 - 31 Jan 2024"
export const formatDuration = (startDate: string, endDate: string) => {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const startDateMonth = startDateObj.getMonth();
  const endDateMonth = endDateObj.getMonth();
  if (startDateMonth === endDateMonth) {
    return `${startDateObj.getDate()} - ${endDateObj.getDate()} ${startDateObj.toLocaleString(
      "default",
      { month: "long" }
    )} ${startDateObj.getFullYear()}`;
  } else {
    return `${startDateObj.getDate()} ${startDateObj.toLocaleString("default", {
      month: "long",
    })} - ${endDateObj.getDate()} ${endDateObj.toLocaleString("default", {
      month: "long",
    })} ${endDateObj.getFullYear()}`;
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "COMPLETED":
      return "bg-green-100 text-green-800";
    case "INCOMPLETE":
      return "bg-yellow-100 text-yellow-800";
    case "MISSING":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const getAction = (status: Status) => {
  switch (status) {
    case "COMPLETED":
      return "View";
    case "INCOMPLETE":
      return "Update";
    default:
      return "Create";
  }
};
