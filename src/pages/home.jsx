import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { FaCommentDots } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import Searchinput from '../components/Layout/Searchinput';
import Grouplist from '../components/Layout/Grouplist/Grouplist';
import Friends from '../components/Layout/Friends/Friends';
import Userlist from '../components/Layout/Userlist/Userlist';
import FriendRequest from '../components/Layout/Friend request/FriendRequest';
import MyGroups from '../components/My Groups/MyGroups';

function home() {
  return (
    <>
      <div className="flex h-screen py-[35px]  ">
        <div className="w-[10.96%] rounded-[20px] my-[35px] ml-[35px] flex flex-col  justify-between  items-center     py-[38px] pl-[25px]  mr-[22px] bg-black">

          <div className="flex flex-col gap-y-9 ">
                      <div className=" flex flex-col justify-center   w-[100px] h-[100px] rounded-full object-cover cursor-pointer bg-[url(assets/profile.jpg)] bg-center bg-no-repeat bg-cover"></div>
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
          <div className=" flex flex-col  justify-end items-center  cursor-pointer  ">
            <ImExit className=' size-10 text-white' />
          </div>
        </div>
        
        <div className="w-[80%] h-[95vh] flex flex-wrap justify-start gap-x-10 gap-y-10 ">  
          

            <Grouplist></Grouplist>
            <Friends></Friends>
            <Userlist></Userlist>
            <FriendRequest></FriendRequest>
            <MyGroups></MyGroups>
           
        </div>
      </div>
    </>
  )
}

export default home