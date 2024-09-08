"use client";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const LOADINGBAR_ANIMATION_TIME = 3000;

  const LoadingBar = () => (
    <motion.div
      className="absolute top-0 h-1 bg-slate-200 z-50"
      initial={{ width: 0 }}
      animate={{ width: ["0vw", "30vw", "50vw", "100vw"] }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.6 },
        width: { duration: 2 },
        ease: "easeInOut",
      }}
    ></motion.div>
  );

  const [loadingComplete, setLoadingComplete] = useState(false); // Controla si la carga ha terminado

  useEffect(() => {
    setTimeout(() => setLoadingComplete(true), 3000); // Espera 1 segundo tras completar la carga antes de ocultar la barra
  }, []);

  return (
    <div className="h-screen w-screen overflow-y-scroll">
      <motion.div
        className="w-screen h-screen bg-[#1A1A1A] absolute z-40"
        animate={{
          height: 0,
        }}
        transition={{
          ease: "easeInOut",
          duration: 1.2,
          delay: 3, //2
        }}
      />
      <AnimatePresence>{!loadingComplete && <LoadingBar />}</AnimatePresence>
      <Nav></Nav>
      {children}
    </div>
  );
}
