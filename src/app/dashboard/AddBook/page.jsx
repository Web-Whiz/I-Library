"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
const img_hosting_token = process.env.VITE_IMEGE_KEY;

const AddBook = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);
    const toastId = toast.loading("Image uploading...");
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();
      toast.dismiss(toastId);
      toast.success("Image uploaded successfully!");
      setValue("photo", data.data.url);
      console.log(data);
    } catch (error) {
      toast.error("Image not uploaded!");
      toast.dismiss(toastId);
    }
  };

  const onSubmit = async (data) => {
   
    const {
      title,
      author,
      translator,
      publisher,
      shelf,
      photo,
      edition,
      published_in,
      category,
      number_of_pages,
      language,
      country,
      ratings,
      total_read,
      added_date,
      hard_copy,
      pdf,
      ebook,
    } = data;

    const maindata = {
      title,
      author,
      translator: translator || null,
      publisher,
      shelf: parseFloat(shelf),
      image_url: photo,
      edition,
      published_in: parseFloat(published_in),
      category,
      number_of_pages: parseFloat(number_of_pages),
      language,
      country,
      ratings: parseFloat(ratings),
      total_read: parseFloat(total_read),
      added_date,
      availability: { hard_copy, pdf, ebook },
    };

    fetch(`http://localhost:5000/books`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(maindata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Book add Successful");
          reset();
        }
      });
  };

  return (
    <div>
  
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white md:p-20 p-3 rounded-md md:space-y-10  border-8 "
      >
        {/* Slot 1 */}
        <ul className="md:flex md:space-x-8">
          <li>
            <input
              {...register("title", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="Title"
            />
          </li>
          <li>
            <input
              {...register("author", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="Author"
            />
          </li>
        </ul>

        {/* Slot 2 */}
        <ul className="md:flex md:space-x-8">
          <li>
            <input
              {...register("translator", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="Translator"
            />
          </li>
          <li>
            <input
              {...register("publisher", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="Publisher"
            />
          </li>
        </ul>

        {/* Slot 3 */}
        <ul className="md:flex md:space-x-8">
          <li>
            <input
              {...register("shelf", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="number"
              placeholder="Shelf"
            />
          </li>
          <li>
            <input
              onChange={uploadImage}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="file"
              placeholder="image_url"
            />
          </li>
        </ul>

        <ul className="md:flex md:space-x-8">
          <li>
            <input
              {...register("edition", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="Edition"
            />
          </li>
          <li>
            <input
              {...register("published_in", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="Published"
            />
          </li>
        </ul>

        {/* Slot 4 */}
        <ul className="md:flex md:space-x-8">
          <li>
            <input
              {...register("category", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="category"
            />
          </li>
          <li>
            <input
              {...register("number_of_pages", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="Number_of_Pages"
            />
          </li>
        </ul>

        {/* Slot 5 */}
        <ul className="md:flex md:space-x-8">
          <li>
            <input
              {...register("language", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="Language"
            />
          </li>
          <li>
            <input
              {...register("country", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="Country"
            />
          </li>
        </ul>

        {/* Slot 6 */}
        <ul className="md:flex md:space-x-8">
          <li>
            <input
              {...register("ratings", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="Ratings"
            />
          </li>
          <li>
            <input
              {...register("total_read", { required: true })}
              className="md:w-[680px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="text"
              placeholder="Total_read"
            />
          </li>
        </ul>

        <ul className="md:flex md:space-x-8">
          <li>
            <input
              {...register("added_date", { required: true })}
              className="md:w-[1390px] p-2 outline-none border-2 rounded focus:border-indigo-500"
              type="date"
              placeholder="added_date"
            />
          </li>
        </ul>

        <ul className="md:flex md:space-x-[440px]">
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text md:text-3xl text-xl mr-4">
                Hard_copy
              </span>
              <input
                {...register("hard_copy")}
                type="checkbox"
                className="checkbox checkbox-info items-center"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text md:text-3xl text-xl mr-4">Pdf</span>
              <input
                {...register("pdf")}
                type="checkbox"
                className="checkbox checkbox-info items-center"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text md:text-3xl text-xl mr-4 md:ml-[90px]">
                Ebook
              </span>
              <input
                {...register("ebook")}
                type="checkbox"
                className="checkbox checkbox-info items-center"
              />
            </label>
          </div>
        </ul>
        <button className="md:w-9/12 md:ml-48 ml-28 mt-3 md:py-4 p-3 border bg-[#ede9fe] text-[#a03aed] hover:text-white hover:bg-[#a03aed] bg-opacity-25 font-semibold duration-700 rounded-md">
          <input type="submit" value={"Submit"} />
        </button>
      </form>
    </div>
  );
};

export default AddBook;
