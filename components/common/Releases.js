import { motion } from "framer-motion";
import fallingdownImage from "@/public/images/8kays.jpg";
import innellea from "@/public/images/innellea.jpg";
import beirut from "@/public/images/beirut.jpg";

import Image from "next/image";
import { useLoad } from "../context/LoadContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Releases = ({ setCurrentRelease, setHoverAnimation }) => {
  // Valor utilizado para que haya un delay despues de la animacion "loading"
  const { isLoadFinish } = useLoad();
  const router = useRouter();

  //   utilizo imageClassname y containerClassname para manejar la posicion individual a mi gusto dentro de la grilla
  const releases = [
    {
      name: "falling down",
      description:
        "Latest EP on Watergate Records alongside 8Kays. With remixes from Colyn & Chris Avantgarde.",
      url: "https://www.youtube.com/watch?v=YDUyKWMZwfU&ab_channel=WatergateClub%26Records",
      imageSrc: fallingdownImage,
      imageClassname: "relative h-[370px] w-full md:w-[450px] overflow-hidden",
      containerClassname: "justify-start pl-0 md:pl-20",
    },
    {
      name: "Burning Out",
      description: "New single in collaboration with Innellea is out now.",
      url: "https://www.youtube.com/watch?v=53cnFnxghGI&ab_channel=Innellea",
      imageSrc: innellea,
      imageClassname:
        "relative h-[370px] md:h-[550px] w-full md:w-[350px] overflow-hidden",
      containerClassname: "justify-end pr-0 md:pr-20",
    },
    {
      name: "beirut set ",
      description: "Full Live set recording at AHM club in Beirut, Lebanon",
      url: "https://www.youtube.com/watch?v=o8My0goEAWY&t=1309s&ab_channel=LATEKNIGHTS",
      imageSrc: beirut,
      imageClassname: "relative h-[370px] md:h-[600px] w-96 overflow-hidden",
      containerClassname:
        "justify-start pl-0 md:pl-20 mt-0 md:mt-24 overflow-hidden",
    },
  ];

  const handleHover = (release) => {
    setCurrentRelease(release);
    setHoverAnimation(true);
  };

  const handleClick = (href) => {
    router.push(href);
  };

  const releaseVariants = {
    hidden: { y: 150 },
    visible: {
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
        delay: isLoadFinish ? 0 : 3.5,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
      {releases.map((release) => (
        <div
          className={` w-full flex flex-col md:flex-row items-start md:items-center  ${release.containerClassname}`}
        >
          <motion.div
            className={release.imageClassname}
            style={{ cursor: "pointer" }}
            variants={releaseVariants}
            initial={"hidden"}
            animate={"visible"}
            onHoverStart={() => handleHover(release)}
            onHoverEnd={() => setHoverAnimation(false)}
            onClick={() => handleClick(release.url)}
          >
            <Image
              className="grayscale-0 md:grayscale hover:grayscale-0 hover:scale-105 duration-500"
              fill
              objectFit="cover"
              src={release.imageSrc}
              alt="release cover"
            />
          </motion.div>
          <div className="mt-2 block md:hidden">
            <h3 className="text-xl font-semibold uppercase">{release.name}</h3>
            <p className="text-md">{release.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
