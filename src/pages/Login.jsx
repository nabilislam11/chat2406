import React from 'react'
import login from '../assets/login.png'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react'
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";
const Login = () => {
    const [email, setEmail ] = useState("")
    const [password, setPassword] = useState ("")
    const [show,setshow] = useState (false)
    const [emailErr,setEmailErr] = useState ("")
    const [emailValidErr, setEmailValidErr] =useState ("")
    const [passwordErr,setPassworderr] =useState ("")


    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr("")
    }

    const handlePassword =(e) =>{
        setPassword(e.target.value);
        passwordErr("")
    }
    const handleLogin = (e) => {
        console.log(email);
        console.log(password);

        if (!email) {
        setEmailErr("Enter yoour email address");
        
     }else{ 
     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
       setEmailValidErr("Emter your valid email")
        
     }
    }
     if (!password) {
        setPassworderr("Enter your password")
        
     }if (email && password) {
        console.log("Successefully login");
        setEmailemail("")
        setEmailpassword("")
        
     }
     }

    return (
        <div className="flex flex-wrap ">
            <div className=" lg:w-[55%] pl-[147px] pt-[220px] ">
                <h1 className='font-primary font-bold text-[33px] text-secondary ' > Login to your account!</h1>
                <div className="flex  items-center justify-center  gap-2.5 border-1  border-gray-300   w-[220px]  rounded-[7px] mt-[29px] mb-[32px] ">
                    <FcGoogle className='size-4  ' />
                    <p className='font-primary font-semibold text-[13px] text-secondary pt-[23px] pb-[21px]'>Login with Google</p>
                </div>
                <div className="mt-[60px] ">
                    <div className="relative my-[34px] w-[368px]">
                        <input onChange={handleEmail} className='block px-[26px] py-[26px] w-full xl:w-[368px] text-xl text-secondary font-semibold bg-transparent rounded-lg border-b-2   border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-secondary/30 peer" placeholder=" " />' type="email" />
                        <p className='bg-red-500 text-white mt-0.5 rounded-lg w-[298px] px-4 '> {emailErr} </p>
                        <p className='bg-yellow-300 text-white mt-0.5 rounded-lg w-[298px] px-4 '>{emailValidErr} </p>
                        <label for="floating_outlined2" class="absolute text-sm text-secondary/70 duration-300 transform  -translate-y-4 top-2 z-10 origin-[0] bg-white  px-4 peer-focus:px-4 peer-focus:text-secondary/70  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-2/5 rtl:peer-focus:left-auto start-4">Email Address</label>
                    </div>
                    <div className="relative my-[34px] w-[368px]">
                        <input onChange={handlePassword}
                         className='block px-[26px] py-[26px] w-full xl:w-[368px] text-xl text-secondary font-semibold bg-transparent rounded-lg border-b-2   border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-secondary/30 peer" placeholder=" " />' type={show ? "text" :"password" } />
                        <p className='bg-red-500 text-white mt-0.5 rounded-lg w-[298px]  px-4 '>{passwordErr}</p>
                        {
                            show?
                            <RiEyeFill  onClick={()=>setshow(!show)} className=' absolute top-[33px] right-[27px] ' />
                            :
                            <RiEyeCloseLine onClick={()=>setshow(!show)}  className=' absolute top-[33px] right-[27px] ' />
                        }
                        <label for="floating_outlined2" class="absolute text-sm text-secondary/70 duration-300 transform  -translate-y-4 top-2 z-10 origin-[0] bg-white  px-4 peer-focus:px-4 peer-focus:text-secondary/70  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-2/5 rtl:peer-focus:left-auto start-4">Enter your password</label>
                    </div>
                    <div className="w-[424px] ">
                        <button onClick={handleLogin}  className=' w-full font-semibold font-nunito text-[20px] text-white py-[26px]  px-[122px] bg-black rounded-[8px] mt-[51px]  ' >Login to Continue</button>
                        <p className='font-reguler font-primary text-[13px]  text-secondary  pt-[35px] pl-[17px] '>Don’t have an account ?<span className='text-orange-500 font-bold cursor-pointer'>Sign In</span> </p>

                    </div>
                </div>
            </div>
            <div className=" lg:w-[45%] ">
                <img className='w-full h-screen object-cover' src={login} alt="#login" />
            </div>
        </div >
    )
}

export default Login