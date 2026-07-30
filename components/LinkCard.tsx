import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  url: string;
};

export default function LinkCard({
  title,
  subtitle,
  url,
}: Props) {
  return (
    <Link
      href={url}
      target="_blank"
      className="
      group
      flex
      items-center
      justify-between
      rounded-2xl
      border-2
      border-neutral-800
      bg-white
      p-5
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-green-50
      hover:shadow-xl
      "
    >
      <div>
        <h2 className="font-semibold text-lg">
          {title}
        </h2>

        <p className="text-sm text-neutral-500">
          {subtitle}
        </p>
      </div>

      <ArrowUpRight
        className="
        transition-transform
        duration-300
        group-hover:rotate-45
        "
      />
    </Link>
  );
}