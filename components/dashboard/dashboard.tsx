"use client";

import { useEffect, useState } from "react";
import TimesheetFilters from "./timesheet-filters";
import TimesheetTable from "./timesheet-table";
import Pagination from "./timesheet-pagination";
import { ITimesheetData, timesheetData } from "@/data/mock-data";
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentTimesheetData, setCurrentTimesheetData] =
    useState<ITimesheetData[]>([]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentTimesheetData(
      timesheetData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    );
  }, [currentPage, itemsPerPage]);

  return (
    <div className="flex flex-col h-full">
      {/* TODO: implement the filters */}
      <TimesheetFilters />

      <div className="flex-1 overflow-hidden">
        <TimesheetTable timesheetData={currentTimesheetData} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(timesheetData.length / itemsPerPage)}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default Dashboard;
