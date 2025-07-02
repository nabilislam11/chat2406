import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import messege1 from "../../../../assets/messege1.png"
import messege2 from "../../../../assets/messege2.png"
import messege3 from "../../../../assets/messege3.png"
import messege4 from "../../../../assets/messege4.png"
import Searchinput from '../../Searchinput';

const Messegelist = () => {
    const MessegeList = [
        {
            img: messege1,
            name: "Raghav",
            msg: "Dinner?",
        },
        {
            img: messege2,
            name: "Swathi",
            msg: "Sure!?",
        },
        {
            img: messege3,
            name: "Kiran",
            msg: "Hi.....",

        },
        {
            img: messege4,
            name: "Kiran",
            msg: "Hi.....",

        },
 
 

    ]


    return (
        <div className='xl:w-[28%] w-full h-[58%] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-secondary px-[28px] py-[20px] ' >
            <Searchinput/>
            <div className="flex justify-between">
                <h2 className='font-semibold font-secondary text-[20px]  text-black'>Friends</h2>
    

            </div>
            <div className=" h-[80%] ">
                {
                    MessegeList.map((messege, i) => (
                        <div key={i} className="flex items-center justify-between pt-[18px] pb-[13px] border-b-2 border-gray-300 ">
                            <div className="flex gap-x-[10px]  justify-start items-center">
                                <div className="w-[70px] h-[70px] rounded-full bg-center bg-cover bg-no-repeat  " style={{ backgroundImage: `url(${messege.img})` }}>  </div>
                                <div className="">
                                    <h2 className='font-semibold font-secondary text-[14px]  text-black ' >
                                        {messege.name}
                                    </h2>
                                    <p className='font-medium  font-secondary text-[12px]  text-black/75'>
                                        {messege.msg}
                                    </p>
                                </div>

                            </div> 

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Messegelist