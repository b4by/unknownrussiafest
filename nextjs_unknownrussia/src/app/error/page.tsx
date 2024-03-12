import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="py-28 text-neutral-950">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center py-12 px-6 gap-y-8 text-neutral-950">
          <h3 className="text-4xl uppercase font-bold">Что-то пошло не так!</h3>
          <h4 className="text-4xl text-light">
            Попробуйте зарегистрироваться позже.
          </h4>
          <Link href="/" className="underline">
            Вернуться на главную страницу
          </Link>
        </div>
      </div>
    </div>
  );
}
