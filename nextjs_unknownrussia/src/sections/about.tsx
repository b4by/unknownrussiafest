export const About = () => {
  return (
    <section className="bg-white py-24" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-y-12 max-w-[650px] mx-auto">
          <h2 className="uppercase text-4xl text-neutral-950 font-bold">
            О фестивале
          </h2>
          <div className="flex flex-col gap-y-4">
            <p className="text-base text-center">
              Фестиваль документального кино — это всегда открытие. Открытие
              новых историй, новых граней нашей жизни, новых имен.
            </p>
            <p className="text-base text-center">
              Наш фестиваль объединит в себе традиции классического
              документального кино и новых форм зрительского документального
              контента. Именно на стыке разных форматов и рождается Новое —
              новый язык документальной киноправды.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
