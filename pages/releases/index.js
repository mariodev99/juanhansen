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
      <AnimatePresence>
        <div className="fixed border top-1/3 left-1/2 w-1 h-1 flex justify-center items-start">
          {hoverAnimation && (
            <motion.h1
              className="text-9xl uppercase text-center font-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {currentRelease?.name}
            </motion.h1>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}
