import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner01.jpg";

const AuthorPage = () => {
  const authors = [
    {
      id: 1,
      author_img:
        "https://www.writermag.com/wp-content/uploads/2015/09/russell-banks.jpg",
      author_name: "William Blake",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 2,
      author_img:
        "https://blog.workman.com/wp-content/uploads/2018/10/Jim-Mustich-Color-%C2%A9-Trisha-Keeler-Photography-200x300.jpg",
      author_name: "Lewis Caroll",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 3,
      author_img:
        "https://septemberpublishing.org/wp-content/uploads/2021/03/Bruce-Fogle-3.jpg",
      author_name: "Ernest Hamingway",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 4,
      author_img:
        "https://www.writermag.com/wp-content/uploads/2015/09/russell-banks.jpg",
      author_name: "William Blake",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 5,
      author_img:
        "https://images.squarespace-cdn.com/content/v1/5784b8d1b8a79b20f4381bc5/1627468750772-OTVPYEWT5VGUTREJOHNM/Glenn+Adamson+c.John+Michael+Kohler.jpg",
      author_name: "Lewis Caroll",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 6,
      author_img:
        "https://library.nashville.org/sites/default/files/images/blog/rashad_rayford_civil_freestyle.jpg",
      author_name: "Ernest Hamingway",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 7,
      author_img:
        "https://www.writermag.com/wp-content/uploads/2015/09/russell-banks.jpg",
      author_name: "Ernest Hamingway",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 8,
      author_img:
        "https://blog.workman.com/wp-content/uploads/2018/10/Jim-Mustich-Color-%C2%A9-Trisha-Keeler-Photography-200x300.jpg",
      author_name: "William Blake",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 9,
      author_img:
        "https://septemberpublishing.org/wp-content/uploads/2021/03/Bruce-Fogle-3.jpg",
      author_name: "Lewis Caroll",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 10,
      author_img:
        "https://www.writermag.com/wp-content/uploads/2015/09/russell-banks.jpg",
      author_name: "Ernest Hamingway",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 11,
      author_img:
        "https://images.squarespace-cdn.com/content/v1/5784b8d1b8a79b20f4381bc5/1627468750772-OTVPYEWT5VGUTREJOHNM/Glenn+Adamson+c.John+Michael+Kohler.jpg",
      author_name: "Lewis Caroll",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
    {
      id: 12,
      author_img:
        "https://library.nashville.org/sites/default/files/images/blog/rashad_rayford_civil_freestyle.jpg",
      author_name: "William Blake",
      books_published: 120,
      facebook_link: "https://www.facebook.com",
      twitter_link: "https://www.twitter.com",
      linkedin_link: "https://www.linkedin.com",
    },
  ];
  return (
    <div>
      <div className="relative">
        <Image
          className="h-60 object-cover w-full object-center"
          src={banner}
          alt="Author related banner"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-950/10 backdrop-blur-md" />
        <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-white font-bold">
          Author
        </h2>
      </div>
      <section className="container mx-auto p-5 mt-20 mb-40">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-8 md:gap-y-16">
          {authors.map((author) => (
            <Link
              id={author?.id}
              href="/"
              className="flex items-center justify-center"
            >
              <div className="text-center text-gray-900 hover:text-indigo-700">
                <img
                  style={{ width: "140px", height: "140px" }}
                  src={author?.author_img}
                  alt={author?.author_name}
                  className="rounded-full mx-auto border-2 border-solid border-gray-500 hover:border-indigo-500 transition-all"
                />
                <h6 className="text-lg font-medium text-center mt-5">
                  {author?.author_name}
                </h6>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center mt-16">
          <button
            type="button"
            className="w-60 h-16 border-solid border border-indigo-400 text-lg font-medium rounded-md text-[#333333] hover:bg-indigo-500 hover:text-white hover:transition-all"
          >
            See All
          </button>
        </div>
      </section>
    </div>
  );
};

export default AuthorPage;
