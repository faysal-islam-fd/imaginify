
import { assets } from "../assets/assets"
import { useState } from "react"



const GenerateImage = () => {
  const [loading,setLoading] = useState(false)
  const [image,setImage] = useState(assets.sample_img_2)
  const [isImageLoaded,setIsImageLoaded] = useState(false)
  const [inputValue,setInputValue] = useState('')
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

  }
  
  return (


      <form onSubmit={handleSubmit} action="" className="flex  min-h-[90vh] flex-col gap-6 justify-center items-center" >
        <div className="relative">
          <img  className="rounded max-w-sm" src={image} alt="" />
          <span className="absolute transition-all duration-100 bottom-0 left-0 h-1 right-0 bg-blue-500 " />
        </div>
        {
          loading && <span className=" loading loading-dots loading-md"></span>
        }
       {
        isImageLoaded ?
        <div className=" flex flex-wrap items-center justify-center gap-2">
        <p onClick={()=>setIsImageLoaded(false)} className="cursor-pointer bg-white border border-stone-700 py-1 rounded-3xl px-6">Generate Another</p>
        <a href={image} download className="px-8 py-2 bg-secondary rounded-3xl  text-white font-semibold">Download</a>
      </div>
      :
      <div className="rounded-3xl py-[1px] pr-[1px] w-full bg-white border flex items-center  max-w-lg justify-between">
          <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className="ml-6 flex-1 focus:outline-none text-stone-800" placeholder="Describe what you wanna generate"/>
         <button onClick={()=>setIsImageLoaded(true)} className="px-8 py-2 bg-secondary rounded-3xl  text-white font-semibold">Generate</button>
        </div>

       }

        

       
      </form>
  )
}

export default GenerateImage