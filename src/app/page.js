import Banner from "@/Page/Home/Banner/Banner";
import OurServices from "@/Page/Home/OurServices/OurServices";
import PopularAuthors from "@/Page/Home/PopularAuthors/PopularAuthors";
import Testimonials from "@/Page/Home/Testimonials/Testimonials";
import NewReleasedBook from "@/Page/Home/newReleasedBook/NewReleasedBook";
import PopularBooks from "@/Page/Home/popularBooks/PopularBooks";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <NewReleasedBook />
      <PopularBooks/>
      <Testimonials/>
     <div className="mt-20">
     <OurServices/>
     </div>
     <PopularAuthors/>
    </div>
  );
};

export default page;
