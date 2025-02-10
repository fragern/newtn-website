import * as React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { type PortfolioCategoryType } from "@/types/PortfolioCategory";
import PortfolioCard from "../components/PortfolioCard";

export default function CardStack({
  items,
  onScrollEnd,
}: {
  items: PortfolioCategoryType;
  onScrollEnd: () => void;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const hasBouncedRef = React.useRef<boolean>(false);

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
      className="no-scrollbar flex h-[550px] w-full flex-col overflow-y-auto"
      style={{ scrollSnapType: "y mandatory", paddingBottom: "70px" }}
    >
      {items.portfolios.map((portfolio, index: number) => (
        <motion.div
          key={portfolio.id}
          className="sticky top-0 origin-top pb-[2px]"
          style={{
            zIndex: index - items.portfolios.length,
          }}
        >
          <PortfolioCard
            title={portfolio.title}
            id={portfolio.id}
            image={portfolio.image}
            link={portfolio.link}
            length={items.portfolios.length}
            scrollYProgress={scrollYProgress}
          />
        </motion.div>
      ))}
    </div>
  );
}
