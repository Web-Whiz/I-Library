"use client";
import useAuth from "@/Utils/useAuth";

const RequestedBook = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>This is requested books {user?.email}</h1>
    </div>
  );
};

export default RequestedBook; // Component names should start with an uppercase letter
