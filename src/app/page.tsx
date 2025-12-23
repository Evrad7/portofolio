
import AppWrapper from "@/components/AppWrapper";
import Menu from "@/components/Menu";
import UpdateFollowerWrapper from "@/components/UpdateFollowerWrapper";
import Certificates from "@/sections/Certificates";
import Contacts from "@/sections/Contacts";
import ExperiencesAndFormations from "@/sections/ExperiencesAndFormations";
import Hero from "@/sections/Hero"
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  const currentYear = new Date().getFullYear()
  return (
    <AppWrapper>
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
        <footer className="flex justify-end px-5 lg:px-10 bg-gray">
          <span className="text-sm md:text-base">Copyright &copy;Evrad7 {currentYear} </span>
        </footer>
      </AppWrapper>
      
  );
}
