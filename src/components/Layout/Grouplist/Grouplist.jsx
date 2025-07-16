import React from 'react'
import Searchinput from '../Searchinput'
import { PiClockAfternoon } from 'react-icons/pi'
import group1 from "../../../assets/group1.png" 

const Grouplist = () => {
    const groups = [
    {
      img: group1,
      grpName: "Friends Reunion",
      lastMsg: "Hi Guys, Wassup!"
    },
    {
    img: group1,
      grpName: "Friends Forever",
      lastMsg: "Good to see you"
    },
    {
     img: group1,
      grpName: "Crazy Cousins",
      lastMsg: "What plans today?"
    },
    {
     img: group1,
      grpName: "Office Group",
      lastMsg: "Join the meeting"
    },
    {
    img: group1,
      grpName: "Gaming Group",
      lastMsg: "Let's pla"},
    {
    img: group1,
      grpName: "Gaming Group",
      lastMsg: "Let's pla"},
    {
    img: group1,
      grpName: "Gaming Group",
      lastMsg: "Let's pla"},
    {
    img: group1,
      grpName: "Gaming Group",
      lastMsg: "Let's pla"},
    ]
  return (
    <>

        <div className='xl:w-[38%] w-full  shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-[49%] rounded-[20px] px-[20px] font-poppins pt-[10px] pb-[20px] '>
          <Searchinput></Searchinput>
        <h2 className='font-semibold font-secondary text-[20px] text-black mt-[43px] ' >Groups List</h2>
       
        <div className="overflow-y-scroll   h-[70%] pt-[43px]">
            {
                groups.map((group,i)=>(
                        <div key={i} className=" flex py-[13px] items-center justify-between border-b-2 border-gray-300 ">
                        <div className="flex gap-x-[14px]  justify-start items-center ">
                            <div className="w-[70px] h-[70px] rounded-full bg-center bg-cover bg-no-repeat  " style={{ backgroundImage: `url(${group.img})` }}>
                                
                            </div>
                            <div className="">
                                <h2 className='font-semibold font-secondary text-[18px]  text-black ' >
                                    {group.grpName}
                                </h2>
                            <p className='font-medium  font-secondary text-[14px]  text-black'>
                                {group.lastMsg}
                            </p>
                            </div>
                        </div>
                        <button className='font-semibold font-secondary text-[20px] px-[22px] rounded-[5px] bg-black text-white mr-[32px] ' >Join</button>
                    </div>
                )
                
                )
            }
        </div>

    </div></>

  )
}

export default Grouplist