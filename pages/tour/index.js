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
      year: 2024,
      place: "metropolitano rosario",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
    {
      day: 15,
      month: "jun",
      year: 2024,
      place: "SAINTWHOO M&A FESTIVAL",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
    {
      day: 11,
      month: "jun",
      year: 2024,
      place: "metropolitano rosario",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
    {
      day: 11,
      month: "jun",
      year: 2024,
      place: "metropolitano rosario",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
    {
      day: 11,
      month: "jun",
      year: 2024,
      place: "metropolitano rosario",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
    {
      day: 11,
      month: "jun",
      year: 2024,
      place: "metropolitano rosario",
      city: "rosario",
      country: "arg",
      ticket_link: "/",
    },
  ];

  return (
    <div className="py-32 px-10" data-scroll-section>
      <TitlePage text={"tour"}></TitlePage>
      <div className="mt-10 w-full lg:w-4/5">
        {dates.map((item, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 py-8 uppercase font-regular text-sm md:text-xl items-center border-t-2 border-[#272727] "
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
            <div className="">
              <p>
                {item.day} {item.month} {item.year}
              </p>
            </div>
            <div className="font-medium my-2">
              {item.city} ({item.country})
            </div>
            <div className="">{item.place}</div>
            <div className="pl-0 md:l-6 mt-2 flex w-full md:w-auto justify-center md:justify-end">
              <Link
                className="flex justify-center w-full md:w-auto border border-[#666] text-white px-8 py-4 hover:bg-white hover:text-black hover:border-transparent"
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
