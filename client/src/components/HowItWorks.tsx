import StepCard from "./ui/StepCard"
import step_icon_1 from "../assets/step_icon_1.svg"
import step_icon_2 from "../assets/step_icon_2.svg"
import step_icon_3 from "../assets/step_icon_3.svg"
const HowItWorks = () => {
  return (
    <div className="mt-14">
        <div>
            <h1 className="text-center text-3xl md:text-4xl p-2">How it works</h1>
            <p className=" text-stone-600  md:text-[15px] text-[14px] text-center ">Transform Words Into Stunning Images</p>
        </div>    
        <div className="flex gap-4 mt-8 flex-col">
            <StepCard icon={step_icon_1}  title="Describe Your Vision" description="Type a phrase, sentence, or paragraph that describes the image you want to create" />
            <StepCard icon={step_icon_2}  title="Watch the Magic" description="Our AI-powered engine will transform your text into a high-quality, unique image in seconds." />
            <StepCard icon={step_icon_3}  title="Download & Share" description="Instantly download your creation or share it with the world directly from our platform." />
        </div>
    </div>
  )
}

export default HowItWorks