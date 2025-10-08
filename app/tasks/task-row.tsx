import { ITaskData } from "@/data/mock-data";
import { Ellipsis } from "lucide-react";

const TaskRow = ({ task }: { task: ITaskData }) => {
  return (
    <div className="w-full border border-gray-200 rounded-md flex justify-between items-center p-2">
      <span>{task.name}</span>

      <div className="flex gap-2 items-center">
        <span className="text-gray-400 text-sm">4 hrs</span>
        <div className="bg-blue-100 py-1 px-2 rounded-md">
          <span className="text-blue-800 font-medium text-sm">
            {task.project}
          </span>
        </div>
        <button className="hover:bg-gray-100 p-2 rounded-md">
          <Ellipsis className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default TaskRow;
