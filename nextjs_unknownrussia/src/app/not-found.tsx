import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="container mx-auto">
        <h2>Страница не найдена</h2>
        <Link href="/">Вернуться на главную</Link>
      </div>
    </div>
  );
}
