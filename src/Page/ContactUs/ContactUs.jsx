import PageTitleBanner from '@/Components/PageTitleBanner/PageTitleBanner';
import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <PageTitleBanner />

            {/* Contact us form section  */}
            <section className=' container mx-auto flex flex-col md:flex-row h-full md:h-[450px]  w-full bg-slate-50 p-4'>

                {/* contact form */}
                <form className='flex flex-col justify-between gap-4 p-3 w-full '>
                    <input
                        className=" border rounded w-full  p-3 font-bold bg-slate-200  focus:outline-none "
                        type="text"
                        name="" id=""
                        placeholder='Enter Your Name' />

                    <input
                        className=" border rounded w-full  p-3 font-bold bg-slate-200  focus:outline-none "
                        type="email"
                        name=""
                        id="" 
                        placeholder="Enter your Email"
                        required/>

                    <input
                        className=" border rounded w-full  p-3 font-bold bg-slate-200  focus:outline-none "
                        type="number"
                        name=""
                        id="" 
                        placeholder="Enter your Phone Number"
                        required/>

                    <textarea
                        className=" border rounded w-full  p-3 font-bold bg-slate-200  focus:outline-none "
                        name="message"
                        rows="3"
                        placeholder="Enter your message"
                        required
                    ></textarea>
                    <input 
                    className=" border rounded w-full  p-3 text-white bg-[#0F86CD] hover:bg-blue-950 transition duration-500 font-bold   focus:outline-none " 
                    type="submit" 
                    name="" 
                    id="" />
                </form>


                {/* Address */}
                <div className='container mx-auto flex flex-col justify-between gap-4 p-3 w-full font-bold'>
                    <div className='bg-slate-200 p-3 rounded'>
                        <p>Address: 2/1/E, Eden Center,<br /> Arambagh Motijheel,<br /> Dhaka-1000Bangladesh</p>
                    </div>
                    <div className='h-full w-full'>
                        <img className=' h-full w-fit' src="https://developers.google.com/static/maps/images/landing/hero_mobile_maps_sdks_480.png" alt="" />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ContactUs;