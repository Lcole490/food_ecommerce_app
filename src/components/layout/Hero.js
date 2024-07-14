
import Image from "next/image";
import Right from "../../components/icons/Right";
import Info from "../icons/Info";



export default function Hero(){

    return(
        <section className="hero mt-4">
            <div className ="py-12">
            <h1 className="text-4xl font-semibold">The Office Hotspot <br /> for quick <br />
            <span className="text-primary">Delicious Meals</span>
            </h1>
            <p className="my-6 text-gray-500 text-sm"> The Nook is your solution for a quick fix</p>
            <div className="flex gap-4 text-sm">
                <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full ">Order Now <Right /> </button>
                <button className="flex gap-2 py-2 text-gray-600 font-semibold">Learn More <Info /></button>
            </div>
            </div>
            

        <div className="relative">
            <Image src={'/breakfast.png'} layout={'fill'}
            objectFit={'contain'} alt={'coffee'} />
        </div>
        </section>
    )

}