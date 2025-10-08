import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Status } from "@/data/mock-data";

interface FilterDropdownProps {
  label: string;
  options: string[];
  value?: string;
  onValueChange?: (value: string) => void;
}

const FilterDropdown = ({
  label,
  options,
  onValueChange,
}: FilterDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-between w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <span className="text-gray-700">{label}</span>
          <ChevronDownIcon className="h-4 w-4 text-gray-500" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => onValueChange?.(option)}
            className="cursor-pointer"
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};


{/*TODO: configure the date range dropdown*/}
const DateRangeDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-between w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <span className="text-gray-700">Date Range</span>
          <ChevronDownIcon className="h-4 w-4 text-gray-500" />
        </button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

const TimesheetFilters = () => {
  const statusOptions: Status[] = ["COMPLETED", "INCOMPLETE", "MISSING"];

  return (
    <div className="flex gap-4 mb-6">
      <div className="w-48">
        <DateRangeDropdown />
      </div>
      <div className="w-48">
        <FilterDropdown label="Status" options={statusOptions} />
      </div>
    </div>
  );
};

export default TimesheetFilters;
