import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useWishList = () => {
  const { user, loading } = useAuth();

  const { data: wishListBooks = [], refetch } = useQuery({
    queryKey: ["wishListBooks"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/wish-list?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [wishListBooks, refetch];
};

export default useWishList;
