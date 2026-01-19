import { motion } from "framer-motion";
import { useScrollProgress } from "../hooks/useScrollProgress";

const ScrollProgress = () => {
  const progress = useScrollProgress();
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-primary via-accent-cyan to-accent-teal"
      style={{ width: `${progress * 100}%` }}
    />
  );
};

export default ScrollProgress;
