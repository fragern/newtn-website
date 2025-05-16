import Image from "next/image";
import Link from "next/link";
import type { Portfolio } from "@/types/Portfolio";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio }) => {
  return (
    <Link
      href={`/portfolio/${portfolio.category.slug}/${portfolio.id}`}
      className="flex flex-col overflow-hidden rounded-xl border border-primary bg-white transition-all hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] w-full bg-gray-200">
        <Image
          src={portfolio.showcaseImage2}
          alt={`${portfolio.title}'s image`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-semibold">{portfolio.title}</h1>
        <p className="mt-1 text-gray-600">{portfolio.short_description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {portfolio.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full border border-primary bg-white px-3 py-1 font-semibold text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
