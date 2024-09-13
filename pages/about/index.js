import { motion } from "framer-motion";
import hansen from ".././../public/images/juanhansen_about.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLoad } from "@/components/context/LoadContext";
import { LogoIcon } from "@/components/icons/Logo";
import Link from "next/link";
import Footer from "@/components/common/Footer";

export default function About() {
  const { isLoadFinish } = useLoad();

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
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { y: 30, rotateX: 40 },
    visible: (custom) => ({
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: (isLoadFinish ? 0 : 3) + custom * 0.06,
      },
    }),
  };

  const textMobilevariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
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
        <div className="overflow-hidden text-lg md:text-2xl" key={index}>
          <motion.p variants={lineVariants} custom={index}>
            {line}
          </motion.p>
        </div>
      ))}
    </motion.div>
  );

  return (
    <div>
      <div
        className="py-24 px-10 grid grid-cols-1 md:grid-cols-[1fr_2fr_1.5fr] gap-4 min-h-screen"
        data-scroll-section
      >
        {/* imagen */}
        <motion.div
          className="overflow-hidden w-full md:w-2/3"
          initial={{ height: 0 }}
          animate={{ height: "320px" }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <motion.div className="relative w-full h-80">
            <Image src={hansen} alt="juan hansen" fill objectFit="cover" />
          </motion.div>
        </motion.div>
        <div className="">
          <div className="mt-5 md:mt-0 overflow-hidden">
            <motion.h2
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="uppercase text-xs md:text-sm mb-2 md:mb-4"
            >
              dj / producer
            </motion.h2>
          </div>

          <div className="hidden md:block">
            <TextWithAnimation textLines={aboutPrimaryLines} customDelay={0} />
          </div>

          <motion.div
            className="md:hidden block"
            variants={textMobilevariants}
            initial={"hidden"}
            animate={"visible"}
          >
            <p className="text-md">
              Juan Hansen is a trailblazer in the electronic music scene,
              renowned for his innovative approach and unwavering dedication to
              the craft. As an Argentinean DJ and producer, he has captivated
              audiences worldwide with his electrifying performances and
              groundbreaking tracks. From his early days spinning records in
              local clubs to headlining major festivals across the globe, Juan
              has continually pushed the boundaries of electronic music.
            </p>
          </motion.div>

          <div className=" hidden md:block">
            <TextWithAnimation textLines={aboutSecondLines} customDelay={0.3} />
          </div>

          <motion.div
            className="md:hidden block"
            variants={textMobilevariants}
            initial={"hidden"}
            animate={"visible"}
          >
            <p className="text-md">
              Today, Juan stands as a symbol of creativity and resilience,
              inspiring aspiring musicians to pursue continues to evolve as an
              artist and influencer, Juan remains committed to pushing the
              boundaries of electronic music and fostering a global community
              united by a shared love for the art form.
            </p>
          </motion.div>
        </div>
        <div className="">
          <div className="overflow-hidden">
            <motion.h2
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="uppercase text-xs md:text-sm mt-5 md:mt-0  mb-2 md:mb-4"
            >
              focus
            </motion.h2>
          </div>

          <div className="hidden md:block">
            <TextWithAnimation textLines={focusTextLines} customDelay={0.6} />
          </div>

          <motion.div
            className="md:hidden block"
            variants={textMobilevariants}
            initial={"hidden"}
            animate={"visible"}
          >
            <p>
              Juan Hansen personifies the ethos of a curator and creator within
              the electronic music scene. His presence reflects this identity,
              shaping the narrative of modern DJ culture.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
