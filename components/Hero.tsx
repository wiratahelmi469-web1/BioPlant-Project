import Image from "next/image";

import { LinkCard } from "./LinkCard";
import links from "@/data/links";

export default function Hero() {
  return (
    <section className="w-full max-w-md mx-auto text-center">
      {/* Profile */}
      <div className="flex flex-col items-center">
        <Image
          src="/icons/bioplant.jpeg"
          alt="BioPlant Project"
          width={110}
          height={110}
          priority
          className="rounded-full border-4 border-white/30 shadow-2xl object-cover"
        />

        <h1 className="mt-6 text-4xl font-bold text-white">BioPlant Project</h1>

        <p className="mt-2 text-white/80">Bogor, Indonesia</p>
      </div>

      {/* Link List */}
      <div className="mt-10 space-y-5">
        {links.map((link) => (
          <LinkCard
            key={link.title}
            title={link.title}
            subtitle={link.subtitle}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-14 text-sm text-white/70">
        Bogor, Indonesia
      </footer>
    </section>
  );
}
