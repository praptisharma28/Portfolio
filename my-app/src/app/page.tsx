"use client";

import WorkExperience from "@/components/WorkExperience";
import Intro from "../components/Intro";
import Writings from "@/components/Writings";
import MyProjects from "@/components/MyProjects";
import { projects } from "@/components/ProjectsSection";
import { useState } from "react";
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";
import Skills from "@/components/Skills";

export default function Home() {
  const showAllVis = projects.length > 4;
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Intro />

        <div className="w-130 max-w-4xl mx-12 mt-12">
          <h3 className="text-2xl font-bold mt-4 mb-5">
            My work experience
          </h3>
          <WorkExperience />
        </div>
        <div className="flex flex-col gap-[32px] w-full max-w-4xl">
          <Skills />
        </div>

        <div className="w-130 max-w-4xl mx-12 mt-12">
          <h3 className="text-2xl font-bold mb-6">My Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {visibleProjects.map((project, index) => (
              <MyProjects key={index} project={project} />
            ))}
          </div>
          
          {showAllVis && (
            <button
              className="mt-6 self-center text-sm font-medium text-gray-600 hover:text-black transition flex items-center gap-1 mx-auto"
              onClick={() => setShowAllProjects((prev) => !prev)}
            >
              <span className="animate-pulse">
                {showAllProjects ? <MdKeyboardDoubleArrowUp /> : <MdKeyboardDoubleArrowDown />}
              </span>
              {showAllProjects ? "Show less" : "Show all"}
            </button>
          )}
        </div>

        <div className="flex flex-col gap-[32px] justify-center w-full max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-bold">My Writings</h3>
          <Writings />
        </div>
      </main>
    </div>
  );
}