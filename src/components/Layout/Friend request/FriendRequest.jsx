import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import request from "../../../assets/request.jpg"
import request1 from "../../../assets/request1.jpg"
import request2 from "../../../assets/request2.jpg"
import request3 from "../../../assets/request3.jpg"


const FriendRequest = () => {
  const FriendRequest =[  
    {
      img:request,
      fullName:"Raghav",
      msg:"Dinner?",
    },
    {
      img:request1,
      fullName:"Raghav",
      msg:"Dinner?",
    },
    {
      img:request2,
      fullName:"Raghav",
      msg:"Dinner?",
    },
    {
      img:request3 ,
      fullName:"Raghav",
      msg:"Dinner?",
    },
    {
      img:request,
      fullName:"Raghav",
      msg:"Dinner?",
    },
    {
      img:request,
      fullName:"Raghav",
      msg:"Dinner?",
    },


  ]
  
  return (
    <div className='w-[38%] h-[50%] rounded-[20px]  pt-[10px] pb-[20px] px-[20px] font-secondary '>
      <div className=" flex justify-between ">
        <h3 className='font-semibold font-secondary text-[20px] text-black ' >Friend  Request</h3>
         <BsThreeDotsVertical className='font-semibold text-[20px] text-black '/>
         </div>
         <div className=" overflow-y-scroll h-[90%] ">
          {
          FriendRequest.map((request,i)=>(
            <div className="flex justify-between items-center py-[13px] border-b-2 border-gray-300 ">
              <div className="flex justify-start items-center gap-x-[14px]">
                <div className="w-[70px] h-[70px] rounded-full bg-cover bg-center bg-no-repeat "style={{backgroundImage: `url(${request.img})`}}></div>
                <div className="">
                  <h3 className='font-semibold font-secondary text-[18px]  text-black '>
                    {request.fullName}
                  </h3>
                  <p className='font-semibold font-secondary text-[14px]  text-black '  >{request.msg}</p>
                </div>
              </div>
              <button className='font-semibold font-secondary text-[20px] px-[7px] mr-[62px] bg-black text-white '  >Accept</button>
            </div>
          ))
          }
         </div>
      
      
    </div>
  )
}

export default FriendRequest