import { Status } from "@/data/mock-data";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStatus(totalWorkedHours: number): Status {
  if (totalWorkedHours >= 40) {
    return "COMPLETED";
  } else if (totalWorkedHours > 0) {
    return "INCOMPLETE";
  } else {
    return "MISSING";
  }
}
