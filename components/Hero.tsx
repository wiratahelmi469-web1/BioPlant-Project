import Image from "next/image";

import LinkCard from "./LinkCard";
import links from "@/data/links";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-md pt-10 text-center">
      {/* Profile */}
      <div className="flex flex-col items-center">
        <Image
          src="/icons/greenovative.jpg"
          alt="Greenovative"
          width={110}
          height={110}
          priority
          className="rounded-full border-4 border-white/30 object-cover shadow-2xl"
        />

        <h1 className="mt-6 text-4xl font-bold text-white">
          Greenovative
        </h1>

        <p className="mt-2 text-white/80">
          Bogor, Indonesia
        </p>
      </div>

      {/* Link List */}
      <div className="mt-10 space-y-5">
        {links.map((link) => (
          <LinkCard
            key={link.title}
            title={link.title}
            url={link.url}
            children={link.children}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-14 text-sm text-white/70">
        © 2026 Greenovative. All Rights Reserved.
      </footer>
    </section>
  );
}