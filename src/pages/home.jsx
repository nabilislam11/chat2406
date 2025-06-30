import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { FaCommentDots } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import Searchinput from '../components/Layoult/Searchinput';

function home() {
  return (
    <>
      <div className="flex h-screen py-[35px] ">
        <div className="w-[12.96%px] rounded-[20px] my-[35px] ml-[35px] flex flex-col justify-between  py-[38px] pl-[25px]  bg-black">
          <div className=" flex flex-col justify-center mx-[24px]  w-[100px] h-[100px]  mt-[35px] rounded-full object-cover cursor-pointer bg-[url(assets/profile.jpg)] bg-center bg-no-repeat bg-cover"></div>
          <div className="flex flex-col gap-9 ">
            <div className=" relative  flex justify-center items-end cursor-pointer pt-[20px] pb-[25px] pl-[45px] pr-[65px]   rounded-l-[20px] bg-white ">
              <GrHomeRounded className='size-7   ' />
              <div className="w-[8px] h-[75px] bg-black absolute top-0 right-0 rounded-l-[10px]  "></div>
            </div>

            <div className=" relative  flex justify-center items-end cursor-pointer pt-[20px] pb-[25px] pl-[45px] pr-[65px]   rounded-l-[20px] bg-white ">
              <FaCommentDots className='size-7   ' />
              <div className="w-[8px] h-[75px] bg-black absolute top-0 right-0 rounded-l-[10px]  "></div>
            </div>
            <div className=" relative  flex justify-center items-end cursor-pointer pt-[20px] pb-[25px] pl-[45px] pr-[65px]   rounded-l-[20px] bg-white ">
              <AiTwotoneSetting className='size-7   ' />
              <div className="w-[8px] h-[75px] bg-black absolute top-0 right-0 rounded-l-[10px]  "></div>
            </div>
          </div>
          <div className=" flex justify-center cursor-pointer  ">
            <ImExit className=' size-10 text-white' />
          </div>
        </div>
        <div className="w-[80%] ">
          <Searchinput/>
        </div>
      </div>
    </>
  )
}

export default home