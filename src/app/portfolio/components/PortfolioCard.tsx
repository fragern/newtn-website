import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type MotionValue, useTransform } from "framer-motion";
import type { Portfolio } from "@/types/Portfolio";

interface PortfolioCardProps {
  portfolio: Portfolio;
  scrollYProgress: MotionValue;
}
export default function PortfolioCard({
  portfolio,
  scrollYProgress,
}: PortfolioCardProps) {
  const cardRef = useRef(null);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.9 + portfolio.id * 0.03],
  );

  return (
    <motion.div
      style={{
        zIndex: portfolio.id,
        scale,
        translateY: (portfolio.id - 1) * 20,
      }}
      animate={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.3 }}
    >
      <div
        ref={cardRef}
        className={`flex w-full flex-col items-start justify-between rounded-[18px] bg-white px-[30px] py-[45px] shadow-portfolio lg:flex-row lg:items-center`}
      >
        <div className="flex flex-col gap-6 lg:w-[423.75px]">
          <p className="text-2xl font-bold lg:mb-[15px] lg:font-normal">
            {portfolio.title}
          </p>
          <Link
            href={`/portfolio/${portfolio.category.slug}/${portfolio.id}`}
            className="cursor-pointer rounded-full border-[1.5px] border-[#C7D9E582] bg-[#2F415799] bg-opacity-60 px-[18px] py-[10.5px] text-center text-white"
          >
            View Detail Projects
          </Link>
        </div>

        <div className="relative mx-auto mt-[90px] h-[200px] w-[300px] rounded-xl bg-black lg:mx-0 lg:mt-0 lg:h-[382.342px] lg:w-[498.75px]">
          <Image
            src={portfolio.coverImage}
            alt={`${portfolio.title}'s image`}
            fill
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
