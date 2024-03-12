import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="py-14 md:py-28 text-neutral-950">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center md:items-center md:py-12 md:px-6 gap-y-8 text-neutral-950">
          <h3 className="text-2xl md:text-4xl uppercase font-bold">
            Поздравляем с регистрацией!
          </h3>
          <h4 className="text-xl md:text-4xl text-light">
            Ваш билет на почте, не забудьте паспорт.
          </h4>
          <Link href="/" className="underline">
            Вернуться на главную страницу
          </Link>
        </div>
      </div>
    </div>
  );
}
