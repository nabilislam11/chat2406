import React from 'react'

const Searchinput = () => {
  return (
    <div className={`w-auto mb-3 relative ${className}`}>
        <input type="text" className='w-full rounded-[20px] pr-10 pl-[68px] py-[18px] outline-none shadow-shadow-2  font-secondary placeholder:search  ' />
        <FiSearch className='absolute top-50% font-semibold tex-[19px] translate-y-50% left-[23px] text-black  ' />
        <BsThreeDotsVertical className='absolute top-50% font-semibold text-[19px] translate-y-50% right-[22px]  text-black ' />

    </div>
  )
}

export default Searchinput