import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu(){

    return (

        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
               <div className=" absolute left-0 -top-[70px] text-left -z-10">
                <Image src={'/salad.png'} width={200} height={200}  alt={'salad'} />
                </div> 
               <div className="absolute -top-[50px] right-0 -z-10">
                <Image src={'/tacos.png'} width={200} height={200} alt={'tacos'} />
                </div> 
            </div>
            <div className ="text-center mb-8">
                 <SectionHeaders 
                 subHeader={'check out'}
                 mainHeader={"Menu"}
                 />
            </div>

            <div className="grid grid-cols-3 gap-4">

                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
               
            </div>
       
        </section>
    )
}