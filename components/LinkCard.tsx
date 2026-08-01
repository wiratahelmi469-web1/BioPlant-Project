import Image from "next/image";
import Link from "next/link";

type LinkCardProps = {
  title: string;
  subtitle?: string;
  url: string;
  icon?: string;
};

export function LinkCard({ title, subtitle, url, icon }: LinkCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 hover:bg-white/20 transition"
    >
      <div className="w-10 flex justify-center">
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

      <div className="flex-1 text-center">
        <h3 className="font-semibold text-white">{title}</h3>
        {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}
      </div>
    </Link>
  );
}
