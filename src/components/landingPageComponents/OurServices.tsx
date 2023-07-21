import React from 'react';
import Bike from '../../assets/images/Bike.png';
import Car from '../../assets/images/Car.png';
import Truck from '../../assets/images/Truck.png';


const OurServices = () => {
    return (
        <div className='bg-[#DFFBE6] flex flex-col justify-center items-center gap-12'>
            <h1 className='font-[syne] font-semibold text-[#9E26D7] text-[20px] mt-5'>Our Services</h1>

            <div className='text-center flex flex-col justify-center items-center gap-8'>
                <div className='font-semibold font-[syne] flex'>
                    <div className='bg-[#3632DF] rounded-[100%] h-6 w-6 text-[#fff] text-[14px] flex justify-center mx-3'><p>1</p></div>
                    <h1>Dispatch</h1>

                </div>

                <img src={Bike} alt="bike" width="184px" height="184" />

                <p className='px-[30px] leading-8 font-[400] text-[14px]'>GOODBOX, connects users to a dispatch rider to pick up and convey small/packaged goods to their respective destinations. In addition, riders are able to run market errands for customers.
                </p>
            </div>


            <div className='text-center flex flex-col justify-center items-center gap-8'>

                <div className='font-semibold font-[syne] flex'>
                    <div className='bg-[#9E26D7] rounded-[100%] h-6 w-6 text-[#fff] text-[14px] flex justify-center mx-3'><p>2</p></div>
                    <h1>Pickup Truck</h1>

                </div>

                <img src={Car} alt="car" />

                <p className='px-[30px] leading-8 font-[400] text-[14px]'>With GOOD BOX, connecting with drivers for relocation and large goods conveyance has been made easier and faster for nation wide delivery. Customer -goodbox-pick up truck </p>
            </div>

            <div className='text-center flex flex-col justify-center items-center gap-8'>
                <div className='font-semibold font-[syne] flex '>
                    <div className='bg-[#3d3ca2] rounded-[100%] h-6 w-6 text-[#fff] text-[14px] flex justify-center mx-3'><p>3</p></div>
                    <h1>Trailers/Lorrey</h1>

                </div>

                <img src={Truck} alt="truck" />

                <p className='px-[30px] leading-8 font-[400] text-[14px]'>GOOD BOX provides one with easier access to trailers for industrial and domestic purposes. Also, one can request a trailer to convey large quantity of goods from one state to another. Customer-goodbox-trailer.</p>
            </div>


        </div>
    )
}

export default OurServices
