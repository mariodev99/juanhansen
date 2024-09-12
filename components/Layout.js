"use client";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import { LoadProvider, useLoad } from "./context/LoadContext";

export default function Layout({ children }) {
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

  const containerRef = useRef(null);
  const { isLoadFinish, setLoadFinish } = useLoad();

  useEffect(() => {
    setTimeout(() => setLoadFinish(true), 3000);
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smoothMobile: true,
        lerp: 0.05,
        inertia: 0.9,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      {/* ERRORLOCOMOTIVE: SI SACO EL H-SCREEN FUNCIONA, SI LO DEJO NO (DIV DE ABAJO)*/}
      <div
        className={`${inter.className} w-screen overflow-y-scroll`}
        data-scroll-container
        ref={containerRef}
      >
        {/* CONTENEDOR DE CARGA */}
        <motion.div
          className="w-screen h-screen bg-[#131313] absolute z-40"
          animate={{
            height: 0,
          }}
          transition={{
            ease: "easeInOut",
            duration: 1.2,
            delay: 3, //2
          }}
        />

        {/* BARRA DE CARGA */}
        <AnimatePresence>{!isLoadFinish && <LoadingBar />}</AnimatePresence>
        <Nav></Nav>
        {children}
      </div>
    </LocomotiveScrollProvider>
  );
}
