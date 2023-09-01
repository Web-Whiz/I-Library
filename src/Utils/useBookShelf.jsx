import { useQuery } from "@tanstack/react-query";

export const getBookShelf = (email) => {
  const { data: bookShelf = [], refetch } = useQuery({
    queryKey: ["book shelf", email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/book-shelf?email=${email}`
      );
      return res.json();
    },
  });

  return [bookShelf, refetch];
};

export const getShelfBooks = (id) => {
  const {
    data: shelfBooks = [],
    isLoading,
    refetch,
  } = useQuery(["shelf book", id], async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/book-shelf/${id}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      throw new Error(error.message);
    }
  });

  return [shelfBooks, isLoading, refetch];
};
