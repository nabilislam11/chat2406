import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import registration from './assets/registration.png'

function App() {


  return (
    <div className='flex '>
      <div className="w-[55%] pl-[190px] pt-[50px]">
        <h2 className='font-bold font-nunito text-[34px] text-primary  pb-[13px]  '>Get started with easily register</h2>
        <p className='font-reguler  font-nunito text-[20px] text-black/50 '>Free register and you can enjoy it</p>

        <div className="mt-[60px]">
          <div className=" relative">
            <input className='border 2 border-primary/30 py-[26px] px-[45px] w-[368px] rounded-[9px] tracking-[4px] ' type="text" placeholder='Enter your email address' />
            <label className='absolute top-[-13px] left-[34px]  bg-white px-[12px]  font-semibold font-nunito text-[13px text-primary ' >Email Address
            </label>
          </div>


          <div className=" relative my-[56px]" >
            <input className='border 2 border-primary/30 py-[26px] px-[45px] w-[368px] rounded-[9px] tracking-[4px] ' type="text" placeholder='Enter your full name' />
            <label className='absolute top-[-13px] left-[34px]  bg-white px-[12px] font-semibold font-nunito text-[13px text-primary ' >Ful name
            </label>
          </div>
          <div className=" relative">
            <input className='border 2 border-primary/30 py-[26px] px-[45px] w-[368px] rounded-[9px] tracking-[4px] ' type="text" placeholder='Enter your password' />
            <label className='absolute top-[-13px] left-[34px]  bg-white px-[12px]  font-semibold font-nunito text-[13px text-primary  ' >Password
            </label>
          </div>
          <div className="w-[368px] text-center ">
                  <button className=' w-full font-semibold font-nunito text-[20px text-white py-[20px]  px-[150px] bg-black rounded-[86px] mt-[51px]  ' >Sign up</button>
                  <p className='font-reguler font-primary text-[13px] text-secondary  pt-[35px]'>Already  have an account ?<span className='text-orange-500 font-bold cursor-pointer'>Sign In</span> </p>
                 
          </div>
        </div>
      </div>
      <div className="w-[45%] ">
        <img className='w-full h-screen object-cover ' src={registration} alt="#registration" />
      </div>
    </div>
  )
}

export default App
