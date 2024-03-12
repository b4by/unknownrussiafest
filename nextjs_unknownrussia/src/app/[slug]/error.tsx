"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-neutral-950">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-y-8 text-neutral-950 text-center md:text-left">
          <h2 className="text-4xl uppercase font-bold">Что-то пошло не так!</h2>
          <Link href="/" className="underline">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
