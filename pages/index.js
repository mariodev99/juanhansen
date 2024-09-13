import Image from "next/image";
import juanhansen from "../public/images/juanhansen.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { LogoIcon } from "@/components/icons/Logo";
import { useLoad } from "@/components/context/LoadContext";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

export default function Home() {
  const { isLoadFinish } = useLoad();

  const LetterAnimation = ({ word }) => (
    <div className="overflow-hidden flex gap-1 ">
      {word.split(" ").map((singleWord, wordIndex) => (
        <div className="flex gap-[0.9]" key={wordIndex}>
          {singleWord.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="block"
              initial={{ opacity: 0, rotateX: -50, y: 10 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{
                delay:
                  (isLoadFinish ? 0 : 4.5) + (wordIndex + letterIndex) * 0.06,
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      <main
        className={`flex h-screen relative items-center justify-center overflow-x-hidden`}
        data-scroll-section
      >
        <motion.div
          className="absolute inset-0 z-[-1] brightness-50"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{
            delay: isLoadFinish ? 0 : 3.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Image
            src={juanhansen}
            fill
            style={{ objectFit: "cover" }}
            alt="juan hansen"
          />
        </motion.div>

        <div className="px-10">
          <motion.div
            className="relative"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{
              delay: isLoadFinish ? 0 : 2.9,
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <MouseParallaxChild factorX={0.3} factorY={0.5}>
              <LogoIcon className={"w-full h-16 md:w-auto md:h-auto"} />
            </MouseParallaxChild>
          </motion.div>

          <div className="flex justify-end uppercase gap-20 text-xs mt-2">
            <div>
              <div className="overflow-hidden flex gap-[0.9]">
                <LetterAnimation word={"DJ"} />
              </div>
              <div className="overflow-hidden flex gap-[0.9]">
                <LetterAnimation word={"Producer"} />
              </div>
            </div>
            <div>
              <div className="overflow-hidden flex gap-[0.9]">
                <LetterAnimation word={"Buenos Aires"} />
              </div>
              <LetterAnimation word={"Argentina"} />
            </div>
          </div>
        </div>
      </main>
    </MouseParallaxContainer>
  );
}
