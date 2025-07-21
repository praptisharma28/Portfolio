"use client";

import React from "react";
import { Element } from "react-scroll";
import ProjectsConfig from "./ProjectsConfig";

interface ProjectConfig {
  title: string;
  previewImage: string;
  description: string;
  githubLink?: string;
  liveDemoLink?: string;
  downloads?: string;
}

const MyProjects: React.FC = () => {
  const truncate = (str: string, len: number): string => {
    return str.length >= len ? str.substr(0, len) + "..." : str;
  };

  return (
    <Element name="myProjects">
      <div className="mb-6 sm:mb-44 py-5">
        <span className="flex text-gray-300 text-xl sm:text-2xl justify-center sm:justify-start">
          My <span className="font-semibold">&nbsp;Projects</span>
        </span>
        <div className="flex flex-col space-y-20 py-10">
          {(ProjectsConfig as ProjectConfig[]).map((config, idx) => (
            <div
              key={idx}
              className="h-auto w-full text-white rounded-md flex flex-col lg:flex-row backdrop-filter backdrop-blur-md bg-gray-900 p-4 sm:p-10 bg-opacity-80 transform transition-all hover:scale-105 sm:hover:scale-110 cursor-pointer"
            >
              <div className="w-full rounded-2xl">
                <img
                  src={config.previewImage}
                  className="w-full h-full rounded object-cover shadow-2xl transform transition-all hover:scale-110"
                  alt={`${config.title} Preview`}
                />
              </div>
              <div className="w-full h-full flex flex-col pt-6 md:p-8">
                <span className="mb-1 font-bold text-lg md:text-xl">
                  {config.title}
                </span>

                {config.downloads && (
                  <div className="mt-1">
                    <img src={config.downloads} alt="Downloads" />
                  </div>
                )}

                <div className="mt-2 mb-4">
                  <p className="text-xs md:text-sm lg:text-md leading-relaxed">
                    {config.description}
                  </p>
                </div>

                {config.liveDemoLink ? (
                  <div className="flex justify-between mt-auto">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={config.liveDemoLink}
                      className="font-bold text-blue-400"
                    >
                      Live Demo
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={config.githubLink}
                      className="font-bold text-gray-400"
                    >
                      Source Code
                    </a>
                  </div>
                ) : (
                  <div className="mt-auto">
                    <span className="text-sm">Still in development ...</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default MyProjects;
