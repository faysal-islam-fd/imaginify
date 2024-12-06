import { assets } from "../assets/assets"




const Footer = () => {
  return (
    <div className="mt-20 md:mt-28 py-4 w-[90%] mx-auto  flex md:flex-row flex-col md:items-center justify-between">
        <div className="flex md:flex-row flex-col md:items-center gap-2 md:gap-20">
            <div className="flex items-center gap-2">
                <img className="size-9" src={assets.logo} alt="" />
                <span className="text-2xl">Imaginify</span>
            </div>
            <div className="w-px h-6 hidden md:block bg-gray-400"></div>
            <p className="text-stone-600  text-[15px]">All right reserved. Copyright @Imaginify</p>
        </div>
        <div>
            <div className="flex md:justify-center md:gap-4 mt-2 gap-2 md:mt-4">
                <img className="size-6" src={assets.instagram_icon} alt="" />
                <img className="size-6" src={assets.facebook_icon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer