// "use client";
// import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getBook } from "./useBooks";

const useQA = () => {
  const [book] = getBook();
  const [qas, setQas] = useState([]);

  const fetchQas = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/qa/${book._id}`
      );
      const data = await res.json();
      setQas(data);
    } catch (error) {
      console.error("Error fetching qas:", error);
    }
  };

  return [qas, fetchQas];
};

export default useQA;
