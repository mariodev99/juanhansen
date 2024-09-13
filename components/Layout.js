"use client";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import { useLoad } from "./context/LoadContext";
import { useRouter } from "next/router";

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

  const { asPath } = useRouter(); // With next/router
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
        inertia: 0.4,
      }}
      watch={[]}
      location={asPath}
      containerRef={containerRef}
      onLocationChange={(scroll) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
    >
      <div data-scroll-container ref={containerRef}>
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
        <AnimatePresence>{!isLoadFinish && <LoadingBar />}</AnimatePresence>
        <Nav></Nav>
        {children}

        {/* <Footer /> */}
      </div>
    </LocomotiveScrollProvider>
  );
}
