
import star_icon from '../assets/star_icon.svg'
import star_group from '../assets/star_group.png'
import sample_img_1 from '../assets/sample_img_1.png'
import Button from './ui/Button'
const Hero = () => {
  return (
    <div>
        <div className='w-4/5 md:w-2/4 mx-auto mt-12'>
            <p className='flex  text-stone-600 justify-center w-full md:w-2/4 mx-auto gap-2 bg-white md:text-[16px] text-[14px] border border-stone-300  rounded-3xl px-3 py-1'><span>Best text to image generator</span><img src={star_icon} alt="" /></p>
            <h1 className='text-2xl md:text-6xl mt-4 p-2 text-center'>Turn text to <br /> <span className='text-secondary'>image</span>, in seconds.</h1>
            <p className='text-stone-600 w-3/4 mt-6 mx-auto text-center text-[14px] md:text-[15px]'>Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.</p>
            <Button src={star_group}>Generate Images</Button>
        </div>
        <div>
        <div className='flex flex-wrap justify-center bg-pink-  gap-4 mt-14'>
            {
                Array(6).fill('').map((item,index)=>{
                     return <img key={index} width={70} className='rounded' src={sample_img_1} alt="" />
                })
            }
            
        </div>
        <p className='text-center mt-4 text-stone-600 text-[14px]  md:text-[15px]'>Generated images from imagify</p>
        </div>
    </div>
  )
}

export default Hero