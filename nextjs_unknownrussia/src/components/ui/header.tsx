"use client";
import Link from "next/link";
import logo from "/public/logo--white-2.png";
import { DropdownSpecial } from "./dropdown-special";
import Image from "next/image";
import { useState } from "react";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-950 py-1 md:py-6 border-neutral-200 fixed md:static w-full z-50">
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="container mx-auto w-full h-full">
        <nav className="relative flex items-center justify-between md:justify-center text-white uppercase">
          <Link href="/">
            <Image
              alt="логотип фестиваля неизвестная россия"
              src={logo}
              width={50}
              height={50}
              className="left-0 -top-[10px] md:w-[40px] md:absolute"
            />
          </Link>
          <ul className="hidden md:flex items-center gap-x-8">
            <li className="text-sm">
              <Link href="/#about" scroll>
                О фестивале
              </Link>
            </li>
            <li className="text-sm text-neutral-950 px-4 py-2 bg-white rounded">
              <DropdownSpecial />
            </li>
            <li className="text-sm">
              <Link href="/afisha/1">Афиша</Link>
            </li>
            <li className="text-sm">
              <Link href="/schedule">Расписание</Link>
            </li>
          </ul>
          <button
            className="md:hidden w-12 h-12 flex items-center justify-center relative"
            onClick={() => setIsOpen((state) => !state)}
          >
            <span
              className={cn(
                "w-5 rounded-lg transform transition duration-200 h-[1.6px]  bg-white absolute",
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-[6px]"
              )}
            ></span>
            <span
              className={cn(
                "w-5 rounded-lg transform transition duration-200 h-[1.6px] bg-white absolute",
                isOpen ? "opacity-0 translate-x-3" : "opacity-100"
              )}
            ></span>
            <span
              className={cn(
                "w-5 rounded-lg transform transition duration-200 h-[1.6px] bg-white absolute",
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-[6px]"
              )}
            ></span>
          </button>
        </nav>
      </div>
    </header>
  );
};
