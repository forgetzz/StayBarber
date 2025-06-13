"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffet() {
  const words = [
    {
      text: "Temukan Gaya",
    },
    {
      text: "Rambut anda",
    },
    {
      text: "Dengan Ai",
    },
    {
      text: "Kami",
    },
    {
      text: "Staybarbershop.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center   ">
      <TypewriterEffectSmooth words={words} />
    
    </div>
  );
}
