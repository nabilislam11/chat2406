import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import registration from './assets/registration.png'

function App() {


  return (
    <div className='flex flex-wrap '>
      <div className=" lg:w-[55%] pl-[190px] pt-[50px]">
        <h2 className='font-bold font-nunito text-[34px] text-primary  pb-[13px]  '>Get started with easily register</h2>
        <p className='font-reguler  font-nunito text-[20px] text-black/50 '>Free register and you can enjoy it</p>

        <div className="mt-[60px]">
          <div class="relative my-[34px]">
            <input type="text" id="floating_outlined2" className="block px-[26px] py-[26px] xl:w-[368px] text-xl text-secondary font-semibold bg-transparent rounded-lg border-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-secondary/30 peer" placeholder=" " />
            <label for="floating_outlined2" class="absolute text-sm text-secondary/70 duration-300 transform  -translate-y-4 top-2 z-10 origin-[0] bg-white  px-4 peer-focus:px-4 peer-focus:text-secondary/70  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-2/5 rtl:peer-focus:left-auto start-4">Email Addresh</label>
          </div>


          <div class="relative my-[34px]">
            <input type="text" id="floating_outlined2" className="block px-[26px] py-[26px] xl:w-[368px] text-xl text-secondary font-semibold bg-transparent rounded-lg border-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-secondary/30 peer" placeholder=" " />
            <label for="floating_outlined2" class="absolute text-sm text-secondary/70 duration-300 transform  -translate-y-4 top-2 z-10 origin-[0] bg-white  px-4 peer-focus:px-4 peer-focus:text-secondary/70  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-2/5 rtl:peer-focus:left-auto start-4">Full Name</label>
          </div>
             <div class="relative my-[34px]">
            <input type="text" id="floating_outlined2" className="block px-[26px] py-[26px] xl:w-[368px] text-xl text-secondary font-semibold bg-transparent rounded-lg border-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-secondary/30 peer" placeholder=" " />
            <label for="floating_outlined2" class="absolute text-sm text-secondary/70 duration-300 transform  -translate-y-4 top-2 z-10 origin-[0] bg-white  px-4 peer-focus:px-4 peer-focus:text-secondary/70  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-2/5 rtl:peer-focus:left-auto start-4">Password</label>
          </div>
          <div className="w-[368px] text-center ">
            <button className=' w-full font-semibold font-nunito text-[20px text-white py-[20px]  px-[150px] bg-black rounded-[86px] mt-[51px]  ' >Sign up</button>
            <p className='font-reguler font-primary text-[13px] text-secondary  pt-[35px]'>Already  have an account ?<span className='text-orange-500 font-bold cursor-pointer'>Sign In</span> </p>

          </div>
        </div>
      </div>
      <div className=" lg:w-[45%] ">
        <img className='w-full h-screen object-cover ' src={registration} alt="#registration" />
      </div>
    </div>
  )
}

export default App
