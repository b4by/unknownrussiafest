import { RegistrationButton } from "@/components/ui/reg-button";
import {
  formatDateTime,
  formatMinutes,
  isOpenForRegistration,
  isRegistrationOver,
} from "@/lib/utils";
import Image from "next/image";

async function getMovie(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/movies/${slug}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function MoviePage({ params }: any) {
  const movie = await getMovie(params.slug);

  const openForRegistration = isOpenForRegistration(
    movie.data["attributes"].date
  );

  const registrationOver = isRegistrationOver(movie.data["attributes"].date);

  let registrationStatusText;

  if (registrationOver) {
    registrationStatusText = (
      <h4 className="font-bold text-lg uppercase tracking-tight bg-neutral-950 text-white px-4 py-2">
        Регистрация завершена
      </h4>
    );
  } else if (openForRegistration) {
    registrationStatusText = (
      <div className="flex flex-col gap-y-4">
        <h4 className="text-neutral-950 font-medium text-2xl uppercase tracking-tight flex gap-x-6">
          {formatDateTime(movie.data["attributes"].date)}
        </h4>
        <RegistrationButton
          title={movie.data["attributes"].title}
          movieId={movie.data.id}
          date={movie.data["attributes"].date}
        />
      </div>
    );
  } else {
    registrationStatusText = (
      <h4 className="font-bold text-lg uppercase tracking-tight bg-neutral-950 text-white px-4 py-2">
        Регистрация откроется за 2 дня до показа
      </h4>
    );
  }

  return (
    <div className="pb-24 text-neutral-950">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-center mb-8">
          <div className="relative xl:max-w-[1160px] xl:h-[420px] text-white">
            {movie.data["attributes"].screenshots && (
              <Image
                src={`https://api.unknownrussiafest.ru${movie.data["attributes"].screenshots.data[0].attributes.url}`}
                alt="скриншот из фильма"
                width={1400}
                height={420}
                className="xl:max-w-[1160px] xl:h-[420px] object-cover"
                unoptimized
              />
            )}
            <div className="absolute bottom-0 left-0 p-4 xl:p-12 flex flex-col gap-y-4 backdrop-brightness-50 w-full h-full justify-end">
              <h3 className="text-xl xl:text-5xl font-bold tracking-tight">
                {movie.data["attributes"]?.title}
              </h3>
              <div className="flex gap-x-2">
                {movie.data["attributes"]?.rating && (
                  <span className="rounded px-2 text-sm border">
                    {movie.data["attributes"]?.rating}
                  </span>
                )}
                {movie.data["attributes"]?.duration && (
                  <span className="rounded px-2 text-sm border">
                    {formatMinutes(movie.data["attributes"]?.duration)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="xl:max-w-[1160px] flex flex-col justify-between xl:flex-row mx-auto xl:px-12 gap-10">
          <div className="flex flex-col gap-y-8">
            {registrationStatusText}
            <div className="max-w-[720px]">
              <p>{movie.data["attributes"].description}</p>
            </div>
          </div>
          <ul className="xl:text-right flex flex-col gap-y-8">
            {movie.data["attributes"]?.director && (
              <li>
                <h3 className="text-2xl font-bold">Режиссёр</h3>
                <span className="uppercase text-base tracking-tighter">
                  {movie.data["attributes"]?.director}
                </span>
              </li>
            )}
            {movie.data["attributes"]?.screenwriter && (
              <li>
                <h3 className="text-2xl font-bold">Автор сценария</h3>
                <span className="uppercase text-base tracking-tighter">
                  {movie.data["attributes"]?.screenwriter}
                </span>
              </li>
            )}
            {movie.data["attributes"]?.photography && (
              <li>
                <h3 className="text-2xl font-bold">Оператор-постановщик</h3>
                <span className="uppercase text-base tracking-tighter">
                  {movie.data["attributes"]?.photography}
                </span>
              </li>
            )}
            {movie.data["attributes"]?.production && (
              <li>
                <h3 className="text-2xl font-bold">Производство</h3>
                <span className="uppercase text-base tracking-tighter">
                  {movie.data["attributes"]?.production}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
