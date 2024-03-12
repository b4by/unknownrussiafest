import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Marquee } from "@/components/ui/marquee";
import { About } from "@/sections/about";
import { Location } from "@/sections/location";
import { Partners } from "@/sections/partners";
import Image from "next/image";

function shuffleMoviesArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

async function getMovies() {
  const res = await fetch(
    `https://api.unknownrussiafest.ru/api/movies?populate=*`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return shuffleMoviesArray(data.data).slice(0, 16);
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      <main className="bg-neutral-950 overflow-x-hidden">
        <div className="py-10 md:py-40">
          <div className="container mx-auto">
            <div className="flex flex-col gap-y-6 md:gap-y-0 md:flex-row justify-between">
              <div className="relative">
                <Image
                  src="/logo--white.png"
                  alt="логотип неизвестная россия"
                  width={100}
                  height={105}
                  className="hidden md:block absolute left-0 top-[6px] -scale-x-100 "
                />
                <div className="md:pl-[90px] flex flex-col gap-y-2 whitespace-nowrap">
                  <h1 className="text-white font-black uppercase text-4xl md:text-5xl">
                    Неизвестная <br /> Россия
                  </h1>
                  <h3 className="text-neutral-400 font-light uppercase text-2xl">
                    / 7 - 31 марта 2024 года /
                  </h3>
                  <h2 className="text-white font-light uppercase text-xl md:text-3xl">
                    всероссийский <br />
                    фестиваль <br /> документального кино
                  </h2>
                  <h4 className="text-white font-light text-[10px] w-[200px] md:text-sm uppercase tracking-tighter">
                    Москва, ВДНХ, выставка «Россия», павильон «Газпром»
                  </h4>
                </div>
              </div>
              <div className="md:ml-10">
                <InfiniteMovingCards
                  items={movies}
                  direction="left"
                  speed="slow"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <About />
      <Location />
      <Partners />
      <Marquee />
    </div>
  );
}
