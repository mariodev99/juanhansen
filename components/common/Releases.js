import { motion } from "framer-motion";
import fallingdownImage from "@/public/images/8kays.jpg";
import innellea from "@/public/images/innellea.jpg";
import beirut from "@/public/images/beirut.jpg";

import Image from "next/image";

export const Releases = ({ setCurrentRelease, setHoverAnimation }) => {
  // Valor utilizado para que haya un delay despues de la animacion "loading"
  const CONTENT_PAGE_DELAY_ANIMATION = 0;

  //   utilizo imageClassname y containerClassname para manejar la posicion individual a mi gusto dentro de la grilla
  const releases = [
    {
      name: "falling down",
      description:
        "Latest EP on Watergate Records alongside 8Kays. With remixes from Colyn & Chris Avantgarde.",
      imageSrc: fallingdownImage,
      imageClassname: "relative h-[370px] w-full md:w-[450px] overflow-hidden",
      containerClassname: "justify-start pl-0 md:pl-20",
    },
    {
      name: "Burning Out",
      description: "New single in collaboration with Innellea is out now.",
      imageSrc: innellea,
      imageClassname:
        "relative h-[370px] md:h-[550px] w-full md:w-[350px] overflow-hidden",
      containerClassname: "justify-end pr-0 md:pr-20",
    },
    {
      name: "beirut set ",
      description: "Full Live set recording at AHM club in Beirut, Lebanon",
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
      {releases.map((release) => (
        <div
          className={` w-full flex flex-col md:flex-row items-start md:items-center  ${release.containerClassname}`}
        >
          <motion.div
            className={release.imageClassname}
            style={{ cursor: "pointer" }}
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: CONTENT_PAGE_DELAY_ANIMATION,
            }}
            onHoverStart={() => handleHover(release)}
            onHoverEnd={() => setHoverAnimation(false)}
          >
            <Image
              className="grayscale hover:grayscale-0 hover:scale-105 duration-500"
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
