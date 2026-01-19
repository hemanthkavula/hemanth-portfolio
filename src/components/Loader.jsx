import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-base"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <motion.div
        className="text-5xl font-semibold text-white"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 0.6, opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        HK
      </motion.div>
    </motion.div>
  );
};

export default Loader;
