import Image from "next/image";
import React from "react";

interface BlogBoxProps {
  img: string;
  head: string;
  des: string;
  link: string;
}

const WritingsBox: React.FC<BlogBoxProps> = ({ img, head, des, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
    >
      <div className="relative w-full md:w-[30%] h-[160px] overflow-hidden rounded-md">
        <Image
          src={img}
          alt={head}
          width={300}
          height={300}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-[70%]">
        <h1 className="text-xl md:text-lg font-semibold text-gray-900 dark:text-gray-100">
          {head}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {des}
        </p>
      </div>
    </a>
  );
};

export default WritingsBox;
