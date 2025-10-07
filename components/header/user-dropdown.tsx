"use client";

import { ChevronDownIcon, LogOutIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

const UserDropdown = () => {
  const { data: session } = useSession();
  const handleLogout = () => {
    signOut();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer focus:outline-none">
        {session?.user?.name}
        <ChevronDownIcon className="size-4 opacity-50" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-gray-500/10 bg-white">
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          <LogOutIcon className="size-4 opacity-50" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;