import { assets } from "../assets/assets"
import Description from "../components/Description"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Testimonials from "../components/Testimonials"
import Button from "../components/ui/Button"




const Home = () => {
  return (
   <div className=" w-[90%] mx-auto">
       
        <Hero />
        <HowItWorks />
        <Description />
        <Testimonials />
        <div className="mt-20"> 
          <h1 className="text-center text-4xl ">See the magic. Try now</h1>
          <Button src={assets.star_group}>Generate Images</Button>
        </div>
        
   </div>
  )
}

export default Home