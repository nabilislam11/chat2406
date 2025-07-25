import React, { useState } from 'react'
import Searchinput from '../Searchinput'
import { PiClockAfternoon } from 'react-icons/pi'
import group1 from "../../../assets/group1.png"
import { FiPlusCircle } from "react-icons/fi";
import { getDatabase, push, ref, set } from "firebase/database";

const Grouplist = () => {
  const db = getDatabase();
  const [show, setshow] = useState(false)
  const [tagname,setTagname] =useState("")
  const [taglist,setTaglist] =useState("")

  const [tagnameErr,setTagnameErr] =useState("")
  const [taglistErr,setTaglistErr] =useState("")

  const handleToggle = () => {
    setshow(!show)

  }
  const handleTagname =(e)=>{
    setTagname(e.target.value)

  }
  const handleTaglist =(e)=>{
    setTaglist(e.target.value)

  }
  const handleCreate =()=>{
  if(!tagname){
    setTagnameErr("Pleace enter group name ")
  }
  if (!taglist) {
    setTaglistErr("Pleace enter group tittle")
    
  }if (tagname && taglist) {
    set(push(ref(db, 'group/')), {
   tagname :tagname,
   taglist:taglist,
  });
    
  }


  } 


  return (
    <>

      <div className='xl:w-[38%] w-full  shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-[50%] rounded-[20px] px-[20px] font-poppins pt-[10px] pb-[20px] '>
        <Searchinput></Searchinput>
        <div className="flex justify-between items-center">
          <h2 className='font-semibold font-secondary text-[20px] text-black mt-[43px] ' >Groups List</h2>
          {
            show ?
              <button onClick={handleToggle} className='font-semibold  bg-[#f22d2b] py-[13px] px-[13px] rounded  font-secondary text-[20px] text-white  mt-[43px] mr-2.5'>Cancel</button>
              :
              <button onClick={handleToggle} className=' flex justify-between items-center font-semibold gap-x-1 bg-[#0d6eff]  py-[13px] px-[13px] rounded  font-secondary text-[20px] text-white mt-[43px] mr-2.5'>
                <FiPlusCircle size={30} /> Create Group</button>
          }

        </div>
        <div className="overflow-y-auto   h-[70%] pt-[43px]">
          {
            show?
            <div className="">
              <input value={tagname} onChange={handleTagname} type="text" className='w-80 border border-gray-500 rounded-[7px] h-[50px] font-semibold font-secondary text-[20px] text-black  ' placeholder= 'Pleace enter your group name ' />
              <p className='font-medium   font-secondary text-[17px]  text-red-500 pt-[15px] '>{tagnameErr} </p>
              <input value={taglist} onChange={handleTaglist} type="text" className='w-80 border border-gray-500 rounded-[7px] h-[50px] font-semibold font-secondary text-[20px] text-black  my-5 ' placeholder='Pleace enter your group tittle' />
              <p className='font-medium   font-secondary text-[17px]  text-red-500  ' >{tagnameErr} </p>
               <br></br>
              <button onClick={handleCreate} className='font-semibold gap-x-1 bg-green-600  py-[13px] px-[13px] rounded  font-secondary text-[20px] text-white'>Create</button>
            </div>
            :
                     <div className=" flex py-[13px] items-center justify-between border-b-2 border-gray-300 ">
            <div className="flex gap-x-[14px]  justify-start items-center ">
              {/* <div className="w-[70px] h-[70px] rounded-full bg-center bg-cover bg-no-repeat  " style={{ backgroundImage: `url(${group.img})` }}>
                                
                            </div> */}
              <div className="">
                <h2 className='font-semibold font-secondary text-[18px]  text-black ' >
                  asdf
                </h2>
                <p className='font-medium  font-secondary text-[14px]  text-black'>
                  asdf
                </p>
              </div>
            </div>
            <button className='font-semibold font-secondary text-[20px] px-[22px] rounded-[5px] bg-black text-white mr-[32px] ' >Join</button>
          </div>

          }
        </div>

      </div>
    </>

  )
}

export default Grouplist