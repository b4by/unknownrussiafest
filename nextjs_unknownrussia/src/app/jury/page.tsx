import { jury } from "@/constants/jury";
import Image from "next/image";

export default function JuryPage() {
  return (
    <div className="py-12 text-neutral-950 bg-white">
      <div className="container mx-auto">
        <h2 className="uppercase text-4xl font-bold mb-14 text-neutral-950 text-center">
          Жюри
        </h2>
      </div>
      <ul>
        {jury.map((item) => (
          <li
            className="py-12 border-b border-neutral-150 last:border-b-0"
            key={item.id}
          >
            <div className="max-w-[1000px] mx-auto px-4">
              <div className="flex flex-col gap-y-6 md:gap-y-0 md:flex-row gap-x-14">
                <Image
                  src={item.photo}
                  alt="член жюри"
                  width={300}
                  height={300}
                  className="w-[300px] h-[300px]"
                />
                <div className="flex flex-col gap-y-4">
                  <h2 className="uppercase tracking-tighter text-4xl font-bold">
                    {item.name}
                  </h2>
                  <h3 className="text-neutral-400 uppercase tracking-normal">
                    {item.role}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="prose-sm"
                  ></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
