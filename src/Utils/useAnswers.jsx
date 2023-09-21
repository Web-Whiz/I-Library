// "use client";
// import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useAnswers = () => {
  const [answers, setAnswers] = useState([]);

  const fetchAnswers = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BaseURL}/qa`);
      const data = await res.json();
      setAnswers(data);
    } catch (error) {
      console.error("Error fetching qas:", error);
    }
  };

  return [answers, fetchAnswers];
};

export default useAnswers;
