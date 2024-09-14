import Link from "next/link";
import { TitlePage } from "@/components/common/TitlePage";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLoad } from "@/components/context/LoadContext";
import Footer from "@/components/common/Footer";

export default function TourPage() {
  const { isLoadFinish } = useLoad();

  const dates = [
    {
      day: 23,
      month: "aug",
      year: 2024,
      place: "Set Underground",
      city: "San Francisco, CA",
      country: "us",
      ticket_link: "/",
    },
    {
      day: 24,
      month: "aug",
      year: 2024,
      place: "Set Underground",
      city: "Los Angeles, CA",
      country: "us",
      ticket_link: "/",
    },
    {
      day: 7,
      month: "sept",
      year: 2024,
      place: "Hilaria",
      city: "Huechuraba,",
      country: "chi",
      ticket_link: "/",
    },
    {
      day: 14,
      month: "sept",
      year: 2024,
      place: "The Hall Miami",
      city: "Miami, flo",
      country: "US",
      ticket_link: "/",
    },
    {
      day: 25,
      month: "OCT",
      year: 2024,
      place: "Le Cirque Rouge",
      city: "Marrakesh",
      country: "ma",
      ticket_link: "/",
    },
  ];

  return (
    <>
      <div className="py-32 px-10 h-screen" data-scroll-section>
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
                delay: (isLoadFinish ? 0 : 3) + index * 0.1,
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
      <Footer></Footer>
    </>
  );
}
