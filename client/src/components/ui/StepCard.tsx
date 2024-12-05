



interface StepCardProps {
  icon: string;
  title: string;
  description: string;
}
        
const StepCard = ({ icon, title, description }:StepCardProps) => {
  return (
    <div className="flex bg-white border gap-4 border-stone-300 w-full md:w-3/5 mx-auto rounded-md p-3 md:p-6">
        <img src={icon} alt="" />
        <div>
            <h2 className="text-[18px] md:text-[20px]">{title}</h2>
            <p className="text-[14px] md:text-[15px] text-stone-600">{description}</p>
        </div>
    </div>
  )
}

export default StepCard