import Footer from "@/Components/Footer/Footer";
import MenuItem from "@/Components/Navbar/MenuItem";
import Navbar from "@/Components/Navbar/Navbar";

const LoginLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="my-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default LoginLayout;
