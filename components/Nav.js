import Image from "next/image";
import title from "../public/images/juanhansen_title.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { LogoIcon } from "./icons/Logo";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import HoverLink from "./Nav/HoverLink";
import { useRouter } from "next/router";

const menuItemVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

export default function Nav() {
  const [open, isOpen] = useState(false);

  const router = useRouter();

  const handleClick = (e, href) => {
    if (router.pathname === href) {
      e.preventDefault(); // Evita la navegación si ya estás en la misma página
    }
    isOpen(false);
  };

  const CustomLink = ({ href, name }) => (
    <Link href={href} target="_blank">
      <div className="flex group gap-1 transition-all duration-150">
        <p>{name}</p>
        <div className="opacity-0 group-hover:opacity-100 duration-150">
          {">"}
        </div>
      </div>
    </Link>
  );

  const Menu = () => (
    <>
      {/* menu desplegable*/}
      <motion.div
        className="bg-[#1a1a1a] fixed right-0 top-0 h-screen w-[35vw] py-10 z-50"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 10% 0)" }}
        initial={{ width: "0px" }}
        animate={{ width: "35vw" }}
        exit={{ width: "0px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="pl-20 pr-10">
          <div className="flex justify-end overflow-hidden">
            <motion.button
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="font-semibold uppercase"
              onClick={() => isOpen(false)}
            >
              close
            </motion.button>
          </div>

          <Link href={"/"} onClick={(e) => handleClick(e, "/")}>
            <LogoIcon height={"70px"} width={"200px"} />
          </Link>

          <div className="mt-20 flex flex-col">
            <Link href={"/about"} onClick={(e) => handleClick(e, "/about")}>
              <HoverLink text={"ABOUT"} />
            </Link>
            <Link href={"/tour"} onClick={(e) => handleClick(e, "/tour")}>
              <HoverLink text={"TOUR"} />
            </Link>
            <Link
              href={"/releases"}
              onClick={(e) => handleClick(e, "/releases")}
            >
              <HoverLink text={"RELEASES"} />
            </Link>
          </div>

          <motion.div
            className="mt-10 pr-36 uppercase font-medium text-xs"
            variants={menuItemVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mt-10 grid grid-cols-2">
              <motion.p>follow</motion.p>
              <motion.div>
                <CustomLink
                  href={"https://www.instagram.com/juan_hansen/?hl=es"}
                  name={"instagram"}
                />
                <CustomLink
                  href={
                    "https://www.youtube.com/channel/UCowMXbr_PSnh6-Peva5Sxfg"
                  }
                  name={"youtube"}
                />
              </motion.div>
            </div>

            <div className="mt-10 grid grid-cols-2">
              <p>listen</p>
              <div>
                <CustomLink
                  href={
                    "https://open.spotify.com/artist/1ZFLYus27fzqEV3d6RBrxo"
                  }
                  name={"spotify"}
                />
                <CustomLink
                  href={"https://soundcloud.com/juanhansen"}
                  name={"soundcloud"}
                />
                <CustomLink
                  href={
                    "https://music.apple.com/us/artist/juan-hansen/1286403774"
                  }
                  name={"applemusic"}
                />
                <CustomLink
                  href={
                    "https://www.beatport.com/artist/juan-hansen/642629?srsltid=AfmBOorQvY5nh2UVVb6jCCCmz1zfee5Tusuo8zjgkXAf-gezGU7SNJcb"
                  }
                  name={"beatport"}
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2">
              <p>get in touch</p>
              <div className="flex flex-col gap-1">
                <Link href={"mailto:jon@liaisonartists.com"}>
                  <div className=" text-black bg-slate-50 px-2">
                    <p className="inline">North & Central America</p>
                  </div>
                </Link>
                <Link href={"mailto:mcia@ban-mww.com"}>
                  <div className=" text-black bg-slate-50 px-2">
                    <p className="inline">South America</p>
                  </div>
                </Link>
                <Link href={"mailto:dalila@ntrlagency.com"}>
                  <div className=" text-black bg-slate-50 px-2">
                    <p className="inline">Rest of the World</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-10">
              <p>buenos aires, argentina</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* contenedor que da sombra al resto de la pagina */}
      <motion.div
        className=" absolute right-0 bg-black bg-opacity-70 top-0 w-screen h-full z-40 flex justify-end overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );

  return (
    <>
      {/* Menu: esta afuera para que tenga un contenedor padre con un height determinado: Layout: h-screen */}
      <AnimatePresence>{open && <Menu />} </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bg-gradient-to-t from-transparent to-black top-0 flex justify-between items-center px-10 py-5 z-30 w-full"
      >
        <LogoIcon width={"120px"} height={"50px"} />
        <button onClick={() => isOpen(!open)}>menu </button>
      </motion.div>
    </>
  );
}
