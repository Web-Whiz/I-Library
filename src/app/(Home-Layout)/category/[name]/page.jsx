"use client";
import BookCard from "@/Components/BookCard/BookCard";
import PageBanner from "@/Components/PageBanner/PageBanner";
import { getCategorizedBook } from "@/Utils/useBooks";
import banner from "@/assets/banner01.jpg";
import { useParams } from "next/navigation";

const Category = () => {
  const params = useParams();
  const categoryName = params.name;
  const [categoryFilteredBook] = getCategorizedBook(categoryName);

  return (
    <div>
      <PageBanner bannerImg={banner} bannerName={categoryName} />
      <section className="container mx-auto p-5 my-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-10 md:gap-x-8 md:gap-y-16">
          {categoryFilteredBook.map((book) => (
            <BookCard key={book?._id} book={book}></BookCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;
