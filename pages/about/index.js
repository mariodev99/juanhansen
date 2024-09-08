import { motion } from "framer-motion";
import hansen from ".././../public/images/juanhansen_about.jpg";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const aboutPrimaryLines = [
    "Juan Hansen is a trailblazer in the electronic ",
    "music scene, renowned for his innovative ",
    "approach and unwavering dedication to the craft.",
    "As an Argentinean DJ and producer, he has ",
    "captivated audiences worldwide with his ",
    "electrifying performances and groundbreaking ",
    "tracks. From his early days spinning records in ",
    "local clubs to headlining major festivals across ",
    "the globe, Juan has continually pushed the ",
    "boundaries of electronic music.",
  ];

  const aboutSecondLines = [
    "Today, Juan stands as a symbol of creativity and ",
    "resilience, inspiring aspiring musicians to pursue ",
    "continues to evolve as an artist and influencer, ",
    "Juan remains committed to pushing the ",
    "boundaries of electronic music and fostering a ",
    "global community united by a shared love for the ",
    "art form.",
  ];

  const focusTextLines = [
    "Juan Hansen personifies the ethos of ",
    "a curator and creator within the ",
    "electronic music scene. His presence",
    "reflects this identity, shaping the ",
    "narrative of modern DJ culture.",
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: (custom) => ({
      transition: {
        staggerChildren: 0.05,
        delay: custom,
      },
    }),
  };

  const lineVariants = {
    hidden: { y: 30, rotateX: 40 },
    visible: {
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const TextWithAnimation = ({ textLines, customDelay }) => (
    <motion.div
      custom={customDelay}
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {textLines.map((line, index) => (
        <div className="overflow-hidden" key={index}>
          <motion.p variants={lineVariants}>{line}</motion.p>
        </div>
      ))}
    </motion.div>
  );

  const [hoverLinkAnimation, setHoverLinkAnimation] = useState(false);

  return (
    <div className="py-24 px-10 grid grid-cols-[1fr_2fr_1.5fr] gap-4">
      <motion.div
        className="overflow-hidden w-2/3"
        initial={{ height: 0 }}
        animate={{ height: "320px" }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <motion.div className="relative w-full h-80">
          <Image src={hansen} alt="juan hansen" fill objectFit="cover" />
        </motion.div>
      </motion.div>

      <div className="about-text text-2xl">
        <div className="overflow-hidden">
          <motion.h2
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="uppercase text-sm mb-4"
          >
            dj / producer
          </motion.h2>
        </div>
        <TextWithAnimation textLines={aboutPrimaryLines} customDelay={0} />
        <div className="mt-5">
          <TextWithAnimation textLines={aboutSecondLines} customDelay={0.3} />
        </div>
      </div>
      <div className="about-text text-2xl">
        <div className="overflow-hidden">
          <motion.h2
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="uppercase text-sm mb-4"
          >
            focus
          </motion.h2>
        </div>
        <TextWithAnimation textLines={focusTextLines} customDelay={0.6} />
      </div>
    </div>
  );
}
