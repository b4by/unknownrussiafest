import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMinutes(minutes: number) {
  var hours = Math.floor(minutes / 60);
  var remainingMinutes = minutes % 60;
  var formattedTime = hours + " ч. " + remainingMinutes + " мин.";
  return formattedTime;
}

export function formatDateTime(date: string): string {
  const date_ = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Moscow",
  };
  const formatter = new Intl.DateTimeFormat("ru-RU", options);

  const parts = formatter.formatToParts(date_);
  let day, month, hour, minute;

  for (const part of parts) {
    if (part.type === "day") day = part.value;
    if (part.type === "month") month = part.value;
    if (part.type === "hour") hour = part.value;
    if (part.type === "minute") minute = part.value;
  }

  return `${hour}:${minute} ${day} ${month}`;
}

export const isBeforeOrOnMarch10Moscow = (dateString: string) => {
  const givenDate = new Date(dateString);

  const moscowTimeOffset = 3;
  const givenDateInMoscow = new Date(
    givenDate.getTime() + moscowTimeOffset * 3600 * 1000
  );

  const cutoffDate = new Date(
    Date.UTC(givenDateInMoscow.getUTCFullYear(), 2, 11, 0, 0, 0)
  );

  return givenDateInMoscow < cutoffDate;
};

export function isOpenForRegistration(filmDate: string) {
  const filmSessionDateUTC = new Date(filmDate);

  const filmSessionDateMoscow = new Date(
    filmSessionDateUTC.getTime() + 3 * 60 * 60 * 1000
  );

  const now = new Date(new Date().getTime() + 3 * 60 * 60 * 1000);

  const twoDaysBeforeFilmSession = new Date(filmSessionDateMoscow);
  twoDaysBeforeFilmSession.setDate(twoDaysBeforeFilmSession.getDate() - 2);
  return now >= twoDaysBeforeFilmSession && now < filmSessionDateMoscow;
}

export function isRegistrationOver(filmDate: string) {
  const today = new Date();
  const filmSessionDate = new Date(filmDate);
  return today > filmSessionDate;
}

export function getCurrentDate() {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  return formattedDate;
}
