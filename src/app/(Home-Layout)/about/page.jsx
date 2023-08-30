import React from "react";
// // import bg from "../../../assets/banner01.jpg"
// import bg from "@/assets/banner01"
import Link from "next/link";
const About = () => {
  return (
    <div>
      <div>
        {/* About Banner */}
        <div className="w-full relative">
          <img
            className="w-full h-screen"
            src="https://i.pinimg.com/1200x/8c/74/bb/8c74bb4e959d7211e27c10b5980cb970.jpg"
          />
          <div className="absolute inset-0 bg-black opacity-70 rounded-l-xl"></div>
          <div className="absolute inset-0 text-white flex flex-col items-center justify-start mt-4">
            <strong className=" text-6xl mb-6 p-12 text-center">
              Welcome to Internet Library!
            </strong>
            <p className="text-4xl font-bold py-12">About Us</p>
            <p className="px-56 py-2 leading-relaxed">
              Welcome to the virtual haven for book lovers and knowledge seekers
              – Internet Library. As an innovative online platform, we bring the
              world of books and learning right to your fingertips. Imagine
              having a vast library of literary treasures accessible from the
              comfort of your own space, available whenever inspiration strikes
              or curiosity beckons.
            </p>

            <p className="px-56 py-2 leading-relaxed">
              Our digital shelves are stocked with an array of books that cater
              to every interest, age group, and intellectual pursuit. From
              timeless classics that have shaped civilizations to contemporary
              masterpieces that challenge conventions, our collection is a
              testament to the rich tapestry of human thought and creativity.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="lg:py-16">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <img
              src="https://i.ibb.co/qstqKQM/owl.png"
              className="max-w-sm w-full lg:w-1/2 mx-auto"
              data-aos="fade-right"
              data-aos-duration="2000"
            />
            <div
              className="lg:w-1/2 px-6"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h1 className="text-5xl font-bold">Our Vision</h1>
              <p className="py-6 lg:pr-48">
                Our vision is to foster a vibrant online community of readers,
                where knowledge is shared, stories are enjoyed, and connections
                are made. Whether you're an avid reader, a student in search of
                resources, or someone looking to broaden your horizons, Internet
                Library is here to support your intellectual journey.
              </p>
              <button className="btn btn-primary">Visit Shop</button>
            </div>
          </div>
        </div>

        {/* Membership Benefits */}
        <div className="py-24">
          <div className="flex flex-col items-center lg:flex-row-reverse space-y-6">
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              src="https://www.pngkey.com/png/detail/303-3032994_membership-icon-1-png-talk-the-talk-a.png"
              alt="3d printer"
              className="w-10/12 lg:w-1/2 rounded-lg"
            />
            <div
              className="text-right mx-10"
              data-aos="fade-up-right"
              data-aos-duration="4000"
            >
              <h1 className="text-5xl font-bold">Membership Benefits</h1>
              <p className="py-3">
                By becoming a member of Internet Library, you unlock a realm of
                literary possibilities. Our memberships are designed to cater to
                different reading preferences and needs, providing you with
                unlimited access to our digital library. From fiction to
                non-fiction, self-help to academic resources, our collection
                caters to readers of all ages and interests.
              </p>
            </div>
          </div>
        </div>

        {/* Community */}
        <div className="w-full relative">
          <img
            className="w-full h-screen"
            src="https://4651150.fs1.hubspotusercontent-na1.net/hubfs/4651150/Header%20Image%20%281%29-2.png"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 text-white flex flex-row items-center justify-start mt-4">
            <div className="flex items-center">
              <div>
                {" "}
                <p className="text-4xl font-bold py-12 text-center">Who We Are</p>
                <p className="px-56 py-2 leading-relaxed">
                  At Internet Library, we're passionate about creating
                  convenient and accessible opportunities for people to embrace
                  the joy of reading. Our team is dedicated to curating a
                  diverse selection of books spanning various genres, from
                  classics to contemporary bestsellers. We are driven by the
                  belief that reading is a gateway to personal enrichment and
                  lifelong learning.
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold py-12 text-center">How It Works</p>
                <p className="px-56 py-2 leading-relaxed">
                  Joining Internet Library is simple. Choose a membership plan
                  that suits you best, whether it's a monthly or annual
                  subscription. Once you're a member, you can browse our
                  expansive catalog, borrow e-books, and start reading
                  instantly. No more waiting in lines or worrying about due
                  dates – our virtual library is open 24/7, allowing you to read
                  at your own pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
