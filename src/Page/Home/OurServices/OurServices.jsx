import Image from "next/image";

import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";

const OurServices = () => {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="text-center mb-10">
        <h1 className="capitalize font-bold text-3xl mb-3 text-[#0F86CD]">
          Our Services
        </h1>
        <h3 className=" max-w-[450px] mx-auto">
          Explore our most borrowed, loved, and timeless books. Join the
          literary journey today!
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        <div className="bg-rose-500 bg-opacity-80 p-8 hover:shadow-lg hover:bg-opacity-100 duration-300 cursor-pointer">
          <Image
            src={icon1}
            alt="service image 1"
            className="mx-auto"
            width={50}
            height={50}
            quality={100}
          />
          <h5 className="text-center font-bold text-white text-2xl mb-2">
            Books
          </h5>
          <p>
            Join discussions, share stories, and connect with fellow readers.
          </p>
        </div>

        <div className="bg-green-500 bg-opacity-50  p-8 hover:shadow-lg hover:bg-opacity-100 duration-300 cursor-pointer">
          <Image
            src={icon2}
            alt="service image 2"
            className="mx-auto"
            width={50}
            height={50}
            quality={100}
          />
          <h5 className="text-center font-bold text-white text-2xl mb-2">
            eBooks
          </h5>
          <p>
            Join discussions, share stories, and connect with fellow readers.
          </p>
        </div>

        <div className="bg-gray-500 bg-opacity-50  p-8 hover:shadow-lg hover:bg-opacity-100 duration-300 cursor-pointer">
          <Image
            src={icon3}
            alt="service image 3"
            className="mx-auto"
            width={50}
            height={50}
            quality={100}
          />
          <h5 className="text-center font-bold text-white text-2xl mb-2">
            Audio Books
          </h5>
          <p>
            Join discussions, share stories, and connect with fellow readers.
          </p>
        </div>

        <div className="bg-fuchsia-600 bg-opacity-50  p-8 hover:shadow-lg hover:bg-opacity-100 duration-300 cursor-pointer">
          <Image
            src={icon1}
            alt="service image 4"
            className="mx-auto"
            width={50}
            height={50}
            quality={100}
          />
          <h5 className="text-center font-bold text-white text-2xl mb-2">
            Magazines
          </h5>
          <p>
            Join discussions, share stories, and connect with fellow readers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
