import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { fadeUp } from "../utils/animations";

const SectionWrapper = ({ id, children, className }) => {
  const prefersReduced = usePrefersReducedMotion();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        variants={fadeUp}
        initial={prefersReduced ? false : "hidden"}
        animate={prefersReduced || isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
