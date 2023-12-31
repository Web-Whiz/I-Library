import Footer from "@/Components/Footer/Footer";
import MenuItem from "@/Components/Navbar/MenuItem";
import Navbar from "@/Components/Navbar/Navbar";

const HomeLayout = ({ children }) => {
  return (
      <div className=" bg-[#EFF3F8]">
        <Navbar />
        <div className="hidden lg:block">
          <MenuItem />
        </div>
        <main>{children}</main>
        <Footer />
      </div>
  );
};

export default HomeLayout;
