"use client";
import AdminNavbar from "@/Page/AdminDashboard/AdminNavbar";
import AdminRoute from "@/Providers/AdminRoute";
import useAuth from "@/Utils/useAuth";
import Hamburger from "hamburger-react";

const DashboardLayout = ({ children }) => {
  const { isDashboardOpen, setIsDashboardOpen, user } = useAuth();
  return (
    <AdminRoute>
      <html lang="en" data-theme="light">
        <body className="bg-[#EFF3F8]">
          <section className="flex">
            <nav
              className={`lg:block min-h-screen fixed top-0 left-0 z-50 bg-white border-r-2 w-[65%] md:w-[35%] lg:w-[22%] xl:w-[16%] ${
                isDashboardOpen
                  ? "translate-x-0 origin-right duration-500"
                  : "-translate-x-[101%] lg:translate-x-0 origin-right duration-500"
              }`}
            >
              <AdminNavbar />
            </nav>
            <main className="w-full lg:ml-[22%] xl:ml-[16%]">
              <header className="bg-white py-4 w-full flex justify-between lg:justify-end px-6">
                <aside className="block lg:hidden">
                  <Hamburger
                    size={24}
                    toggled={isDashboardOpen}
                    toggle={setIsDashboardOpen}
                  />
                </aside>
                <aside className="flex items-center gap-6">
                  <img
                    width={50}
                    height={50}
                    className="rounded-full"
                    src={user?.photoURL}
                    alt="profile photo"
                  />
                  <h2 className="text-[16px] font-medium text-gray-800">
                    {user?.displayName}
                  </h2>
                </aside>
              </header>
              <div className="p-4">{children}</div>
            </main>
          </section>
        </body>
      </html>
    </AdminRoute>
  );
};

export default DashboardLayout;
