import PageBanner from "@/Components/PageBanner/PageBanner";
import banner from "@/assets/banner01.jpg";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <PageBanner
        bannerName="Contact us"
        bannerImg={banner}
        bannerSubTitle="Share your query and ideas with us!"
      />

      {/* Contact us form section  */}
      <section className=" container my-20 mx-auto flex flex-col md:flex-row h-fit w-full bg-slate-50 p-4">
        {/* contact form */}
        <form className="flex flex-col gap-4 p-3 w-full ">
          <input
            className=" border rounded w-full  p-3 font-normal bg-slate-200  focus:outline-none "
            type="text"
            placeholder="Enter Your Name"
          />

          <input
            className=" border rounded w-full  p-3 font-normal bg-slate-200  focus:outline-none "
            type="email"
            placeholder="Enter your Email"
            required
          />

          <input
            className=" border rounded w-full  p-3 font-normal bg-slate-200  focus:outline-none "
            type="number"
            placeholder="Enter your Phone Number"
            required
          />

          <textarea
            className=" border rounded w-full min-h-[200px] md:min-h-[272px] max-h-[272px]  p-3 font-normal bg-slate-200  focus:outline-none "
            name="message"
            rows="3"
            placeholder="Enter your message"
            required
          ></textarea>
          <input
            className=" border rounded w-full  p-3 text-white bg-indigo-700 hover:bg-blue-950 transition duration-500 font-bold   focus:outline-none "
            type="submit"
            name=""
            id=""
          />
        </form>

        {/* Address */}
        <div className="container mx-auto flex flex-col justify-between gap-4 p-3 w-full font-medium">
          <div className="bg-slate-200 p-3 rounded">
            <p>
              Address: 2/1/E, Eden Center,
              <br /> Arambagh Motijheel,
              <br /> Dhaka-1000Bangladesh
            </p>
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              className="w-full h-full"
              src="https://developers.google.com/static/maps/images/landing/hero_mobile_maps_sdks_480.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
