import Hero from "@/components/Hero";
import PlantBarcode from "@/components/Barcode";
import LinkCard from "@/components/LinkCard";
import { links } from "@/data/links";

export default function Home() {
  return (
    <main
      className="
      min-h-screen
      px-4
      py-10
      sm:px-6
      lg:px-8
      "
    >
      <section
        className="
        mx-auto
        w-full
        max-w-md
        rounded-[34px]
        border-2
        border-neutral-800
        bg-[#FCFAF5]
        p-6
        shadow-2xl
        sm:p-8
        "
      >
        <Hero />

        <PlantBarcode />

        <div className="space-y-4">
          {links.map((item) => (
            <LinkCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

        <footer
          className="
          mt-10
          border-t
          border-dashed
          border-neutral-300
          pt-5
          text-center
          text-sm
          text-neutral-500
          "
        >
          📍 Bogor, Indonesia <br />
          Since 2026
        </footer>
      </section>
    </main>
  );
}