import sample_image_2 from '../assets/sample_img_2.png'

const Description = () => {
  return (
    <div className="mt-14 w-5/6 mx-auto">
        <div className="text-center"> 
            <h1 className=" text-4xl  ">Create AI Images</h1>
        <p className="text-[15px] text-stone-600 py-2 mt-1 ">Turn your imagination into visuals</p>
        </div>
        <div className='flex  items-center gap-6 md:gap-20 flex-col md:flex-row mt-16'>
            <img className= 'md:h-96 w-full md:w-96' src={sample_image_2} alt="" />
            <div className='bg-pink-30 flex  flex-col gap-6'>
                <h1 className='text-3xl py-2 '>Introducing the AI-Powered Text to  <br /> Image Generator</h1>
                <p className='text-[15px]  text-stone-600'>Easily bring your ideas to life with our frew-3/4e AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                <p className=' text-[15px]  text-stone-600'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
            </div>
        </div>
    </div>
  )
}

export default Description