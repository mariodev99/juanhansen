import Image from "next/image";
import { Inter } from "next/font/google";
import juanhansen from "../public/images/juanhansen.jpg";
import title from "../public/images/juanhansen_title.png";
import { motion } from "framer-motion";
import { LogoIcon } from "@/components/icons/Logo";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const textHome = "DJ";
  const DELAY_TITLE_ANIMATION = 3.5;

  const LetterAnimation = ({ word }) => (
    <div className="overflow-hidden flex gap-1">
      {word.split(" ").map((singleWord, wordIndex) => (
        <div className="flex gap-[0.9]" key={wordIndex}>
          {singleWord.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="block"
              initial={{ opacity: 0, rotateX: -50, y: 10 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{
                delay: 3.5 + (wordIndex + letterIndex) * 0.06,
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
    <main
      className={`flex min-h-screen ${inter.className} relative items-center justify-center overflow-x-hidden`}
    >
      <motion.div
        className="absolute inset-0 z-[-1]"
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ delay: 2.2, duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          src={juanhansen}
          fill
          style={{ objectFit: "cover" }}
          alt="juan hansen"
        />
      </motion.div>
      <div className="">
        <motion.div
          className="relative"
          initial={{ rotateX: -25 }}
          animate={{ rotateX: 0 }}
          transition={{
            delay: DELAY_TITLE_ANIMATION,
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          <LogoIcon />
        </motion.div>
        <div className="flex justify-end mr-10 uppercase gap-20 text-xs">
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
  );
}
