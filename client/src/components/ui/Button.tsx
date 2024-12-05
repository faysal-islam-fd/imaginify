


const Button = ({children,src}:{children:string,src:string}) => {
  return (
    <button className='px-4 py-2 gap-1 rounded-3xl font-semibold mx-auto
    mt-6 text-[16px] bg-primary text-white flex items-center'>{children}<img className='size-6' src={src} alt="" /></button>

  )
}

export default Button