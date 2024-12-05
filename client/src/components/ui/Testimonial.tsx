
import { assets } from "../../assets/assets";
interface TestimonialProps {
    image: string;
    name: string;
    role: string;
    stars: number;
    text: string;
}

const Testimonial = ({image,name,role,stars,text}: TestimonialProps) => {
  return (
    <div className="border shadow-md md:shadow-xl rounded-md p-6">
        <img src={image} className="size-10 mx-auto" alt="" />
        <h1 className="text-[18px] mt-2">{name}</h1>
        <p className="text-stone-700 text-[14px]">{role}</p>
        <p className="flex justify-center my-3">
            {
                Array(stars).fill("").map((val,idx)=>(
                    <img key={idx} src={assets.rating_star} />
                ))
            }
        </p>
        <p className="text-stone-600 text-[15px] px-5 ">{text}</p>
    </div>
  )
}

export default Testimonial