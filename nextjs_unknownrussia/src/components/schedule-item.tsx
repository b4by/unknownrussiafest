import Image from "next/image";
import Link from "next/link";

export const ScheduleItem = ({ event }: any) => {
  return (
    <div className="relative w-full text-white bg-neutral-950 p-4 lg:py-0 lg:pl-8 lg:pr-0 overflow-hidden flex flex-col lg:flex-row justify-between lg:h-[212px]">
      <div className="flex flex-col lg:flex-row h-full lg:gap-8 lg:items-center">
        <h2 className="relative text-8xl font-bold lg:w-[250px]">
          {new Date(event["attributes"].date).toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h2>
        <div className="flex flex-col gap-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-2">
            <h3 className="uppercase tracking-tighter bg-white text-neutral-950 text-lg rounded px-4 w-fit">
              {event["attributes"].type}
            </h3>
            {event["attributes"].category && (
              <h4 className="uppercase text-md lg:text-xs lg:truncate w-[300px]">
                {event["attributes"].category}
              </h4>
            )}
          </div>
          <div>
            <h5 className="uppercase text-xl font-bold leading-none lg:w-[500px] line-clamp-3">
              {event["attributes"].name}
            </h5>
            <span className="text-xs leading-none">
              {event["attributes"].description}
            </span>
          </div>
          {event["attributes"]?.movie?.data && (
            <Link
              href={`/${event["attributes"]?.movie?.data?.["attributes"]?.slug}`}
              className="w-fit rounded-sm px-4 py-2 bg-blue-600 text-white uppercase tracking-tighter transition ease-in-out duration-200 hover:bg-opacity-80"
            >
              Зарегистрироваться
            </Link>
          )}
        </div>
      </div>
      {event["attributes"]?.movie?.data?.["attributes"]?.screenshots && (
        <div className="lg:w-[500px] h-[200px] lg:h-full lg:block relative">
          {event["attributes"]?.movie?.data &&
            event["attributes"]?.movie?.data?.["attributes"]?.screenshots
              ?.data[0]?.attributes?.url && (
              <Image
                src={`https://api.unknownrussiafest.ru${event["attributes"]?.movie?.data?.["attributes"]?.screenshots?.data[0]?.["attributes"]?.url}`}
                alt="постер"
                width={500}
                height={150}
                className="object-cover static lg:absolute w-full h-full right-0 bottom-0"
              />
            )}
          {/* <div className="absolute left-0 top-0 w-full h-full from-neutral-950 to-neutral-900 bg-gradient-to-l opacity-20"></div> */}
        </div>
      )}
    </div>
  );
};
