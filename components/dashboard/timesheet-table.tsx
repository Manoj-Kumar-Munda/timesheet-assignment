"use client";

import { MoveDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ITimesheetData, type Status } from "@/data/mock-data";
import Link from "next/link";

const formatDuration = (startDate: string, endDate: string) => {
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

const getStatusColor = (status: string) => {
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

const getAction = (status: Status) => {
  switch (status) {
    case "COMPLETED":
      return "View";
    case "INCOMPLETE":
      return "Update";
    default:
      return "Create";
  }
};

const TimesheetTable = ({
  timesheetData,
}: {
  timesheetData: ITimesheetData[];
}) => {
  return (
    <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-50 [&_th]:p-3">
          <TableRow className="border-b border-gray-500/20">
            <TableHead className="font-medium">
              <div className="flex items-center gap-2">
                WEEK #
                <MoveDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="font-medium">
              <div className="flex items-center gap-2">
                DATE
                <MoveDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="font-medium">
              <div className="flex items-center gap-2">
                STATUS
                <MoveDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="font-medium">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {timesheetData.map((timesheet, index) => (
            <TableRow
              key={index}
              className="border-b border-gray-500/20 [&_td]:p-3"
            >
              <TableCell className="font-medium bg-gray-50">
                {index + 1}
              </TableCell>
              <TableCell>
                {formatDuration(timesheet.startDate, timesheet.endDate)}
              </TableCell>
              <TableCell>
                <span
                  className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    getStatusColor(timesheet.status)
                  )}
                >
                  {timesheet.status}
                </span>
              </TableCell>
              <TableCell>
                <Link
                  href={`/tasks?startDate=${timesheet.startDate}&endDate=${timesheet.endDate}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {getAction(timesheet.status)}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TimesheetTable;
