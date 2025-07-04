import React, { useEffect } from 'react'
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
import BlockList from '../components/Block list/BlockList';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
function home() {
   const auth = getAuth();
  const handelExit = () => {
   
    signOut(auth).then(() => {

      navigate("/registration")
      
    }).catch((error) => {
      console.log(error);
      
    });


  }


  const navigate = useNavigate()
  const data = useSelector(state => state.userinfo.value)
  console.log(data, "data");
  useEffect(() => {
    if (!data) {
      navigate("/login")

    }
  })
  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true)
    }
  });


  const [verify, setVerify] = useState(false)
  return (
    <>
      {
        verify ?
          <div className="flex h-[95vh] mt-[20px]  ">
            <div className="w-[7.96%] rounded-[20px]  ml-[35px] flex flex-col  justify-between      py-[38px] pl-[25px]  mr-[22px] bg-black">

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
                <ImExit onClick={handelExit} className=' size-10 text-white' />
              </div>
            </div>

            <div className="w-[80%] h-[100%] flex flex-wrap justify-start gap-x-10 gap-y-3  ">


              <Grouplist></Grouplist>
              <Friends></Friends>
              <Userlist></Userlist>
              <FriendRequest></FriendRequest>
              <MyGroups></MyGroups>
              <BlockList></BlockList>

            </div>
          </div>
          :
          <p>pleace verifyed your email</p>
      }
    </>
  )
}

export default home