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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { InfinitySpin } from 'react-loader-spinner';
import { userLoginfo } from '../slice/userSlice';
function Home() {
  const [loading, setloading] = useState(true);
  const [verify, setVerify] = useState(false)
  const auth = getAuth();
  const data = useSelector(state => state.userinfo.value)
  const navigate = useNavigate()
  const dispatch =useDispatch();
  const handlemessege = () => {

    navigate("/messege")
  }
  const handelExit = () => {
    setloading(true)
    signOut(auth).then(() => {
      localStorage.removeItem("userLoginfo")
      dispatch(userLoginfo(null))
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
  }, [])

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {

      if (user.emailVerified) {
        setVerify(true)
      }
      setloading(false)
    }


  });

  if (loading) {
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
            <div className="w-[10.96%] rounded-[20px]  ml-[35px] flex flex-col  justify-between  py-[38px] overflow-hidden  mr-[22px] bg-black">

              <div className="flex flex-col gap-y-9 ">
                <div className=" flex flex-col  w-[100px] h-[100px] rounded-full mx-auto object-cover cursor-pointer bg-[url(assets/profile.jpg)] bg-center bg-no-repeat bg-cover  "></div>
                {/* <div className="relative w-full group  bg-transparent cursor-pointer text-white hover:z-[0] py-[23px] ml-[26px] rounded-l-[20px] duration-300 ease-in-out hover:bg-white hover:text-black overflow-hidden "> 
                  <GrHomeRounded className='size-9  mx-auto z-30   '   />
                  <div className="absolute w-full h-[82px] bg-[#1e1e1e]  top-0 right-8 rounded-l-[15px] duration-500 transition-transform group-hover:translate-x-[98%] group-hover:z-0 shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden   "></div>
                </div> */}

                <div className="relative w-full group bg-transparent cursor-pointer text-black hover:text-black py-[23px] ml-[26px] rounded-l-[20px] duration-300 ease-in-out hover:bg-white overflow-hidden">

                  <div className="relative    z-30 ">
                     <GrHomeRounded  className="size-9  ml-[70px] transition-colors duration-300 group-hover:text-black text-white" />
                  </div>


                  <div className="absolute w-full h-[82px] bg-black top-0 right-8 rounded-l-[15px] duration-500 transition-transform group-hover:translate-x-[98%] z-10 shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]"></div>
                </div>

                <div className="relative w-full group bg-transparent cursor-pointer text-black hover:text-black py-[23px] ml-[26px] rounded-l-[20px] duration-300 ease-in-out hover:bg-white overflow-hidden">

                  <div className="relative    z-30 ">
                     <FaCommentDots  className="size-9    ml-[70px] transition-colors duration-300 group-hover:text-black text-white" />
                  </div>


                  <div className="absolute w-full h-[82px] bg-black top-0 right-8 rounded-l-[15px] duration-500 transition-transform group-hover:translate-x-[98%] z-10 shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]"></div>
                </div>

                <div className="relative w-full group bg-transparent cursor-pointer text-black hover:text-black py-[23px] ml-[26px] rounded-l-[20px] duration-300 ease-in-out hover:bg-white overflow-hidden">

                  <div className="relative    z-30 ">
                     <AiTwotoneSetting  className="size-9  ml-[70px]  transition-colors duration-300 group-hover:text-black text-white" />
                  </div>


                  <div className="absolute w-full h-[82px] bg-black top-0 right-8 rounded-l-[15px] duration-500 transition-transform group-hover:translate-x-[98%] z-10 shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)]"></div>
                </div>



          
              </div>
              <div className=" text-white">
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