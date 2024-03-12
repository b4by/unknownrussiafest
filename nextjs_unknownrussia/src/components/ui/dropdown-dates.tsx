"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function DropdownDates({
  dates,
  selectedDate,
  filterEventsByDate,
}: any) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="xl:hidden">
        <button
          type="button"
          className="flex items-center gap-x-2 uppercase font-semibold border border-neutral-950 px-4 py-2 rounded-sm text-sm"
        >
          <span>
            {new Date(selectedDate).toLocaleDateString("ru-RU", {
              month: "long",
              day: "numeric",
              weekday: "short",
            })}
          </span>
          <ChevronDownIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 w-56">
        <DropdownMenuGroup>
          {dates.map((date: any) => {
            return (
              <DropdownMenuItem
                key={date}
                className="uppercase font-medium text-neutral-950"
                onClick={() => filterEventsByDate(date)}
              >
                {new Date(date).toLocaleDateString("ru-RU", {
                  month: "short",
                  day: "numeric",
                  weekday: "short",
                })}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
