import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { FaCommentDots } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import Searchinput from '../components/Layout/Searchinput';
import Friends from '../components/Layout/Friends/Friends';
import Messegelist from '../components/Layout/Friends/Messegelist/Messegelist';
const Messege = () => {
  return (
             <div className="flex h-screen py-[35px]  ">
            <div className="w-[7.96%] rounded-[20px] my-[35px] ml-[35px] flex flex-col  justify-between      py-[38px] pl-[25px]  mr-[22px] bg-black">
    
              <div className="flex flex-col gap-y-9 ">
                          <div className=" flex flex-col justify-end  items-center  w-[100px] h-[100px] rounded-full ml-[13px] object-cover cursor-pointer bg-[url(assets/profile.jpg)] bg-center bg-no-repeat bg-cover"></div>
                <div className=" relative  flex justify-center items-end cursor-pointer pt-[20px] pb-[25px]    rounded-l-[20px] bg-white ">
                  <GrHomeRounded className='size-7   ' />
                  <div className="w-[8px] h-[75px] bg-black absolute top-0 right-0 rounded-l-[10px]  "></div>
                </div>
    
                <div className=" relative  flex justify-center items-end cursor-pointer pt-[20px] pb-[25px]   rounded-l-[20px] bg-white ">
                  <FaCommentDots className='size-7   ' />
                  <div className="w-[8px] h-[75px] bg-black absolute top-0 right-0 rounded-l-[10px]  "></div>
                </div>
                <div className=" relative  flex justify-center items-end cursor-pointer pt-[20px] pb-[25px]   rounded-l-[20px] bg-white ">
                  <AiTwotoneSetting className='size-7   ' />
                  <div className="w-[8px] h-[75px] bg-black absolute top-0 right-0 rounded-l-[10px]  "></div>
                </div>
              </div>
              <div className=" flex flex-col  justify-end items-center  cursor-pointer  ">
                <ImExit className=' size-10 text-white' />
              </div>
            </div>
            
            <div className="w-[90%] h-[88vh] flex flex-wrap justify-start gap-x-10 gap-y-9 ">   
              <Messegelist></Messegelist>
            </div>
          </div>
  )
}

export default Messege