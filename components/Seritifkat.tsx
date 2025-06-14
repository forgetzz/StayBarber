"use client";

import { Carousel } from "./ui/carousel";
export function Sertifikat() {
  const slideData = [
    {
      src: "/images/ser.jpg",
    },
    {
      src: "/images/ser.jpg",
    },
    {
      src: "/images/ser.jpg",
    },
    {
      src: "/images/ser.jpg",
    },
    {
      src: "/images/ser.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
