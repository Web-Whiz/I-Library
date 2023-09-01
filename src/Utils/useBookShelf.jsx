import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

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

export const postBookShelf = (addedBook) => {
  fetch(`${process.env.NEXT_PUBLIC_BaseURL}/book-shelf`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addedBook),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId || data.modifiedCount >= 1) {
        toast.success("Book added successfully");
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message);
    });
};


export const updateShelfName = (id, shelfName) => {
  fetch(`${process.env.NEXT_PUBLIC_BaseURL}/book-shelf?id=${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shelfName),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId || data.modifiedCount >= 1) {
        toast.success("Shelf name updated successfully");
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message);
    });
};
