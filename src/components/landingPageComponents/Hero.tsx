import rider from '../../assets/images/rider.png';
import location from '../../assets/images/GroupL.png';
import bxLocation from '../../assets/images/bx_location.png';
import { AiFillThunderbolt } from 'react-icons/ai';

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center pb-10'>

            <div>
                <img src={rider} alt="rider" />
            </div>

            <div className='flex flex-col justify-center items-center gap-5'>
                <p className='text-[#3632DF] font-[syne] text-[28px] text-center font-extrabold leading-[40px]'>Your <span><AiFillThunderbolt className='inline text-amber-400' /></span> Lightining <br /> fast Delivery Service.</p>

                <p className='text-center text-[#333333] leading-7 p-[32px] text-[16px]'>Goodsbox is a Logistics company providing world class courier service and package delivery. we exist to help businesses as well as individuals ship their goods and products to their respective destinations.</p>

                <div className='flex items-center flex-1 p-[20px] w-[80%] bg-[#F4F4F4] rounded-md'>
                    <img src={location} alt="location" className='pr-4' />
                    <input type="text" placeholder='Enter pick up location' className='w-full bg-[#F4F4F4] placeholder-[#A9A9A9] focus:outline-none ' />
                </div>

                <div className='flex items-center flex-1 p-[20px] w-[80%] bg-[#F4F4F4] rounded-md'>
                    <img src={bxLocation} alt="location" className='pr-4' />
                    <input type="text" placeholder='Delivery destination' className='w-full bg-[#F4F4F4] placeholder-[#A9A9A9] focus:outline-none' />
                </div>



                <div className='flex gap-5 mt-5'>
                    <button className='flex items-center justify-center bg-[#3632DF] font-semibold text-[14px] text-[#fff] p-4 px-10  rounded-md'>Sign up</button>
                    <button className='border-[#3632DF] border-[2px] text-[#3632DF] font-semibold text-[14px] px-4 rounded-md'>Request Pick Up</button>
                </div>


                <p className='text-[10px]'>Send anywhere with ease with the click of a button!</p>
            </div>

        </div>
    )
}

export default Hero
