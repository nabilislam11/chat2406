import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import group1 from "../../assets/group1.png"
import group2 from "../../assets/group2.png"
import group3 from "../../assets/group3.png"
import group4 from "../../assets/group4.png"
import group5 from "../../assets/group5.jpg"
const MyGroups = () => {
    const  MyGroups = [
        {
            img: group1,
            name: "Raghav",
            msg: "Dinner?",
            time: "Today, 8:56pm",
        },
        {
            img: group2,
            name: "Swathi",
            msg: "Sure!?",
            time: "Today, 2:31pm",
        },
        {
            img: group3,
            name: "Kiran",
            msg: "Hi.....",
            time: "Yesterday, 6:22pm",
        },
        {
            img: group4,
            name:"Kiran",
            msg: "Hi.....",
            time: "Yesterday, 6:22pm",
        },
        {
            img: group5,
            name:"Kiran",
            msg: "Hi.....",
            time: "Yesterday, 6:22pm",
        },
        {
            img: group1,
            name: "Kiran",
            msg: "Hi.....",
            time: "Yesterday, 6:22pm",
        },
        {
            img: group2,
            name: "Kiran",
            msg: "Hi.....",
            time: "Yesterday, 6:22pm",
        },

    ]


    return (
        <div className='xl:w-[28%]  w-full h-[50%] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-secondary px-[28px] py-[20px] ' >
            <div className="flex justify-between">
                <h2 className='font-semibold font-secondary text-[20px]  text-black'>My Groups</h2>
                <BsThreeDotsVertical className=' font-semibold text-[20px] text-black ' />

            </div>
            <div className="overflow-y-scroll h-[80%] ">
                {
                    MyGroups.map((group,i) => (
                        <div key={i} className="flex items-center justify-between pt-[13px] border-b-2 border-gray-300 ">
                            <div className="flex gap-x-[10px]  justify-start items-center">
                                <div className="w-[70px] h-[70px] rounded-full bg-center bg-cover bg-no-repeat  " style={{ backgroundImage: `url(${group.img})` }}>  </div>
                                <div className="">
                                    <h2 className='font-semibold font-secondary text-[14px]  text-black ' >
                                        {group.name}
                                    </h2>
                                    <p className='font-medium  font-secondary text-[12px]  text-black/75'>
                                        {group.msg}
                                    </p>
                                </div>

                            </div>
                            <p className='font-medium  font-secondary text-[10px]  text-black/50 pr-[10px]'>
                                {group.time}
                            </p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}


export default MyGroups