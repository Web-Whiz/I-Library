"use client";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getBook } from "./useBooks";

const useQA = () => {
  const { user } = useAuth();
  const [book] = getBook();
  const { data: qas = [], refetch } = useQuery({
    queryKey: ["qa", book._id],
    queryFn: async () => {
      const res = await fetch(
        `https://i-library-server.vercel.app/qa/${book._id}`
      );
      return res.json();
    },
  });
  return [qas, refetch];
};

export default useQA;
