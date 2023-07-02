import vector from '../../assets/images/Vector.png';
import logo from '../../assets/images/Logo.png'
const NavBar = () => {
    return (
        <nav className='flex justify-between items-center p-[37px] sm:p-[20px] lg:px-[90px] lg:pt-[49px]'>
            <div className='flex flex-col justify-center items-center '>
                <img src={logo} alt="logo" className='w-[20px] h-[25px] md:w-[44px] md:h-[58px] sm:w-[34px] sm:h-[48px] transition ease-out duration-500' />
                <p className='text-[#9E26D7] font-[syne] text-[10px] md:text-[18px]'>GoodsbOX.</p>
            </div>

            <div>
                <ul className=' text-[#3632DF] lg:text-[18px] md:text-[16px] hidden sm:flex transition ease-out duration-500'>
                    <li>
                        <a href="#" className='mx-[10px]'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='mx-[10px]'>About</a>
                    </li>
                    <li>
                        <a href="#" className='mx-[10px]'>Faqs</a>
                    </li>
                    <li>
                        <a href="#" className='mx-[10px]'>Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <img src={vector} alt="vector" className='sm:hidden md:hidden transition ease-out duration-500' />
                <div className='bg-[#3632DF] rounded-md py-[10px] px-[30px] hidden sm:block transition ease-out duration-500'>
                    <button className='text-[#fff] text-[16px]'>join our waitlist</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
