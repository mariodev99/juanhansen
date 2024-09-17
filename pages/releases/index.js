import { Releases } from "@/components/common/Releases";
import { TitlePage } from "@/components/common/TitlePage";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Footer from "@/components/common/Footer";

export default function ReleasesPage() {
  const [currentRelease, setCurrentRelease] = useState(null);
  const [hoverAnimation, setHoverAnimation] = useState(false);

  return (
    <div>
      <div className="py-32 px-10 " data-scroll-section id="scroll-content">
        <TitlePage text={"releases"}></TitlePage>
        <Releases
          setCurrentRelease={setCurrentRelease}
          setHoverAnimation={setHoverAnimation}
        />
        {/* 
      Locomotive-scroll utiliza -transform- para trabajar y no el scroll normal utilizado.
      Trae PROBLEMAS al querer fijar un contenedor con -position: fixed-
      SOLUCION:
      Se utiliza: 
        data-scroll - 
        data-scroll-sticky - Fija el contenedor
        data-scroll-target="#scroll-content" - Se utiliza en el padre
        class: sticky-container con -positon: fixed- y otras propiedades para tener el texto centrado
      */}

        <div
          className="sticky-container"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#scroll-content"
        >
          <AnimatePresence mode="wait">
            {hoverAnimation && currentRelease && (
              <motion.div
                className=""
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
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
