import AboutSection from "../components/sections/About";
import Events from "../components/Events/Events";
import Team from "../components/sections/team/Team";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-10">
      <AboutSection />
      <Events />
      <Team />
    </main>
  );
}