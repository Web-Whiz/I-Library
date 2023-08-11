import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const AuthorCard = ({ author }) => {
  return (
    <div className="w-52 h-[297px] bg-white rounded-lg p-4 hover:shadow-lg cursor-pointer">
      <img
        style={{ width: "170px", height: "170px" }}
        className="mx-auto"
        src={author?.author_img}
        alt={author?.author_name}
      />
      <h6 className="text-[#464343] text-base text-center mt-2">
        {author?.author_name}
      </h6>
      <p className="text-[#B8B8B8] font-medium text-sm text-center my-3">
        {author?.books_published} Books Published
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="w-6 h-6 bg-[#C8C8C8] hover:bg-[#1877F2] rounded-full flex items-center justify-center">
          <Link href={author?.facebook_link}>
            <FaFacebookF className="text-white"></FaFacebookF>
          </Link>
        </div>

        <div className="w-6 h-6 bg-[#C8C8C8] hover:bg-[#1DA1F2] rounded-full flex items-center justify-center">
          <Link href={author?.twitter_link}>
            <FaTwitter className="text-white"></FaTwitter>
          </Link>
        </div>

        <div className="w-6 h-6 bg-[#C8C8C8] hover:bg-[#0A66C2] rounded-full flex items-center justify-center">
          <Link href={author?.linkedin_link}>
            <FaLinkedin className="text-white"></FaLinkedin>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
