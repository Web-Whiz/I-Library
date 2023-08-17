import PopularAuthors from "@/Page/Home/PopularAuthors/PopularAuthors";
import Link from "next/link";
import banner from "@/assets/banner01.jpg";
import PageBanner from "@/Components/PageBanner/PageBanner";

const CategoryPage = () => {
  const categories = [
    {
      id: 1,
      category_name: "Fiction",
    },
    {
      id: 3,
      category_name: "Fantasy",
    },
    {
      id: 4,
      category_name: "Mystery",
    },
    {
      id: 5,
      category_name: "Thriller",
    },
    {
      id: 6,
      category_name: "Romance",
    },

    {
      id: 8,
      category_name: "Horror",
    },
    {
      id: 9,
      category_name: "Adventure",
    },

    {
      id: 11,
      category_name: "Kid's Books",
    },

    {
      id: 13,
      category_name: "Biography",
    },

    {
      id: 15,
      category_name: "Science",
    },
    {
      id: 16,
      category_name: "History",
    },
    {
      id: 17,
      category_name: "Philosophy",
    },
  ];

  return (
    <div>
      <div>
        <PageBanner bannerImg={banner} bannerName="Category" />
      </div>
      <section className="container mx-auto p-5 mt-20 mb-40">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
          {categories.map((category) => (
            <Link id={category?.id} href="/">
              <div className="w-full overflow-hidden h-16 bg-indigo-200 border-solid border border-indigo-400 rounded-md flex items-center justify-center text-[#333333] group relative hover:text-white hover:transition-all">
                <div className="absolute w-full h-full top-0 left-0 -translate-x-full duration-200 group-hover:translate-x-0 bg-indigo-500" />
                <h6 className="text-lg font-medium z-10">
                  {category?.category_name}
                </h6>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center mt-12">
          <button
            type="button"
            className="w-60 h-16 border-solid border border-indigo-400 text-lg font-medium rounded-md text-[#333333] hover:bg-indigo-500 hover:text-white hover:transition-all"
          >
            See All
          </button>
        </div>
      </section>
      {/* Popular Authors */}
      <PopularAuthors></PopularAuthors>
    </div>
  );
};

export default CategoryPage;
