import { About } from "@organism/index";
import { motion } from "framer-motion";

export const AboutTemplate = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <About />
    </motion.div>
  );
};
