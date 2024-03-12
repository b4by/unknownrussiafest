"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories_links } from "@/constants/categories_links";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function DropdownCategories() {
  const pathname = usePathname();

  const [category, setCategory] = useState("География");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="xl:hidden">
        <button
          type="button"
          className="flex items-center gap-x-2 uppercase font-semibold border border-neutral-950 px-4 py-2 rounded-sm text-sm"
        >
          <span>{category}</span>
          <ChevronDownIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 w-56">
        <DropdownMenuGroup>
          {categories_links.map((category) => {
            const isActive = pathname === category.link;
            return (
              <DropdownMenuItem
                asChild
                key={category.id}
                className="uppercase font-medium text-neutral-950"
              >
                <Link
                  href={category.link}
                  onClick={() => setCategory(category.title)}
                >
                  {category.title}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
