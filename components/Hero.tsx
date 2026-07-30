import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center">

      <span
        className="
        inline-flex
        rounded-full
        border
        border-green-700
        bg-green-100
        px-4
        py-1
        text-xs
        font-semibold
        tracking-widest
        text-green-700
        "
      >
        READY STOCK
      </span>

      <Image
        src="/logo.png"
        alt="GreenLeaf"
        width={100}
        height={100}
        className="
        mx-auto
        mt-8
        rounded-full
        border-2
        border-neutral-800
        object-cover
        shadow-md
        "
      />

      <h1
        className="
        mt-6
        font-heading
        text-3xl
        font-bold
        sm:text-4xl
        "
      >
        GreenLeaf Studio
      </h1>

      <p
        className="
        mx-auto
        mt-4
        max-w-xs
        text-sm
        leading-7
        text-neutral-600
        sm:max-w-sm
        sm:text-base
        "
      >
        Tanaman hias pilihan untuk
        mempercantik rumah, kantor,
        dan ruang favoritmu.
      </p>

    </section>
  );
}