import ScheduleContainer from "./schedule-container";

async function getEvents() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/events?populate[movie][populate]=screenshots,poster,name`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SchedulePage() {
  const events = await getEvents();
  return <ScheduleContainer events={events} />;
}
