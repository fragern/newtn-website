import Image from "next/image";
import Link from "next/link";
import type { Portfolio } from "@/types/Tessy/Portfolio";

interface PortfolioCardProps {
  portfolio: Portfolio;
  category: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  portfolio,
  category,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="line-clamp-1 text-xl font-medium sm:text-2xl">
            {portfolio.title}
          </h2>
        </div>

        <div className="relative h-36 w-full sm:h-40 md:h-44 lg:h-48 xl:h-52">
          <Image
            src={portfolio.coverImage}
            alt={`${portfolio.title}'s image`}
            fill
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>

      <Link
        href={`/portfolio/${category}/${portfolio.id}`}
        className="mt-2 w-fit rounded-full bg-primary-60 px-4 py-2 text-sm font-medium text-white sm:mt-2.5 md:mt-3 lg:mt-3.5 xl:mt-4"
      >
        View Project Detail
      </Link>
    </div>
  );
};

export default PortfolioCard;
