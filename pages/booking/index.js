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

export default function BookingPage() {
  const bookingInformation = [
    {
      continent: "North & Central America",
      email: "jon@liaisonartists.com",
    },

    {
      continent: "North & Central America",
      email: "mcia@ban-mww.com",
    },
    {
      continent: "Rest of the World",
      email: "dalila@ntrlagency.com",
    },
  ];

  return (
    <div>
      <div
        className="py-36 px-10 flex flex-col gap-16 text-center justify-center items-center"
        data-scroll-section
      >
        <div className="flex flex-col gap-4">
          {bookingInformation.map((information) => (
            <div>
              <div className="text-2xl font-medium">
                {information.continent}
              </div>
              <Link
                href={`mailto:${information.email}`}
                target="_blank"
                className="text-2xl font-semibold underline"
              >
                {information.email}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <Link
            className="bg-black p-2 rounded-full"
            href={"https://open.spotify.com/artist/1ZFLYus27fzqEV3d6RBrxo"}
            target="_blank"
          >
            <InstagramIcon width={36} height={36} />
          </Link>

          <Link
            className="bg-black p-2 rounded-full"
            href="https://www.youtube.com/channel/UCowMXbr_PSnh6-Peva5Sxfg"
            target="_blank"
          >
            <YoutubeIcon width={36} height={36} />
          </Link>
          <Link
            className="bg-black p-2 rounded-full"
            href={"https://open.spotify.com/artist/1ZFLYus27fzqEV3d6RBrxo"}
            target="_blank"
          >
            <SpotifyIcon width={36} height={36} />
          </Link>
          <Link
            className="bg-black p-2 rounded-full"
            href={"https://soundcloud.com/juanhansen"}
            target="_blank"
          >
            <SoundcloudIcon width={36} height={36} />
          </Link>

          <Link
            className="bg-black p-2 rounded-full"
            href={"https://music.apple.com/us/artist/juan-hansen/1286403774"}
            target="_blank"
          >
            <AppleIcon width={36} height={36} />
          </Link>
          <Link
            className="bg-black p-2 rounded-full"
            href={
              "https://www.beatport.com/artist/juan-hansen/642629?srsltid=AfmBOorQvY5nh2UVVb6jCCCmz1zfee5Tusuo8zjgkXAf-gezGU7SNJcb"
            }
            target="_blank"
          >
            <BeatportIcon width={36} height={36} />
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
