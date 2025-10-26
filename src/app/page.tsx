
import Menu from "@/components/Menu";
import MouseFollowerWrapper from "@/components/MouseFollowerWrapper";
import Hero from "@/sections/Hero"

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quaerat ea sunt voluptatem ipsa debitis veritatis vel adipisci omnis amet magni voluptatum, quis consequuntur velit est perspiciatis expedita pariatur repudiandae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet explicabo minus alias accusamus dignissimos exercitationem eius odio, magnam quam voluptatum aut veniam ea, quasi illo delectus quae, similique sunt!
        </main>
        <footer>

        </footer>
        <h1>Home</h1>
        <div className="size-[200px] bg-stone-500"></div>
        <div className="size-64 bg-amber-600"></div>

      
      </MouseFollowerWrapper>
      
  );
}
