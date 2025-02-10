import * as React from "react";
import Link from "next/link";
import { motion, type MotionValue, useTransform } from "framer-motion";
import { type PortfolioType } from "@/types/Portfolio";

export default function PortfolioCard({
  title,
  link,
  id,
  scrollYProgress,
}: PortfolioType & { scrollYProgress: MotionValue; length: number }) {
  const cardRef = React.useRef(null);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9 + id * 0.03]);
  return (
    <motion.div
      style={{ zIndex: id, scale, translateY: (id - 1) * 20 }}
      animate={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.3 }}
    >
      <div
        ref={cardRef}
        key={id}
        className={`portfolio-card flex w-full items-center justify-between rounded-[18px] bg-white px-[30px] py-[45px]`}
      >
        <div className="w-[423.75px]">
          <p className="mb-[15px] text-2xl">{title}</p>
          <Link
            href={link}
            className="cursor-pointer rounded-full border-[1.5px] border-[#C7D9E582] bg-[#2F415799] bg-opacity-60 px-[18px] py-[10.5px] text-white"
          >
            View Detail Projects
          </Link>
        </div>

        <div className="h-[382.342px] w-[498.75px] rounded-xl bg-black"></div>
      </div>
    </motion.div>
  );
}
