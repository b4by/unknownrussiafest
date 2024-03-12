export const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-white text-neutral-950 font-light tracking-tighter border-y border-neutral-800">
      <div className="py-7 animate-marquee whitespace-nowrap flex items-center">
        <span className="mx-4 w-3 h-3 rounded-full bg-neutral-950"></span>
        <span className="text-xl uppercase mx-4">
          Москва, 7 - 31 марта 2024
        </span>
        <span className="mx-4 w-3 h-3 rounded-full bg-neutral-950"></span>
        <span className="text-xl uppercase mx-4">
          Всеросийский фестиваль документального кино «Неизвестная Россия»
        </span>
        <span className="mx-4 w-3 h-3 rounded-full bg-neutral-950"></span>
        <span className="text-xl uppercase mx-4">
          ВДНХ, ВЫСТАВКА «Россия», Павильон «ГАЗПРОМ»
        </span>
      </div>
      <div className="absolute top-0 py-7 animate-marquee2 whitespace-nowrap flex items-center">
        <span className="mx-4 w-3 h-3 rounded-full bg-neutral-950"></span>
        <span className="text-xl uppercase mx-4">
          Москва, 7 - 31 марта 2024
        </span>
        <span className="mx-4 w-3 h-3 rounded-full bg-neutral-950"></span>
        <span className="text-xl uppercase mx-4">
          Всеросийский фестиваль документального кино{" "}
          <strong>«Неизвестная Россия»</strong>
        </span>
        <span className="mx-4 w-3 h-3 rounded-full bg-neutral-950"></span>
        <span className="text-xl uppercase mx-4">
          ВДНХ, ВЫСТАВКА «Россия», Павильон «ГАЗПРОМ»
        </span>
      </div>
    </div>
  );
};
