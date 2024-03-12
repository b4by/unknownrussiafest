import {
  formatMinutes,
  isBeforeOrOnMarch10Moscow,
  isOpenForRegistration,
  isRegistrationOver,
} from "@/lib/utils";
import { getMoviesByCategory } from "@/services/getMoviesByCategory";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params: { id } }: PageProps) {
  const categoryMovies = await getMoviesByCategory(id);

  return (
    <div>
      <ul className="flex flex-col gap-y-8 lg:items-center justify-center mx-auto max-w-[900px]">
        {categoryMovies.data["attributes"].movies.data.map((item: any) => {
          const openForRegistration = isOpenForRegistration(
            item["attributes"].date
          );
          const registrationOver = isRegistrationOver(item["attributes"].date);
          return (
            <li
              className="flex flex-col lg:flex-row gap-10 py-7 border-b last:border-0"
              key={item.id}
            >
              {item["attributes"]?.poster.data ? (
                <Image
                  src={`https://api.unknownrussiafest.ru${item["attributes"]?.poster.data["attributes"].url}`}
                  alt="постер фильма"
                  width={300}
                  height={300}
                  className="w-[150px] lg:w-[300px] lg:h-[425px] object-cover"
                />
              ) : (
                <div className="bg-gray-300 w-[150px] h-[212px]"></div>
              )}
              <div className="lg:w-[400px]">
                <h3 className="font-bold uppercase text-2xl tracking-tighter mb-4">
                  {item["attributes"]?.title}
                </h3>
                <p className="line-clamp-6">
                  {item["attributes"]?.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  {item["attributes"]?.director && (
                    <div className="flex flex-col gap-y-1">
                      <span className="text-xs font-bold uppercase">
                        Режиссёр:
                      </span>
                      <span className="uppercase text-sm tracking-tighter">
                        {item["attributes"]?.director}
                      </span>
                    </div>
                  )}
                  {item["attributes"]?.screenwriter && (
                    <div className="flex flex-col gap-y-1">
                      <span className="text-xs font-bold uppercase">
                        Автор сценария:
                      </span>
                      <span className="uppercase text-sm tracking-tighter">
                        {item["attributes"]?.screenwriter}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex gap-x-2 mt-6">
                  {item["attributes"]?.rating && (
                    <span className="rounded px-2 text-sm border border-neutral-950">
                      {item["attributes"]?.rating}
                    </span>
                  )}
                  {item["attributes"]?.duration && (
                    <span className="rounded px-2 text-sm border border-neutral-950">
                      {formatMinutes(item["attributes"]?.duration)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-6 mt-8">
                  <Link
                    href={`/${item["attributes"].slug}`}
                    className="block w-fit bg-neutral-950 text-white px-4 py-2 uppercase font-medium transition ease-in-out duration-200 hover:opacity-60 rounded-sm"
                  >
                    Подробнее
                  </Link>
                  {registrationOver && (
                    <span className="font-bold text-sm uppercase tracking-tight  text-neutral-950 py-2">
                      Регистрация завершена
                    </span>
                  )}
                  {openForRegistration ? (
                    <Link
                      href={`/${item["attributes"].slug}`}
                      className="w-fit rounded-sm px-4 py-2 bg-blue-600 text-white uppercase tracking-tighter transition ease-in-out duration-200 hover:bg-opacity-80"
                    >
                      Зарегистрироваться
                    </Link>
                  ) : (
                    !registrationOver && (
                      <span className="text-sm">
                        регистрация откроется за 2 дня до показа
                      </span>
                    )
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
