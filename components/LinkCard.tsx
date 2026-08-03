"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";

interface ChildItem {
  title: string;
  url: string;
}

interface Props {
  title: string;
  url?: string;
  icon?: string;
  children?: ChildItem[];
}

export default function LinkCard({ title, url, icon, children }: Props) {
  const [open, setOpen] = useState(false);

  // ===============================
  // Accordion
  // ===============================
  if (children) {
    return (
      <div className="space-y-3">
        <button
          onClick={() => setOpen(!open)}
          className="w-full rounded-3xl border border-white/20 bg-white/15 backdrop-blur-xl px-6 py-5 transition-all duration-300 hover:bg-white/20"
        >
          <div className="grid grid-cols-[50px_1fr_40px] items-center">
            {/* Icon */}
            <div className="flex justify-center">
              {icon && (
                <Image
                  src={icon}
                  alt={title}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              )}
            </div>

            {/* Title */}
            <h2 className="text-center text-2xl font-semibold text-white">
              {title}
            </h2>

            {/* Arrow */}
            <ChevronDown
              size={24}
              className={`justify-self-end text-white transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {/* Accordion Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="ml-6 mt-2 space-y-3">
            {children.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                target="_blank"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg px-5 py-4 text-white transition-all duration-300 hover:bg-white/20 hover:translate-x-1"
              >
                <span className="font-medium">{item.title}</span>

                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ===============================
  // Normal Card
  // ===============================
  // ===============================
  // Normal Card
  // ===============================
  if (!url) return null;

  return (
    <div className="space-y-3">
      <Link
        href={url}
        target="_blank"
        className="group block w-full rounded-3xl border border-white/20 bg-white/15 backdrop-blur-xl px-6 py-5 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
      >
        <div className="grid grid-cols-[50px_1fr_40px] items-center">
          {/* Icon */}
          <div className="flex justify-center">
            {icon && (
              <Image
                src={icon}
                alt={title}
                width={34}
                height={34}
                className="object-contain"
              />
            )}
          </div>

          {/* Title */}
          <h2 className="text-center text-2xl font-semibold text-white">
            {title}
          </h2>

          {/* Arrow */}
          <ArrowUpRight
            size={22}
            className="justify-self-end text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </div>
      </Link>
    </div>
  );
}
