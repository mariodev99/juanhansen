import Image from "next/image";
import juanhansen_bg from "@/public/images/juanhansen.jpg";
import Link from "next/link";
import { TitlePage } from "@/components/common/TitlePage";

export default function Tour(params) {
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
        <div className=" grid grid-cols-6 uppercase text-xs text-[#888]">
          <div>date</div>
          <div>place</div>
          <div>city</div>
          <div>country</div>
        </div>
        {dates.map((item) => (
          <div className="mt-5 grid grid-cols-6 uppercase font-medium text-xl">
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
          </div>
        ))}
      </div>
    </div>
  );
}
