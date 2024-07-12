import Image from "next/image";


export default function Hero(){

    return(
        <section className="grid grid-cols-2">
            <div>
            <h1 className="text-4xl font-semibold">The Office Hotspot for quick meals</h1>
            <p className="my-4 text-gray-500"> The Nook is your solution for a quick fix</p>
            <div className="flex gap-4">
                <button className="bg-primary text-white px-8 py-2 rounded-full">Order Now</button>
                <button>Learn More</button>
            </div>
            </div>
            

        <div>
            <Image src={'/coffee.png'} layout={'fill'}
            objectFit={'contain'} alt={'coffee'} />
        </div>
        </section>
    )

}