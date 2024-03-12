import Image from "next/image";
import logo from "/public/logo--white-2.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-neutral-950 py-16 border-t border-neutral-50">
      <div className=" container mx-auto h-full">
        <Link href="/">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="логотип фестиваля"
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2"
          />
        </Link>
        <div className="flex flex-col md:justify-end md:h-full">
          <div className="flex flex-col gap-4 justify-center items-center text-center text-white">
            <div className="flex gap-x-4">
              <Link href="https://t.me/unknownrussiafest" target="_blank">
                <Image
                  src={"/svg/telegram.svg"}
                  width={30}
                  height={30}
                  alt="телеграм"
                  className="transition ease-in-out hover:scale-105"
                />
              </Link>
              <Link href="https://vk.com/unknownrussiafest" target="_blank">
                <Image
                  src={"/svg/vk.svg"}
                  width={30}
                  height={30}
                  alt="вконтакте"
                  className="transition ease-in-out hover:scale-105"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@unknownrussiafest"
                target="_blank"
              >
                <Image
                  src={"/svg/youtube.svg"}
                  width={30}
                  height={30}
                  alt="youtube"
                  className="transition ease-in-out hover:scale-105"
                />
              </Link>
            </div>
            <Link href="/privacy-policy" className="text-sm" target="_blank">
              Политика конфиденциальности
            </Link>
            <Link href="mailto:info@unknownrussiafest.ru">
              info@unknownrussiafest.ru
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
