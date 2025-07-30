import React from 'react'
import profile from '../../assets/profile.jpg'
import { BsThreeDotsVertical } from 'react-icons/bs'
const Chat = () => {
    return (
        <div className='xl:w-[65%] w-full h-[86%] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-secondary px-[28px] py-[20px] '>
            {/* profile__part */}
            <div className="flex justify-between items-center  pb-[15px] border-gray-300  border-b-2 mb-[65px]  ">
                <div className=" flex justify-between items-center  gap-x-[33px] ">
                    <img className='w-[75px] h-[75px] rounded-full  ' src={profile} alt="" />
                    <div className="">
                        <p className='font-semibold font-secondary text-[24px]  text-black'>Nabil</p>
                        <p className='font-normal  font-secondary text-[16px]  text-black' >Online</p>
                    </div>
                </div>
                <BsThreeDotsVertical className=' font-semibold text-[30px] text-black ' />
                {/* Chat__part */}
            </div>
            <div className="w-full h-[75px] ">
                <div className="w-[210px] bg-gray-200 h-full rounded-2xl flex items-center justify-center   ">
                    <h2 className='font-normal font-secondary text-[16px]  text-black '>Hey There !</h2>

                </div>
                <h2 className='font-medium  font-secondary text-[12px]  text-black pt-[7px]   '>Today, 2:01pm</h2>
            </div>

        </div>
    )
}

export default Chat