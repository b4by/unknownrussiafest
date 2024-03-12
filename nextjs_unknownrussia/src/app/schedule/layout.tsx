export default async function ScheduleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-12 md:py-28 text-neutral-950">
      <div className="container">
        <h2 className="uppercase text-4xl font-bold text-neutral-950 text-center mb-16">
          Расписание
        </h2>
        {children}
      </div>
    </div>
  );
}
