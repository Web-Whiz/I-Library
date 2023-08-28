const imgHostingToken = process.env.NEXT_PUBLIC_ImgHostingToken;
const usePhotoUpload = async (img) => {
  const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;
  const formData = new FormData();
  formData.append("image", img);

  return await fetch(imgHostingURL, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imgResponse) => {
      if (imgResponse.success) {
        const imgURL = imgResponse.data.display_url;
        return imgURL;
      } else {
        throw new Error("Image upload failed");
      }
    })
    .catch((error) => {
      console.error("Image upload error:", error);
      throw error;
    });
};

export default usePhotoUpload;
