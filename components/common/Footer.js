import Link from "next/link";
import {
  AppleIcon,
  BeatportIcon,
  InstagramIcon,
  LogoIcon,
  SoundcloudIcon,
  SpotifyIcon,
  YoutubeIcon,
} from "../icons/Logo";
import { motion } from "framer-motion";

export default function Footer() {
  const Wrapper = ({ children }) => (
    <div className="flex flex-col gap-2 pt-6 uppercase text-white text-lg font-medium">
      {children}
    </div>
  );

  return (
    <motion.div
      className="text-white px-10 py-20 bg-gradient-to-b  from-[#1a1a1a] via-black to-black "
      data-scroll-section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="uppercase text-sm text-[#979797] ">
          <div className="h-14 ">
            <LogoIcon width={200} height={"100%"} />
          </div>
          <p>dj / producer</p>
          <p>buenos aires, argentina</p>
        </div>

        <Wrapper>
          <Link className="font-semibold" href={"/tour"}>
            tour dates
          </Link>
          <Link className="font-semibold" href={"/about"}>
            about
          </Link>
          <Link className="font-semibold" href={"/releases"}>
            releases
          </Link>
        </Wrapper>

        <Wrapper>
          <p className="font-semibold">listen & social media</p>
          <div className="flex gap-2 items-center">
            <Link
              href={"https://www.instagram.com/juan_hansen"}
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link href={"https://soundcloud.com/juanhansen"} target="_blank">
              <SoundcloudIcon />
            </Link>
            <Link
              href={"https://open.spotify.com/artist/1ZFLYus27fzqEV3d6RBrxo"}
              target="_blank"
            >
              <SpotifyIcon />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCowMXbr_PSnh6-Peva5Sxfg"
              target="_blank"
            >
              <YoutubeIcon />
            </Link>
            <Link
              href={"https://music.apple.com/us/artist/juan-hansen/1286403774"}
              target="_blank"
            >
              <AppleIcon />
            </Link>
            <Link
              href={
                "https://www.beatport.com/artist/juan-hansen/642629?srsltid=AfmBOorQvY5nh2UVVb6jCCCmz1zfee5Tusuo8zjgkXAf-gezGU7SNJcb"
              }
              target="_blank"
            >
              <BeatportIcon />
            </Link>
          </div>
        </Wrapper>

        <Wrapper>
          <p className="font-semibold">booking</p>
          <div className="grid grid-cols-1 text-base">
            <Link href={"mailto:jon@liaisonartists.com"}>
              North & Central America
            </Link>
            <Link href={"mailto:mcia@ban-mww.com"}>south america</Link>
            <Link href={"mailto:dalila@ntrlagency.com"}>Rest of the World</Link>
          </div>
        </Wrapper>
      </div>
      <p className="text-[#979797] mt-5">
        © Copyright 2023. All rights reserved by Juan Hansen
      </p>
    </motion.div>
  );
}
