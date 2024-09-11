import { Releases } from "@/components/common/Releases";
import { TitlePage } from "@/components/common/TitlePage";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReleasesPage() {
  const [currentRelease, setCurrentRelease] = useState(null);
  const [hoverAnimation, setHoverAnimation] = useState(false);

  return (
    <div className="py-32 px-10">
      <TitlePage text={"releases"}></TitlePage>
      <Releases
        setCurrentRelease={setCurrentRelease}
        setHoverAnimation={setHoverAnimation}
      />

      {/* Titulo y descripcion con su animacion, solo en Desktop */}
      <motion.div className="hidden md:flex fixed top-1/3 left-1/2 w-1 h-1 justify-center items-start pointer-events-none">
        <AnimatePresence mode="wait">
          {hoverAnimation && currentRelease && (
            <motion.div
              key={currentRelease.name}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.h2
                className="text-5xl md:text-9xl uppercase text-center font-black"
                style={{ pointerEvents: "none" }}
              >
                {currentRelease.name.split(" ").map((word, wordIndex) => (
                  <div
                    key={wordIndex}
                    className="flex gap-2 justify-center overflow-hidden"
                  >
                    {word.split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ y: 100, rotateX: -90 }}
                        animate={{ y: 0, rotateX: 0 }}
                        exit={{ y: -100, rotateX: 90 }}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.5,
                          delay: index * 0.02,
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </motion.h2>
              <motion.div className="overflow-hidden text-center">
                <motion.p
                  initial={{ y: 100, rotateX: -90 }}
                  animate={{ y: 0, rotateX: 0 }}
                  exit={{ y: -100, rotateX: 90 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 0.04,
                  }}
                >
                  {currentRelease.description}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
