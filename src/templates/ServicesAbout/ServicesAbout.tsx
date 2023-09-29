import { Services } from "@organism/index";
import { motion } from "framer-motion";

export const ServicesAbout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <Services />
    </motion.div>
  );
};
