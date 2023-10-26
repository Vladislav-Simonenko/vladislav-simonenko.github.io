import { AdvantagesContant } from "@organism/AdvantagesContant";
import { motion } from "framer-motion";

export const Advantages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <AdvantagesContant />
    </motion.div>
  );
};
