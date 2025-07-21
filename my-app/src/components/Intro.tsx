"use client";

import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const Intro = () => {
  const words = [
    {
      text: "gm",
    },
    {
      text: "🌸,",
    },
    {
      text: "I’m",
    },
    {
      text: "Prapti!",
      className: "text-pink-400 dark:text-pink-800 font-bold",
    },
  ];

  return (
    <div className="flex gap-6 items-center bg-white dark:bg-black p-6 rounded-2xl shadow-lg">
      <div className="flex flex-col gap-4 w-9/12">
        <TypewriterEffectSmooth words={words} />

        <p className="text-base text-gray-700 dark:text-gray-300">
          Fullstack Engineer with 5+ years in coding. Open source and Web3 is my current niche.
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300">
          Pronouns – she/her
        </p>
      </div>
      <div className="w-3/12">
        <Image
          src="/images/profile.jpeg"
          alt="Prapti's image"
          width={200}
          height={200}
          className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-md w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Intro;
