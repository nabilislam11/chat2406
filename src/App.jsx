import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import registration from './assets/registration.png'
import { IoEyeSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

function App() {
  const [email, setEmail] = useState("")
  const [fullname, setFullname] = useState("")
  const [password, setPassword] = useState("")
  const [show, setshow] = useState("")

  const [emailErr, setEmailErr] = useState("")
  const [fullNamErr, setFullnameerr] = useState("")
  const [passwordErr, setPassworderr] = useState("")


  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("")


  }
  const handleFullname = (e) => {
    setFullname(e.target.value)
    setFullnameerr("")

  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("")
  }
  const handleRegistration = () => {
    console.log(email);
    console.log(fullname);
    console.log(password);


    if (!email) {
      setEmailErr("Enter your email");
    }else{
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
       setEmailErr("Enter your valid email");
        
      }
      
      
    }
    
    if (!fullname) {

      setFullnameerr("Enter your fullname")

    }
    if (!password) {
      setPassworderr("Enter your proper password");


    }
    if (email && fullname && password){
      console.log("Registration done");
      
    }

  }

  return (
    <div className='flex flex-wrap '>
      <div className=" lg:w-[55%] pl-[190px] pt-[50px]">
        <h2 className='font-bold font-nunito text-[34px] text-primary  pb-[13px]  '>Get started with easily register</h2>
        <p className='font-reguler  font-nunito text-[20px] text-black/50 '>Free register and you can enjoy it</p>

        <div className="mt-[60px]">
          <div class="relative my-[34px] w-[368px]">
            <input onChange={handleEmail} type="email" id="floating_outlined2" className="block px-[26px] py-[26px] xl:w-[368px] text-xl text-secondary font-semibold bg-transparent rounded-lg border-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-secondary/30 peer" placeholder=" " />
            <p className='bg-red-500 text-white mt-0.5 rounded-lg w-[298px] px-4 '>{emailErr}</p>
            <label for="floating_outlined2" class="absolute text-sm text-secondary/70 duration-300 transform  -translate-y-4 top-2 z-10 origin-[0] bg-white  px-4 peer-focus:px-4 peer-focus:text-secondary/70  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-2/5 rtl:peer-focus:left-auto start-4">Email Addresh</label>
          </div>


          <div class="relative my-[34px] w-[368px]">
            <input onChange={handleFullname} type="text" id="floating_outlined2" className="block px-[26px] py-[26px] xl:w-[368px] text-xl text-secondary font-semibold bg-transparent rounded-lg border-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-secondary/30 peer" placeholder=" " />
            <p className='bg-red-500 text-white mt-0.5 rounded-lg w-[298px] px-4 '>{fullNamErr}</p>
            <label for="floating_outlined2" class="absolute text-sm text-secondary/70 duration-300 transform  -translate-y-4 top-2 z-10 origin-[0] bg-white  px-4 peer-focus:px-4 peer-focus:text-secondary/70  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-2/5 rtl:peer-focus:left-auto start-4">Full Name</label>
          </div>
          <div class="relative my-[34px] w-[368px]">
            <input onChange={handlePassword} className=' text-xl py-[26px] px-[26px] border-2  border-gray-300 appearance-none rounded-[9px] focus:outline-none focus:border-secondary/30 peer xl:w-[368px]' type= {show ? "text" : "password"} />
            {
              show ?
                <IoEyeSharp onClick={()=>setshow(!show)} className='absolute top-[31px] right-[24px] cursor-pointer ' />
                :
                <IoMdEyeOff onClick={()=>setshow(!show)} className='absolute top-[31px] right-[24px] cursor-pointer ' />
            }

            <p className='bg-red-500 text-white mt-0.5 rounded-lg w-[298px] px-4 '>{passwordErr}</p>
            <label class="absolute text-sm text-secondary/70 duration-300 transform  -translate-y-4 top-2 z-10 origin-[0] bg-white  px-4 peer-focus:px-4 peer-focus:text-secondary/70  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-2/5 rtl:peer-focus:left-auto start-4">Password</label>
          </div>

          <div className="w-[368px] text-center ">
            <button onClick={handleRegistration} className=' w-full font-semibold font-nunito text-[20px text-white py-[20px]  px-[150px] bg-black rounded-[86px] mt-[51px]  ' >Sign up</button>
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
