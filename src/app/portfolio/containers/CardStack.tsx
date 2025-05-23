import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import PortfolioCard from "../components/PortfolioCard";
import type { Portfolio } from "@/types/Portfolio";

interface CardStackProps {
  portfolios: Portfolio[];
  onScrollEnd: () => void;
}

export default function CardStack({ portfolios, onScrollEnd }: CardStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasBouncedRef = useRef<boolean>(false);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;

      if (isAtBottom && !hasBouncedRef.current) {
        hasBouncedRef.current = true;

        setTimeout(() => {
          onScrollEnd();
          resetScrollPosition();
        }, 300);
      }
    }
  });

  const resetScrollPosition = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        hasBouncedRef.current = false;
      }, 500);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`no-scrollbar flex h-[550px] w-full flex-col overflow-y-auto ${portfolios.length > 4 ? "px-12" : portfolios.length > 2 ? "px-4" : ""}`}
      style={{ scrollSnapType: "y mandatory", paddingBottom: "70px" }}
    >
      {portfolios.map((portfolio) => (
        <motion.div
          key={portfolio.id}
          className="sticky top-0 origin-top pb-[2px]"
          // style={{
          //   zIndex: index - portfolios.length,
          // }}
        >
          <PortfolioCard
            portfolio={portfolio}
            scrollYProgress={scrollYProgress}
          />
        </motion.div>
      ))}
    </div>
  );
}
