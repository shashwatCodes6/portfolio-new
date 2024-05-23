import Projects from "@/components/Projects";
import NavBar from "@/components/NavBar";
import Intro from "@/components/Intro";
import Acheivements from "@/components/Achievements";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Projects />
      <Skills />
      <Acheivements />
    </div>
  );
}
