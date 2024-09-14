import { motion } from "framer-motion";
import { useState } from "react";

const HoverLink = ({ text }) => {
  const [hoverLinkAnimation, setHoverLinkAnimation] = useState(false);

  const letters = text.split("");

  const transitionAnimation = (index) => ({
    ease: "easeInOut",
    duration: 0.4,
    delay: index * 0.1,
  });

  const letterVariants = (index) => ({
    initial: { rotateX: 0, y: 0 },
    hover: {
      rotateX: hoverLinkAnimation ? 90 : 0,
      y: hoverLinkAnimation ? -20 : 0,
      transition: transitionAnimation(index),
    },
  });

  const reverseLetterVariants = (index) => ({
    initial: { rotateX: -90, y: -20 },
    hover: {
      rotateX: hoverLinkAnimation ? 0 : -90,
      y: hoverLinkAnimation ? -35 : -22,
      transition: transitionAnimation(index),
    },
  });

  return (
    <motion.div
      className="inline-block overflow-hidden text-3xl font-black h-8"
      onHoverStart={() => setHoverLinkAnimation(true)}
      onHoverEnd={() => setHoverLinkAnimation(false)}
    >
      <motion.p
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants(index)}
            initial="initial"
            animate="hover"
          >
            {letter}
          </motion.span>
        ))}
      </motion.p>

      <motion.p className="inline-block">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={reverseLetterVariants(index)}
            initial="initial"
            animate="hover"
          >
            {letter}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
};

export default HoverLink;
