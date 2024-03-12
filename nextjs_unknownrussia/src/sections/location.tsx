export const Location = () => {
  return (
    <section className="bg-[url('/location.jpeg')] bg-no-repeat bg-cover">
      <div className="w-full h-full backdrop-brightness-50 bg-opacity-5 backdrop-blur-sm py-40">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center md:items-center gap-y-10">
            <h3 className="uppercase font-bold text-4xl md:text-5xl leading-tight leading text-white">
              Москва, ВДНХ,
              <br /> ВЫСТАВКА «РОССИЯ»
              <br />
              ПАВИЛЬОН «ГАЗПРОМ»
            </h3>
            <h4 className="uppercase text-3xl text-white font-medium">
              7 - 31 марта, 2024
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
