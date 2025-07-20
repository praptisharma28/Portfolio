import Intro from "../components/Intro";
import { Particles } from "../components/magicui/particles";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Particles />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
      <Intro />
    </div>
  );
}
