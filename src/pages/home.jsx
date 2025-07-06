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
import { InfinitySpin } from 'react-loader-spinner';
function Home() {
  const [loading, setloading] = useState(true);
  const [verify, setVerify] = useState(false)
  const auth = getAuth();
  const data = useSelector(state => state.userinfo.value)
  const navigate = useNavigate()
  const handelExit = () => {
    setloading(true)
    signOut(auth).then(() => {

      navigate("/registration")


    }).catch((error) => {
      console.log(error);
      setloading(false)

    });
  }
  console.log(data, "data");
  useEffect(() => {
    if (!data) {

      navigate("/login")

    }
    }, [] )

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {

      if (user.emailVerified) {
        setVerify(true)
      }
      setloading(false)
    }


  });
  if (loading ) {
    console.log("loading");

    return (
      <div className="flex justify-center w-full items-center h-screen  ">
        <InfinitySpin
          size={500}
           visible={true}
          color="#000"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }



  return (
    <>
      {
        verify ?
          <div className="flex h-[95vh] mt-[20px]  ">
            <div className="w-[10.96%] rounded-[20px]  ml-[35px] flex flex-col  justify-between  py-[38px]   mr-[22px] bg-black">

              <div className="flex flex-col gap-y-9 ">
                <div className=" flex flex-col  w-[100px] h-[100px] rounded-full mx-auto object-cover cursor-pointer bg-[url(assets/profile.jpg)] bg-center bg-no-repeat bg-cover"></div>
                <div className="relative  after:content-[''] after:absolute after:top-0 after:left-[25px] after:rounded-l-[20px] py-5 after:bg-white  after:w-full after:h-full after:z-[-1] z-[1]  cursor-pointer before:content-[''] before:absolute before:top-0 before:right-0 before:w-[8px] before:h-full before:rounded-l-2xl before:shadow-2xl  before:bg-black before:z-[1] ">
                  <GrHomeRounded className='size-9  mx-auto '   />
                </div>

                <div className=" relative  after:content-[''] after:absolute after:top-0 after:left-[25px] after:rounded-l-[20px] py-5 after:bg-white  after:w-full after:h-full after:z-[-1] z-[1]  cursor-pointer before:content-[''] before:absolute before:top-0 before:right-0 before:w-[8px] before:h-full before:rounded-l-2xl before:shadow-2xl  before:bg-black before:z-[1]">
                  <FaCommentDots className='size-9  mx-auto ' />
                
                </div>
                <div className=" relative  after:content-[''] after:absolute after:top-0 after:left-[25px] after:rounded-l-[20px] py-5 after:bg-white  after:w-full after:h-full after:z-[-1] z-[1]  cursor-pointer before:content-[''] before:absolute before:top-0 before:right-0 before:w-[8px] before:h-full before:rounded-l-2xl before:shadow-2xl  before:bg-black before:z-[1] ">
                  <AiTwotoneSetting className='size-9  mx-auto' />
                 
                </div>
              </div>
              <div className="relative  after:content-[''] after:absolute after:top-0 after:left-[25px] after:rounded-l-[20px] py-5 after:bg-white  after:w-full after:h-full after:z-[-1] z-[1]  cursor-pointer before:content-[''] before:absolute before:top-0 before:right-0 before:w-[8px] before:h-full before:rounded-l-2xl before:shadow-2xl  before:bg-black before:z-[1]">
                <ImExit onClick={handelExit} className=' size-10  mx-auto' />
              </div>
            </div>

            <div className="w-[80%] h-[100%] flex flex-wrap justify-start ml-[20px] gap-x-10 gap-y-3 ">


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

export default Home