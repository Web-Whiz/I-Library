import Banner from "@/Page/Home/Banner/Banner";
import DonateBook from "@/Page/Home/DonateBook/DonateBook";
import OurServices from "@/Page/Home/OurServices/OurServices";
import PopularAuthors from "@/Page/Home/PopularAuthors/PopularAuthors";
import RequestBook from "@/Page/Home/RequestBook/RequestBook";
import Testimonials from "@/Page/Home/Testimonials/Testimonials";
import NewReleasedBook from "@/Page/Home/newReleasedBook/NewReleasedBook";
import PopularBooks from "@/Page/Home/popularBooks/PopularBooks";
import React from "react";

const page = () => {
  return (
    <div className="space-y-28">
      <Banner />
      <NewReleasedBook />
      <RequestBook />
      <PopularBooks />
      <DonateBook />
      <Testimonials />
      <OurServices />
      <PopularAuthors />
    </div>
  );
};

export default page;
