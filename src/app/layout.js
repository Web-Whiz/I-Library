import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "I Library",
  description: "A Library Service to Encourage Reading",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EFF3F8]`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
