import Footer from "@/components/common/Footer";
import {
  InstagramIcon,
  YoutubeIcon,
  SpotifyIcon,
  BeatportIcon,
  AppleIcon,
  SoundcloudIcon,
} from "@/components/icons/Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLoad } from "@/components/context/LoadContext";

export default function BookingPage() {
  const { isLoadFinish } = useLoad();

  const bookingInformation = [
    {
      continent: "North & Central America",
      email: "jon@liaisonartists.com",
    },

    {
      continent: "South America",
      email: "mcia@ban-mww.com",
    },
    {
      continent: "Rest of the World",
      email: "dalila@ntrlagency.com",
    },
  ];

  const socialMedia = [
    {
      link: "https://soundcloud.com/juanhansen",
      icon: <SoundcloudIcon width={36} height={36} />,
    },
    {
      link: "https://www.youtube.com/channel/UCowMXbr_PSnh6-Peva5Sxfg",
      icon: <YoutubeIcon width={36} height={36} />,
    },
    {
      link: "https://open.spotify.com/artist/1ZFLYus27fzqEV3d6RBrxo",
      icon: <SpotifyIcon width={36} height={36} />,
    },
    {
      link: "https://music.apple.com/us/artist/juan-hansen/1286403774",
      icon: <AppleIcon width={36} height={36} />,
    },
    {
      link: "https://www.beatport.com/artist/juan-hansen/642629?srsltid=AfmBOorQvY5nh2UVVb6jCCCmz1zfee5Tusuo8zjgkXAf-gezGU7SNJcb",
      icon: <BeatportIcon width={36} height={36} />,
    },
    {
      link: "https://www.instagram.com/juan_hansen",
      icon: <InstagramIcon width={36} height={36} />,
    },
  ];

  return (
    <div>
      <div
        className="py-36 px-10 flex flex-col gap-16 text-center justify-center items-center"
        data-scroll-section
      >
        <motion.div className="flex flex-col gap-6">
          {bookingInformation.map((information, index) => (
            <motion.div
              key={information.email}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: (isLoadFinish ? 0 : 3.4) + index * 0.1,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <div className="text-xl md:text-2xl font-medium">
                {information.continent}
              </div>
              <Link
                href={`mailto:${information.email}`}
                target="_blank"
                className="text-2xl md:text-3xl font-semibold underline"
              >
                {information.email}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-3 items-center flex-wrap justify-center">
          {socialMedia.map(({ icon, link }, index) => (
            <Link key={link} href={link} target="_blank">
              <motion.div
                className="bg-black p-2 rounded-full shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (isLoadFinish ? 0 : 3.5) + index * 0.1,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                whileHover={{ y: -5 }}
              >
                {icon}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
