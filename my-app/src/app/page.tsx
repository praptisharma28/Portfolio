import WorkExperience from "@/components/WorkExperience";
import Intro from "../components/Intro";
import Writings from "@/components/Writings";
import MyProjects from "@/components/MyProjects";
import { projects } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Intro />

        <div className="flex flex-col gap-[32px] justify-center w-full max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold gap-[32px] mt-12">
            My Work Experience
          </h1>
          <WorkExperience />
        </div>

        <div className="w-full max-w-6xl mx-auto mt-12">
          <h1 className="text-2xl font-bold mb-6">My Projects</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <MyProjects key={index} project={project} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[32px] justify-center w-full max-w-4xl mx-auto mt-12">
          <h1 className="text-2xl font-bold">My Writings</h1>
          <Writings />
        </div>
      </main>
    </div>
  );
}