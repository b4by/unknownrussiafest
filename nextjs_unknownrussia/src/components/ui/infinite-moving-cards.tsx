"use client";
import { cn, formatMinutes } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: any[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "400s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-2xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[150px] max-w-full relative rounded flex-shrink-0 border-neutral-300 md:w-[150px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item["attributes"].title}
          >
            <Link href={`/${item["attributes"].slug}`}>
              <div className={`flex flex-col text-white gap-y-2`}>
                {item["attributes"]?.poster.data ? (
                  <Image
                    src={`https://api.unknownrussiafest.ru${item["attributes"]?.poster.data["attributes"].url}`}
                    alt="постер фильма"
                    width={150}
                    height={200}
                    className="w-[150px] h-[212px] object-cover"
                  />
                ) : (
                  <div className="bg-gray-300 w-[150px] h-[212px]"></div>
                )}
                <h3 className="text-[8px] line-clamp-2 h-[24px] uppercase">
                  {item["attributes"].title}
                </h3>
                <div className="flex gap-x-2">
                  {item["attributes"]?.rating && (
                    <span className="rounded px-1 text-[10px] border">
                      {item["attributes"]?.rating}
                    </span>
                  )}
                  {item["attributes"]?.duration && (
                    <span className="rounded px-1 text-[10px] border">
                      {formatMinutes(item["attributes"]?.duration)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
