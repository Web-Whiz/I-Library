export const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books");
  const data = res.json();
  return data;
};
