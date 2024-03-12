"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

export function DropdownSpecial() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-x-2 uppercase font-semibold"
        >
          <span>НЕИЗВЕСТНАЯ РОССИЯ</span>
          <ChevronDownIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem
            asChild
            className="uppercase font-medium text-neutral-950"
          >
            <Link href="/team">Команда фестиваля</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="uppercase font-medium text-neutral-950"
          >
            <Link href="/jury">Жюри</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="uppercase font-medium text-neutral-950"
          >
            <Link href="#partners">Партнёры</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="uppercase font-medium text-neutral-950"
          >
            <a href="/rules" rel="noopenner">
              Регламент
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
