import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import block1 from "../../assets/block1.jpg"
import block2 from "../../assets/block2.jpg"
import block3 from "../../assets/block3.jpg"
import block4 from "../../assets/block4.png"
import block5 from "../../assets/block5.png"

const BlockList = () => {    const BlockList = [
        {
            img: block1,
            name: "Raghav",
            time: "Today, 8:56pm",
        },
        {
            img:block2,
            name: "Swathi",
            time: "Today, 2:31pm",
        },
        {
            img:block3,
            name: "Kiran",
            time: "Yesterday, 6:22pm",
        },
        {
            img:block4,
            name: "Kiran",
            time: "Yesterday, 6:22pm",
        },
        {
            img:block5,
            name: "Kiran",
            time: "Yesterday, 6:22pm",
        },
        {
            img:block1,
            name: "Kiran",
            time: "Yesterday, 6:22pm",
        },
        {
            img:block2,
            name: "Kiran",
            time: "Yesterday, 6:22pm",
        },

    ]


    return (
        <div className='xl:w-[28%] w-full  h-[50%] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-secondary px-[28px] py-[20px] ' >
            <div className="flex justify-between">
                <h2 className='font-semibold font-secondary text-[20px]  text-black'>Block List</h2>
                <BsThreeDotsVertical className=' font-semibold text-[20px] text-black ' />

            </div>
            <div className="overflow-y-scroll h-[90%] ">
                {
                    BlockList.map((block, i) => (
                        <div key={i} className="flex items-center justify-between pt-[13px] border-b-2 border-gray-300 ">
                            <div className="flex gap-x-[10px]  justify-start items-center">
                                <div className="w-[70px] h-[70px] rounded-full bg-center bg-cover bg-no-repeat  " style={{ backgroundImage: `url(${block.img})` }}>  </div>
                                <div className="">
                                    <h2 className='font-semibold font-secondary text-[14px]  text-black ' >
                                        {block.name}
                                    </h2>
                                    <p className='font-medium  font-secondary text-[10px]  text-black/50 '>
                                        {block.time}
                                    </p>
                                </div>

                            </div>
                            <button className='pr-[4px] pl-[9px] bg-black text-white mr-[37px]'>unblock</button>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default BlockList