import Image from "next/image";
import MenuItem from "../menu/MenuItem";

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
                 <h3 className ="uppercase text-gray-500 font-semibold leading-4"> Check Out</h3>
                <h2 className="text-primary font-bold text-4xl italic"> Menu</h2>
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