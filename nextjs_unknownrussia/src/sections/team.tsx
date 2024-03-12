import { team } from "@/constants/team";
import Image from "next/image";

export const Team = () => {
  return (
    <section className="bg-neutral-950 py-24 text-white" id="team">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-12">
          <h2 className="uppercase text-4xl font-bold text-center">
            Команда фестиваля
          </h2>
          <ul className="grid grid-cols-3 gap-12 justify-between">
            {team.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center gap-4 basis-1/3"
              >
                <Image
                  src={item.photo}
                  alt="фотография члена команды"
                  width={250}
                  height={250}
                  quality={95}
                />
                <h3 className="text-2xl tracking-tight font-medium">
                  {item.name}
                </h3>
                <h4 className="text-base tracking-tighter">{item.role}</h4>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className="text-center text-sm"
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
