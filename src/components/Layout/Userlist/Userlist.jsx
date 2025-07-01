import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import user1 from "../../../assets/user1.jpg"

const Userlist = () => {    const user = [
        {
            img: user1 ,
            name: "Raghav",
            time: "Today, 8:56pm",
        },
        {
            img: user1,
            name: "Swathi",
            time: "Today, 2:31pm",
        },
        {
            img: user1,
            name: "Kiran",
            time: "Yesterday, 6:22pm",
        },
        {
            img: user1,
            name: "Kiran",
            time: "Yesterday, 6:22pm",
        },
        {
            img: user1,
            name: "Kiran",
            time: "Yesterday, 6:22pm",
        },
        {
            img: user1,
            name: "Kiran",
            time: "Yesterday, 6:22pm",
        },
        {
            img: user1,
            name: "Kiran",
            time: "Yesterday, 6:22pm",
        },

    ]


    return (
        <div className='xl:w-[28%]   h-[50%] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-secondary px-[28px] py-[20px] ' >
            <div className="flex justify-between">
                <h2 className='font-semibold font-secondary text-[20px]  text-black'>User List</h2>
                <BsThreeDotsVertical className=' font-semibold text-[20px] text-black ' />

            </div>
            <div className="overflow-y-scroll h-[90%] ">
                {
                    user.map((user, i) => (
                        <div key={i} className="flex items-center justify-between pt-[13px] border-b-2 border-gray-300 ">
                            <div className="flex gap-x-[10px]  justify-start items-center">
                                <div className="w-[70px] h-[70px] rounded-full bg-center bg-cover bg-no-repeat  " style={{ backgroundImage: `url(${user.img})` }}>  </div>
                                <div className="">
                                    <h2 className='font-semibold font-secondary text-[14px]  text-black ' >
                                        {user.name}
                                    </h2>
                                    <p className='font-medium  font-secondary text-[10px]  text-black/50 '>
                                        {user.time}
                                    </p>
                                </div>

                            </div>
                            <button className='pr-[20px] '> <BsFillPlusSquareFill size={25}  /></button>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Userlist