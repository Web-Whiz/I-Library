import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { MdLock, MdEmail } from "react-icons/md";
const Login = () => {
    return (
        <div className="bg-white  max-w-[700px] mx-auto border shadow-md my-4">
            {/* Login Banner */}
            <div>
                <div className='relative w-full h-60'>
                    <div className='w-full h-full'>
                        <img className='w-full h-full' src='/banner01.jpg' alt="banner Image" />
                    </div>
                    <div className='absolute top-0 w-full h-full flex flex-col bg-[#000000a2] items-center justify-center text-white '>
                        <h1 className='font-bold text-center text-3xl'>Join Us Again</h1>
                        <p className=' font-bold text-center text-lg'>Reconnect through Your Account Login</p>
                    </div>
                </div>
            </div>

            <div className="p-12">
                <h1 className="text-center my-8 text-3xl font-bold">Login Here  </h1>
                <form >
                    <div className="flex items-center my-10 ">
                        <span className="bg-slate-100 p-[14px]"><MdEmail className="w-full text-[#0F86CD] text-2xl" /></span>
                        <input className="text-lg p-3 bg-slate-300 font-bold w-full outline-none" type="email" name="" id="" placeholder="Email" required />
                    </div>

                    <div className="flex items-center  my-10">
                        <span className="bg-slate-100 p-[14px]"><MdLock className="w-full text-[#0F86CD] text-2xl" /></span>
                        <input className="text-lg p-3 bg-slate-300 font-bold w-full outline-none" type="password" name="" id="" placeholder="Password" required />
                    </div>


                    <div className="flex flex-col sm:flex-row justify-between my-2">
                        <p className="hover:underline text-[#0F86CD]">Forgot Password?</p>
                        <p>Don't Have An Account?<Link href="/register" className="hover:underline text-[#0F86CD]">Register</Link></p>
                    </div>
                    <input className="text-xl text-white p-2 bg-[#0F86CD] font-bold w-full" type="submit" value="Login" />
                </form>
                <div className="flex flex-col sm:flex-row justify-between gap-8 my-8 text-center">
                    <p className="flex items-center justify-center text-lg p-2 w-full font-bold bg-blue-950 text-center "><BsGoogle className="text-white text-3xl " /></p>
                    <p className="flex items-center justify-center text-lg p-2 w-full font-bold bg-blue-950 text-center "><FaFacebookF className="text-white text-3xl " /></p>
                </div>
            </div>
        </div>
    );
};

export default Login;