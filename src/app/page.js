
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
    
      <Hero />
      <HomeMenu />

      <section className="text-center my-16">
        <SectionHeaders 
            subHeader={'Our Story'}
            mainHeader={'About Us'}
        />

        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex-col gap-4"> 
        
        <p>  This is paragraph one</p>

        <p> This is paragraph two</p>

        <p> This is paragraph three</p>
        </div>
      </section>

      <section className="text-center my-8"> 
        <SectionHeaders 
            subHeader={'For More Info...'}
            mainHeader={'Contact Us'}
        />

        <div className="mt-8"> 

          <a className="text-4xl underline text-gray-500" href="tel:+16782386734"> (678) 238-6734 </a>

        </div>
        
      </section>

     
    </>
  )
}
