import { motion } from "framer-motion";

export const TitlePage = ({ text }) => (
  <div className="overflow-hidden">
    <motion.h1
      className="uppercase text-4xl font-semibold"
      initial={{ y: 50, rotateX: -90 }}
      animate={{ y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {text}
    </motion.h1>
  </div>
);
