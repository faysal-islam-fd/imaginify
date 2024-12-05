import { testimonialsData } from "../assets/assets"
import Testimonial from "./ui/Testimonial"



const Testimonials = () => {
  return (  
    <div className="mt-16">
        <div className="text-center">
        <h1 className="text-2xl md:text-4xl">Customer testimonials</h1>
        <p className="text-[15px] text-stone-600 py-2">What Our Users Are Saying</p>
        <div className="flex  flex-col md:flex-row gap-5   mt-10 rounded-md">
        {
            testimonialsData.map((testimonial,index) => (
                <Testimonial key={index} {...testimonial} />))
        } 
        </div>
        </div>
    </div>
  )
}

export default Testimonials