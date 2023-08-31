"use client";
import { useQuery } from "@tanstack/react-query";

export const getBooks = () => {
  const { data: allBooks = [], refetch } = useQuery({
    queryKey: ["all books"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BaseURL}/books`);
      return res.json();
    },
  });

  return [allBooks, refetch];
};

export const getBook = (id) => {
  const { data: book = [], refetch } = useQuery({
    queryKey: ["book"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BaseURL}/book/${id}`);
      return res.json();
    },
  });

  return [book, refetch];
};

export const getBookCategory = () => {
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/books/category`
      );
      return res.json();
    },
  });

  return [categories, refetch];
};

export const getCategoryFilteredBook = (categoryNames) => {
  const categoriesQueryString = categoryNames.join(",");
  console.log(categoryNames);
  const { data: categoryFilteredBook = [], refetch } = useQuery({
    queryKey: ["categoryFilteredBook"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/books/category-filter?categories=${categoriesQueryString}`
      );
      return res.json();
    },
  });

  return [categoryFilteredBook, refetch];
};

export const getBookAuthor = () => {
  const { data: authors = [], refetch } = useQuery({
    queryKey: ["authors"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/books/author`
      );
      return res.json();
    },
  });

  return [authors, refetch];
};
export const getBookPublisher = () => {
  const { data: publishers = [], refetch } = useQuery({
    queryKey: ["publishers"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/books/publisher`
      );
      return res.json();
    },
  });

  return [publishers, refetch];
};
