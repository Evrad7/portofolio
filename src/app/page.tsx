
import Menu from "@/components/Menu";
import MouseFollowerWrapper from "@/components/MouseFollowerWrapper";
import Certificates from "@/sections/Certificates";
import Hero from "@/sections/Hero"
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <MouseFollowerWrapper>
        <header className="relative">
          <Menu.Root>
                  <Menu.Brand/>
                  <Menu.Toggle/>
                <Menu.Content/>
          </Menu.Root> 
          <Hero/>
        </header>
        <main>
          <Projects/>
          <Certificates/> 
          <Skills/>
        </main>
        <footer>

        </footer>
        <h1>Home</h1>
        <div className="size-[200px] bg-stone-500"></div>
        <div className="size-64 bg-amber-600"></div>

      
      </MouseFollowerWrapper>
      
  );
}
