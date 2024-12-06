import { assets } from "../assets/assets"



const BuyCredit = () => {
  return (
    <div className="w-[90%] mx-auto">
        <div className="md:w-2/4 mx-auto">
            <h2 className=" border md:uppercase w-[140px] md:w-[160px] text-[15px] mx-auto text-center py-1 rounded-3xl  border-stone-400 text-stone-500">Our plans</h2>
            <h1 className="text-center mt-6 text-2xl md:text-4xl">Choose the plan</h1>
        </div>
        <div className="flex  md:flex-row gap-6 flex-col md:justify-evenly md:items-center mt-10 md:mt-20">
            <div className="bg-white border pt-12 pb-10 rounded-md px-8  md:w-[25%]  flex flex-col gap-6 shadow-md">
                <div className="flex flex-col gap-1">
                <img src={assets.logo} className="size-8" alt="" />
                <h1 className="text-xl">Basic</h1>
                <p className=" text-[15px] text-stone-600">Best for personal use.</p>
                </div>
                <p className="text-stone-600"><span className=" text-2xl md:text-4xl text-black">$10 </span>/100 credits</p>
                <button className=" bg-primary text-white py-2 rounded-md hover:scale-95 transition-all">Get started</button>
            </div>
            <div className="bg-white border pt-12 pb-10 rounded-md px-8  md:w-[25%]  flex flex-col gap-6 shadow-md">
                <div className="flex flex-col gap-1">
                <img src={assets.logo} className="size-8" alt="" />
                <h1 className="text-xl">Basic</h1>
                <p className=" text-[15px] text-stone-600">Best for personal use.</p>
                </div>
                <p className="text-stone-600"><span className=" text-2xl md:text-4xl text-black">$10 </span>/100 credits</p>
                <button className=" bg-primary text-white py-2 rounded-md hover:scale-95 transition-all">Get started</button>
            </div>
            <div className="bg-white border pt-12 pb-10 rounded-md px-8  md:w-[25%]  flex flex-col gap-6 shadow-md">
                <div className="flex flex-col gap-1">
                <img src={assets.logo} className="size-8" alt="" />
                <h1 className="text-xl">Basic</h1>
                <p className=" text-[15px] text-stone-600">Best for personal use.</p>
                </div>
                <p className="text-stone-600"><span className=" text-2xl md:text-4xl text-black">$10 </span>/100 credits</p>
                <button className=" bg-primary text-white py-2 rounded-md hover:scale-95 transition-all">Get started</button>
            </div>
        </div>
    </div>
  )
}

export default BuyCredit