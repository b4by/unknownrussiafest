import Link from "next/link";
import { useEffect } from "react";

export const MobileMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isOpen]);

  return (
    <div
      className="fixed w-full h-full overflow-hidden justify-center bg-neutral-950 left-0 z-10"
      style={{
        top: ` ${isOpen ? "72px" : "-100%"}`,
      }}
    >
      <ul className="text-white flex flex-col divide-y divide-neutral-200">
        <li>
          <Link
            href="/#about"
            className="w-full py-4 px-4 block"
            onClick={() => setIsOpen(false)}
          >
            О фестивале
          </Link>
        </li>
        <li>
          <Link
            href="/afisha/1"
            className="w-full py-4 px-4 block"
            onClick={() => setIsOpen(false)}
          >
            Афиша
          </Link>
        </li>
        <li>
          <Link
            href="/schedule"
            className="w-full py-4 px-4 block"
            onClick={() => setIsOpen(false)}
          >
            Расписание
          </Link>
        </li>
        <li>
          <Link
            href="/team"
            className="w-full py-4 px-4 block"
            onClick={() => setIsOpen(false)}
          >
            Команда фестиваля
          </Link>
        </li>
        <li>
          <Link
            href="/jury"
            className="w-full py-4 px-4 block"
            onClick={() => setIsOpen(false)}
          >
            Жюри
          </Link>
        </li>
        <li>
          <Link
            href="/#partners"
            className="w-full py-4 px-4 block"
            onClick={() => setIsOpen(false)}
          >
            Партнёры
          </Link>
        </li>
        <li>
          <Link
            href="/rules"
            className="w-full py-4 px-4 block"
            onClick={() => setIsOpen(false)}
          >
            Регламент
          </Link>
        </li>
      </ul>
    </div>
  );
};
