import { motion } from "framer-motion";
import fallingdownImage from "@/public/images/8kays.jpg";
import innelea from "@/public/images/innelea.jpg";
import beirut from "@/public/images/beirut.jpg";

import Image from "next/image";

export const Releases = ({ setCurrentRelease, setHoverAnimation }) => {
  // Valor utilizado para que haya un delay despues de la animacion "loading"
  const CONTENT_PAGE_DELAY_ANIMATION = 0;

  //   utilizo itemClassname y containerClassname para manejar la posicion individual a mi gusto dentro de la grilla
  const releases = [
    {
      name: "falling down",
      description:
        "Latest EP on Watergate Records alongside 8 Kays. With remixes from Colyn & Chris Avantgarde.",
      imageSrc: fallingdownImage,
      itemClassname: "relative h-[370px] w-[450px]",
      containerClassname: "justify-start pl-20",
    },
    {
      name: "innelea",
      description:
        "Latest EP on Watergate Records alongside 8 Kays. With remixes from Colyn & Chris Avantgarde.",
      imageSrc: innelea,
      itemClassname: "relative h-[550px] w-[350px]",
      containerClassname: "justify-end pr-20",
    },
    {
      name: "beirut set",
      description:
        "Latest EP on Watergate Records alongside 8 Kays. With remixes from Colyn & Chris Avantgarde.",
      imageSrc: beirut,
      itemClassname: "relative h-[600px] w-96",
      containerClassname: "justify-start pl-20 mt-24",
    },
  ];

  const handleHover = (release) => {
    setCurrentRelease(release);
    setHoverAnimation(true);
  };

  return (
    <div className="grid grid-cols-2">
      {releases.map((release) => (
        <div
          className={` w-full flex items-center ${release.containerClassname}`}
        >
          <motion.div
            className={release.itemClassname}
            style={{}}
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
              fill
              objectFit="cover"
              src={release.imageSrc}
              alt="release cover"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};
