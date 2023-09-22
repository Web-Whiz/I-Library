"use client";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-opacity-40 shadow-lg">
        <div className="h-12 w-12 rounded-full bg-blue-500 bg-opacity-60"></div>
      </div>
    </div>
  );
};

export default Loading;
