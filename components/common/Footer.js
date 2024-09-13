import Link from "next/link";
import { LogoIcon } from "../icons/Logo";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      className="text-white h-64 px-10 bg-gradient-to-b from-[#1a1a1a] to-black "
      data-scroll-section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="uppercase text-xs text-[#666]">
          <LogoIcon width={200} height={60} />
          <p>dj / producer</p>
          <p>buenos aires, argentina</p>
        </div>

        <div className="flex flex-col">
          <Link href={"/tour"}>tour dates</Link>
          <Link href={"/tour"}>tour dates</Link>
          <Link href={"/tour"}>tour dates</Link>
        </div>

        <div className="flex flex-col">
          <Link href={"/tour"}>social media</Link>
          <div></div>
        </div>

        <div className="flex flex-col">
          <p>booking</p>
          <div className="grid grid-cols-1">
            <Link href={"mailto:asd@gmail.com"}>south america</Link>
            <Link href={"mailto:asd@gmail.com"}>south america</Link>
            <Link href={"mailto:asd@gmail.com"}>south america</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
