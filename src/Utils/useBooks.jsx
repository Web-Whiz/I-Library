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
  console.log(categoriesQueryString);
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
  console.log(categoryFilteredBook);
  return [categoryFilteredBook, refetch];
};

export const getAuthorFilteredBook = (authorNames) => {
  const authorsQueryString = authorNames.join(",");
  console.log(authorsQueryString);
  const { data: authorFilteredBook = [], refetch } = useQuery({
    queryKey: ["authorFilteredBook"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/books/author-filter?authors=${authorsQueryString}`
      );
      return res.json();
    },
  });
  console.log(authorFilteredBook);
  return [authorFilteredBook, refetch];
};

export const getCategorizedBook = (categoryName) => {
  const { data: categoryFilteredBook = [], refetch } = useQuery({
    queryKey: ["categoryFilteredBook"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/books/category-filter?categories=${categoryName}`
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
export const getAuthors = () => {
  const { data: authors = [], refetch } = useQuery({
    queryKey: ["authors"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BaseURL}/authors`);
      return res.json();
    },
  });

  return [authors, refetch];
};
export const getSpecificAuthor = (id) => {
  const { data: author = [], refetch } = useQuery({
    queryKey: ["author"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/author/${id}`
      );
      return res.json();
    },
  });

  return [author, refetch];
};
export const getSpecificAuthorBook = (authorName) => {
  const { data: authorFilteredBook = [], refetch } = useQuery({
    queryKey: ["authorFilteredBook"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/books/author-filter?authors=${authorName}`
      );
      return res.json();
    },
  });
  return [authorFilteredBook, refetch];
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

export const getSpecificPublisherBook = (publisherName) => {
  const { data: publisherFilteredBook = [], refetch } = useQuery({
    queryKey: ["publisherFilteredBook"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/books/publisher-filter?publishers=${publisherName}`
      );
      return res.json();
    },
  });
  return [publisherFilteredBook, refetch];
};

export const getPublisherFilteredBook = (publisherNames) => {
  const publishersQueryString = publisherNames.join(",");
  console.log(publishersQueryString);
  const { data: publisherFilteredBook = [], refetch } = useQuery({
    queryKey: ["publisherFilteredBook"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BaseURL}/books/publisher-filter?publishers=${publishersQueryString}`
      );
      return res.json();
    },
  });
  console.log(publisherFilteredBook);
  return [publisherFilteredBook, refetch];
};
