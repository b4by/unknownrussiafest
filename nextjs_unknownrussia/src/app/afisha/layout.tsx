"use client";
import { DropdownCategories } from "@/components/ui/dropdown-categories";
import { categories_links } from "@/constants/categories_links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryLink = ({ link, title }: { link: string; title: string }) => {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <li>
      <Link
        href={link}
        className={cn(
          "uppercase text-sm font-bold border text-neutral-950 border-neutral-650 rounded-sm px-4 py-2 whitespace-nowrap",
          isActive && "text-neutral-950 border-neutral-950"
        )}
      >
        {title}
      </Link>
    </li>
  );
};

export default function AfishaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-12 md:py-28 text-neutral-950">
      <div className="container mx-auto">
        <h2 className="uppercase text-4xl font-bold text-neutral-950 text-center">
          Афиша
        </h2>
        <nav className="my-10 xl:my-14">
          <ul className="hidden xl:flex gap-x-4 justify-center">
            {categories_links.map((category) => (
              <CategoryLink
                key={category.id}
                link={category.link}
                title={category.title}
              />
            ))}
          </ul>
          <DropdownCategories />
        </nav>
        <div>{children}</div>
      </div>
    </div>
  );
}
