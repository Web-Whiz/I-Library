import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const AuthorCard = ({ author }) => {
  return (
    <div className="w-52 h-[297px] bg-white rounded-lg p-4 hover:shadow-lg cursor-pointer">
      <img
        style={{ width: "170px", height: "170px" }}
        className="mx-auto"
        src={author?.author_img}
        alt={author?.author}
      />
      <h6 className="text-[#464343] text-base text-center mt-2">
        {author?.author}
      </h6>
      <p className="text-[#B8B8B8] font-medium text-sm text-center my-3">
        {/* {author?.books_published} Books Published */}
        120 Books Published
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="w-6 h-6 bg-[#C8C8C8] hover:bg-[#1877F2] rounded-full flex items-center justify-center">
          <Link href="https://www.facebook.com">
            <FaFacebookF className="text-white"></FaFacebookF>
          </Link>
        </div>

        <div className="w-6 h-6 bg-[#C8C8C8] hover:bg-[#1DA1F2] rounded-full flex items-center justify-center">
          <Link href="https://www.twitter.com/">
            <FaTwitter className="text-white"></FaTwitter>
          </Link>
        </div>

        <div className="w-6 h-6 bg-[#C8C8C8] hover:bg-[#0A66C2] rounded-full flex items-center justify-center">
          <Link href="https://www.linkedin.com/">
            <FaLinkedin className="text-white"></FaLinkedin>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
