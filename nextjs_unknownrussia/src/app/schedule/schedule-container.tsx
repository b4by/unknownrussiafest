"use client";
import { ScheduleItem } from "@/components/schedule-item";
import { DropdownDates } from "@/components/ui/dropdown-dates";
import { cn, getCurrentDate } from "@/lib/utils";
import { useState } from "react";

export default function ScheduleContainer({ events }: any) {
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const dates = events?.data?.map(
    (event: any) => event["attributes"].date.split("T")[0]
  );
  const uniqueDatesSet = new Set(dates);
  const uniqueDates = Array.from(uniqueDatesSet);

  const filterEventsByDate = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DropdownDates
        dates={uniqueDates}
        selectedDate={selectedDate}
        filterEventsByDate={filterEventsByDate}
      />
      <ul className="hidden xl:flex justify-start flex-wrap items-start gap-6">
        {uniqueDates.map((date: any) => (
          <li key={date}>
            <button
              className={cn(
                "uppercase text-sm font-bold border text-neutral-950 border-neutral-650 rounded-sm px-4 py-2 whitespace-nowrap",
                selectedDate === date && "bg-neutral-950 text-white"
              )}
              type="button"
              onClick={() => filterEventsByDate(date)}
            >
              {new Date(date).toLocaleDateString("ru-RU", {
                month: "long",
                day: "numeric",
                weekday: "short",
              })}
            </button>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-8 mt-8">
        {events?.data
          .filter((event: any) =>
            event["attributes"].date.startsWith(selectedDate)
          )
          .map((filteredEvent: any) => {
            return (
              <li key={filteredEvent.id}>
                <ScheduleItem event={filteredEvent} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
