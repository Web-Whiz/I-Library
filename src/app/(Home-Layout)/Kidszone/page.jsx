"use client";
import { getKidsZoneBook } from "@/Utils/useBooks";
import { useEffect } from "react";
import BannerPage from "./Bannerkids/Page";
import Singledatapage from "./Singledata/page";
import "./main.css";

const page = () => {
  //   const [categories] = getBookCategory();
  // console.log(categories);

  const [KidsZoneBook, refetch] = getKidsZoneBook();

  // console.log(KidsZoneBook);

  useEffect(() => {
    refetch();
  }, [KidsZoneBook]);

  return (
    <div>
      <BannerPage />
      <div className="grid hello grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center lg:justify-self-end gap-4 p-10">
        {KidsZoneBook.map((KidsZoneBook, index) => (
          <Singledatapage key={index} KidsZoneBook={KidsZoneBook} />
        ))}
      </div>
    </div>
  );
};

export default page;
