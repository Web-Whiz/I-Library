import React from 'react';

const DashboardHome = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-4 ">
                    {/* Page content here */}

                    <div>
                        <div className='bg-[#0F86CD] p-3 rounded-md flex flex-col md:flex-row gap-4 items-center'>
                            <h1 className='font-bold text-2xl text-white'>Personal Information</h1>
                            <p className='text-black cursor-pointer font-semibold hover:underline'>Change Information</p>
                        </div>

                        <div>
                            <h4 className='mt-10'>Profile Picture</h4>
                            <img className="avatar w-24 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=200&q=80" />
                        </div>

                        <form className='text-black flex flex-col gap-4'  >
                            <label htmlFor="name">Name</label>
                            <input
                                className='w-full p-2 font-bold outline-none bg-white rounded-md'
                                type="text"
                                name="name"
                                id="name"
                                defaultValue='John Doe' />

                            <label htmlFor="email">Email</label>
                            <input
                                className='w-full p-2 font-bold outline-none bg-white rounded-md'
                                type="email"
                                name="email"
                                id="email"
                                defaultValue='john@doe.com' />

                            <label htmlFor="phone">Phone</label>
                            <input
                                className='w-full p-2 font-bold outline-none bg-white rounded-md'
                                type="number"
                                name="phone"
                                id="phone"
                                defaultValue='01003082245' />

                            <label htmlFor="dateOfBirth">Date Of Birth</label>
                            <input
                                className='w-full p-2 font-bold outline-none bg-white rounded-md'
                                type="text"
                                name="dateOfBirth"
                                id="dateOtBirth"
                                defaultValue='01.01.01' />


                        </form>

                    </div>


                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 h-full bg-white  text-[#3d3c3c]">
                        {/* Sidebar content here */}

                        <div className='bg-[#0F86CD] text-white flex p-4 rounded-md'>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=200&q=80" />
                                </div>
                            </label>
                            <div className='ml-2'>
                                <p>Hello</p>
                                <h1 className='text-lg font-bold'>John Doe</h1>
                            </div>
                        </div>
                        <li className='font-bold text-lg bg-slate-200 hover:shadow-sm my-1 rounded-md'><a>My Account</a></li>
                        <li className='font-bold text-lg bg-slate-200 hover:shadow-sm my-1 rounded-md'><a>Cart</a></li>
                        <li className='font-bold text-lg bg-slate-200 hover:shadow-sm my-1 rounded-md'><a>My Orders</a></li>
                        <li className='font-bold text-lg bg-slate-200 hover:shadow-sm my-1 rounded-md'><a> Order History</a></li>
                        <li className='font-bold text-lg bg-slate-200 hover:shadow-sm my-1 rounded-md'><a> My LIst </a></li>
                        <li className='font-bold text-lg bg-slate-200 hover:shadow-sm my-1 rounded-md'><a> My Wish LIst </a></li>
                        <li className='font-bold text-lg bg-slate-200 hover:shadow-sm my-1 rounded-md'><a> Payment History </a></li>
                        <li className='font-bold text-lg bg-slate-200 hover:shadow-sm my-1 rounded-md'><a> My Reviews </a></li>
                    </ul>

                </div>
            </div>
        </div>


    );
};

export default DashboardHome;