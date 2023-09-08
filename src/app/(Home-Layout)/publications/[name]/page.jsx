"use client";
import BookCard from "@/Components/BookCard/BookCard";
import PageBanner from "@/Components/PageBanner/PageBanner";
import { getSpecificPublisherBook } from "@/Utils/useBooks";
import banner from "@/assets/banner01.jpg";
import { useParams } from "next/navigation";

const Publication = () => {
  const params = useParams();
  const publicationName = params.name;
  const [publisherFilteredBook] = getSpecificPublisherBook(publicationName);

  return (
    <div>
      <PageBanner bannerImg={banner} bannerName={publicationName} />
      <section className="container mx-auto p-5 my-20">
        <h2 className="font-semibold text-center text-xl mb-10">
          All of the books from {publicationName}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-10 md:gap-x-8 md:gap-y-16">
          {publisherFilteredBook.map((book) => (
            <BookCard key={book?._id} book={book}></BookCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Publication;
