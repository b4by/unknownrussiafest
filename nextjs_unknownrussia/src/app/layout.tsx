import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://unknownrussiafest.ru"),
  title: "Unknown Russia Fest — Неизвестная Россия",
  description:
    "Всероссийский фестиваль документального кино 'Неизвестная Россия'",
  keywords: "Кинофестиваль, кино, фестивально, документальное кино, фестиваль",
  openGraph: {
    title: "Unknown Russia Fest — Неизвестная Россия",
    description:
      "Всероссийский фестиваль документального кино 'Неизвестная Россия'",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.className} flex flex-col min-h-screen scroll-smooth`}
      >
        <Header />
        <div className="relative flex-1 mt-[72px] md:mt-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
