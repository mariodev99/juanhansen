import Link from "next/link";
import { TitlePage } from "@/components/common/TitlePage";
import { motion } from "framer-motion";

export default function TourPage() {
  // Valor utilizado para que haya un delay despues de la animacion "loading"
  const CONTENT_PAGE_DELAY_ANIMATION = 0;

  const dates = [
    {
      day: 11,
      month: "jun",
      place: "metropolitano rosario",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
    {
      day: 15,
      month: "jun",
      place: "SAINTWHOO M&A FESTIVAL",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
    {
      day: 15,
      month: "jun",
      place: "SAINTWHOO M&A FESTIVAL",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
    {
      day: 15,
      month: "jun",
      place: "SAINTWHOO M&A FESTIVAL",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
    {
      day: 11,
      month: "jun",
      place: "metropolitano rosario",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
    {
      day: 11,
      month: "jun",
      place: "metropolitano rosario",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
  ];

  return (
    <div className="py-32 px-10">
      <TitlePage text={"tour"}></TitlePage>
      <div className="mt-10">
        <motion.div
          className=" grid grid-cols-6 uppercase text-xs text-[#888]"
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: CONTENT_PAGE_DELAY_ANIMATION,
          }}
        >
          <div>date</div>
          <div>place</div>
          <div>city</div>
          <div>country</div>
        </motion.div>
        {dates.map((item, index) => (
          <motion.div
            className="mt-5 grid grid-cols-6 uppercase font-medium text-xl"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: CONTENT_PAGE_DELAY_ANIMATION + index * 0.1,
            }}
          >
            <div className="flex gap-4">
              <p>{item.day}</p> <p>{item.month}</p>
            </div>
            <div>{item.place}</div>
            <div>{item.city}</div>
            <div>{item.country}</div>
            <div className="">
              <Link
                className="bg-white text-black px-4 py-2 font-semibold"
                href={item.ticket_link}
                target="_blank"
              >
                tickets
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
