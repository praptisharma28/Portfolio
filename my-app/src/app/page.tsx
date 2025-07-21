import WorkExperience from "@/components/WorkExperience";
import Intro from "../components/Intro";
import Writings from "@/components/Writings";
import MyProjects from "@/components/MyProjects";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
      <Intro />
      <div className="flex flex-col gap-[32px] justify-center w-full max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold gap-[32px] mt-12">
          My Work Experience
        </h1>
      <WorkExperience />
      </div>
      <div>
        <h1 className="text-2xl font-bold gap-[32px] mt-12">
          My Projects
        </h1>
        <MyProjects />
      </div>
      <div>
        <div className="flex flex-col gap-[32px] justify-center w-full max-w-4xl mx-auto mt-12">
      <Writings />
      </div>
    </div>
  </div>
  );
}
