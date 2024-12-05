import { assets } from "../assets/assets"




const Footer = () => {
  return (
    <div className="mt-28 py-4 flex items-center justify-between">
        <div className="flex items-center gap-20">
            <div className="flex items-center gap-2">
                <img className="size-9" src={assets.logo} alt="" />
                <span className="text-2xl">Imaginify</span>
            </div>
            <div className="w-px h-6 bg-gray-400"></div>
            <p className="text-stone-600 text-[15px]">All right reserved. Copyright @Imaginify</p>
        </div>
        <div>
            <div className="flex justify-center gap-4 mt-4">
                <img className="size-6" src={assets.instagram_icon} alt="" />
                <img className="size-6" src={assets.facebook_icon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer