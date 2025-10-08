"use client";

import { ITaskData, taskData } from "@/data/mock-data";
import { Plus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import TaskRow from "./task-row";
import { useMemo } from "react";

export default function TasksPage() {
  const searchParams = useSearchParams();
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";

  const tasksGroupByDate = useMemo(
    () =>
      taskData
        .filter((task: ITaskData) => {
          const taskDate = new Date(task.date);
          return (
            taskDate >= new Date(startDate) && taskDate <= new Date(endDate)
          );
        })
        .reduce((acc, task) => {
          const dateObj = new Date(task.date);
          const date = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(task);
          return acc;
        }, {} as Record<string, ITaskData[]>),
    [startDate, endDate]
  );

  const totalWorkedHours = useMemo(
    () =>
      Object.values(tasksGroupByDate).reduce((acc, tasks) => {
        return acc + tasks.reduce((acc, task) => acc + task.hours, 0);
      }, 0),
    [tasksGroupByDate]
  );

  const formattedDate = (date: string) => {
    const dateObj = new Date(date);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    return `${month} ${day}`;
  };

  return (
    <section>
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">This week's timesheet</h2>
          <span className="text-gray-400 text-sm">21 - 26 January, 2024</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-neutral-800 font-semibold text-sm text-center">
            20/40 hrs
          </span>

          <div className="w-48 h-2 bg-neutral-200 rounded-full relative">
            <span className="absolute right-0 -top-5 text-gray-400 text-xs font-semibold">
              100%
            </span>
            <div
              className="h-full bg-orange-600 rounded-full"
              style={{ width: `${(totalWorkedHours / 40) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {Object.entries(tasksGroupByDate).map(([date, tasks]) => (
          <div className="flex gap-4 my-4" key={date}>
            <div className="w-28">
              <span className="font-semibold text-sm">
                {formattedDate(date)}
              </span>
            </div>

            <div className="grow flex flex-col gap-4">
              {tasks.map((task) => (
                <TaskRow key={task.id} task={task} />
              ))}
              <button className="w-full bg-blue-100 text-blue-800 py-2.5 border border-dashed border-blue-800 rounded-md flex items-center justify-center gap-2">
                <Plus className="h-4 w-4" />
                <span className="text-sm font-medium">Add new task</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
