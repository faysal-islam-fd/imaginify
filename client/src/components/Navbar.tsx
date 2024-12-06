import logo from '../assets/logo.png'
import credit_star from '../assets/credit_star.svg'
import profile_icon from '../assets/profile_icon.png'
const Navbar = () => {
    const user = false;
  return (
    <nav className=' flex justify-between items-center py-3 w-[90%] mx-auto'>
        <div className='flex items-center gap-2'>
        <img className='size-11' src={logo} alt="Logo" />
        <span className='text-[30px] hidden sm:block font-[600]'>Imaginify</span>
        </div>

        {
            user ? 
            <div className='flex items-center gap-3'>
                <div className='flex rounded-3xl bg-sky-100 px-5 py-2 items-center gap-1'><img className='size-4' src={credit_star} alt="" /><span>Credit left:4</span></div>
                <div className='flex py-3 items-center gap-2'>
                    <span>Hi! Jon Doe</span>
                    <img className='size-8' src={profile_icon} alt="" />
                </div>
            </div>
            :
            <div className='flex text-[16px]  gap-2'>
                <button className='text-stone-800'>Pricing</button>
                <button className='bg-primary  px-7 py-2 rounded-3xl text-stone-50 '>Login</button>
            </div>
        }
    </nav>
  )
}

export default Navbar