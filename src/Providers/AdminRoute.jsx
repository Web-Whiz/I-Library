"use client";

import Loading from "@/Components/Loading/Loading";
import useAuth from "@/Utils/useAuth";
import useRole from "@/Utils/useRole";
import { useRouter } from "next/navigation";

const AdminRoute = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [role] = useRole();
  console.log(role?.role);
    if (loading) {
    return (
      <Loading />
    );
  }
  if (!user || role?.role !== "admin") {
    router.push("/");
    return;
  }

  return children;
};
export default AdminRoute;
