

export default function MenuItem(){



    return(

        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <div className="text-center">
            <img src="/sandwich.png" className="max-h-auto max-h-24 block mx-auto" alt="food" />
        </div>
        
        <h4 className="font-semibold my-3">Food Item Name</h4>
        <p className="text-gray-500 text-sm">
            This is a description of the menu item
        </p>
        <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                Add To Cart $10
        </button>
    </div>
    )
}