import Image from "next/image";
import Link from "next/link";

type LinkCardProps = {
  title: string;
  subtitle?: string;
  url: string;
  icon?: string;
};

export default function LinkCard({
  title,
  subtitle,
  url,
  icon,
}: LinkCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="
        flex items-center
        rounded-2xl
        border border-white/20
        bg-white/10
        backdrop-blur-md
        px-6 py-4
        transition-all duration-300
        hover:bg-white/20
        hover:scale-[1.02]
      "
    >
      {/* Logo */}
      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
        {icon && (
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="object-contain"
          />
        )}
      </div>

      {/* Judul */}
      <div className="flex-1 text-center">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm text-gray-300">
            {subtitle}
          </p>
        )}
      </div>

      {/* Spacer agar judul benar-benar center */}
      <div className="w-12 h-12 flex-shrink-0" />
    </Link>
  );
}