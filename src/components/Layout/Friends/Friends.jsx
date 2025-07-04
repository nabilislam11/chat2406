import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friends1 from "../../../assets/friends1.jpg"
import friends2 from "../../../assets/friends2.png"
import friends3 from "../../../assets/friends3.png"
import friends4 from "../../../assets/friends4.png"

 
const Friends = () => {
    const friends = [
        {
            img: friends1 ,
            name: "Raghav",
            msg: "Dinner?",
            time: "Today, 8:56pm",
        },
        {
            img: friends2,
            name: "Swathi",
            msg: "Sure!?",
            time: "Today, 2:31pm",
        },
        {
            img: friends3,
            name: "Kiran",
            msg: "Hi.....",
            time: "Yesterday, 6:22pm",
        },
        {
            img: friends4,
            name: "Kiran",
            msg: "Hi.....",
            time: "Yesterday, 6:22pm",
        },
        {
            img: friends1,
            name: "Kiran",
            msg: "Hi.....",
            time: "Yesterday, 6:22pm",
        },
        {
            img: friends1,
            name: "Kiran",
            msg: "Hi.....",
            time: "Yesterday, 6:22pm",
        },
        {
            img: friends1,
            name: "Kiran",
            msg: "Hi.....",
            time: "Yesterday, 6:22pm",
        },

    ]


    return (
        <div className='xl:w-[28%] w-full h-[49%] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-secondary px-[28px] py-[20px] ' >
            <div className="flex justify-between">
                <h2 className='font-semibold font-secondary text-[20px]  text-black'>Friends</h2>
                <BsThreeDotsVertical className=' font-semibold text-[20px] text-black ' />

            </div>
            <div className="overflow-y-scroll h-[80%] ">
                {
                    friends.map((friends, i) => (
                        <div key={i} className="flex items-center justify-between pt-[13px] border-b-2 border-gray-300 ">
                            <div className="flex gap-x-[10px]  justify-start items-center">
                                <div className="w-[70px] h-[70px] rounded-full bg-center bg-cover bg-no-repeat  " style={{ backgroundImage: `url(${friends.img})` }}>  </div>
                                <div className="">
                                    <h2 className='font-semibold font-secondary text-[14px]  text-black ' >
                                        {friends.name}
                                    </h2>
                                    <p className='font-medium  font-secondary text-[12px]  text-black/75'>
                                        {friends.msg}
                                    </p>
                                </div>

                            </div>
                            <p className='font-medium  font-secondary text-[10px]  text-black/50 pr-[10px]'>
                                {friends.time}
                            </p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Friends