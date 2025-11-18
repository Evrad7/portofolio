
import Menu from "@/components/Menu";
import MouseFollowerWrapper from "@/components/MouseFollowerWrapper";
import UpdateFollowerWrapper from "@/components/UpdateFollowerWrapper";
import Certificates from "@/sections/Certificates";
import Contacts from "@/sections/Contacts";
import ExperiencesAndFormations from "@/sections/ExperiencesAndFormations";
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
          <UpdateFollowerWrapper mouseOptions={{backgroundColor: "black",  backgroundElement: null, scale:2, followSpeed: .3}}>
             <Projects/>
            <Certificates/> 

            {/* <div className=" relative  before:absolute before:inset-0  before:opacity-15 md:before:opacity-25 before:bg-[url(/big-shadow.png)] before:bg-size-[500%_100%] before:bg-[0%_20%] before:bg-no-repeat"> */}
            <Skills/>
            {/* </div> */}
         
            <ExperiencesAndFormations/>
            <Contacts/>
          </UpdateFollowerWrapper>

         

        </main>
        <footer>

        </footer>

      
      </MouseFollowerWrapper>
      
  );
}
