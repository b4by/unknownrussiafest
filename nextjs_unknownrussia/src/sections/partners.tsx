import Image from "next/image";

export const Partners = () => {
  return (
    <section className="py-24" id="partners">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6">
          <Image
            src="/partners/fond-kultura-3.png"
            width={600}
            height={200}
            alt=""
            className="mx-auto"
          />
          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li>
              <Image
                src={"/partners/russia.png"}
                width={150}
                height={150}
                alt="международная выставка-форум Россия"
              />
            </li>
            <li>
              <Image
                src={"/partners/gazprom.png"}
                width={150}
                height={150}
                alt="газпром"
              />
            </li>
            <li>
              <Image
                src={"/partners/gazprom-media-2.jpg"}
                width={150}
                height={150}
                alt="газпром медиа"
              />
            </li>
            <li>
              <Image
                src={"/partners/freemotion.png"}
                width={150}
                height={150}
                alt="free motion"
              />
            </li>
            <li>
              <Image
                src={"/partners/ntv.png"}
                width={100}
                height={100}
                alt="нтв"
              />
            </li>
            <li>
              <Image
                src={"/partners/unknown-russia.png"}
                width={150}
                height={150}
                alt="неизвестная Россия"
              />
            </li>
            <li>
              <Image
                src={"/partners/tass.PNG"}
                width={150}
                height={150}
                alt="неизвестная Россия"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
