"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
const img_hosting_token = process.env.VITE_IMEGE_KEY;

const AddBook = () => {
  const [pdf, setpdf] = useState(false);

  const pdffile = (e) => {
    setpdf(e.target.checked);
  };

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

  const hello = (e) => {
    console.log(e);
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
      // ratings,
      // total_read,
      added_date,
      hard_copy,
      pdf,
      ebook,
      pdf_link,
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
      // ratings: parseFloat(ratings),
      // total_read: parseFloat(total_read),
      added_date,
      availability: { hard_copy, pdf, ebook },
      pdf_link: pdf_link,
    };
    console.log(maindata);

    fetch(`${process.env.NEXT_PUBLIC_BaseURL}/books`, {
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
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5">
        <h1 className="text-center text-4xl font-semibold space-y-5 mt-5 mb-5">
          Add Your Own Book
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <input
            {...register("title", { required: true })}
            type="text"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Title"
            required
          />
          <input
            {...register("author", { required: true })}
            type="text"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Author"
            required
          />
          <input
            {...register("translator", { required: true })}
            type="text"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Translator"
            required
          />
          <input
            {...register("publisher", { required: true })}
            type="text"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Publisher"
            required
          />
          <input
            {...register("shelf", { required: true })}
            type="number"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Shelf"
            required
          />
          <input
            {...register("image_url", { required: true })}
            type="file"
            onChange={uploadImage}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="image_url"
            required
          />
          <input
            onChange={hello}
            {...register("edition", { required: true })}
            type="text"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Edition"
            required
          />
          <input
            {...register("published_in", { required: true })}
            type="number"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Published_in"
            required
          />
          <input
            {...register("category", { required: true })}
            type="text"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="category"
            required
          />
          <input
            {...register("number_of_pages", { required: true })}
            type="number"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Number_of_pages"
            required
          />
          <input
            {...register("language", { required: true })}
            type="text"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Language"
            required
          />
          <input
            {...register("country", { required: true })}
            type="text"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Country"
            required
          />
          {/* <input
            {...register("total_read", { required: true })}
            type="text"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Total_read"
            required
          /> */}
          <input
            {...register("added_date", { required: true })}
            type="date"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="added_date"
            required
          />
        </div>
        <ul className="grid xl:grid-cols-3 gap-5 items-center mt-6 mb-5">
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text md:text-3xl text-xl">Hard Copy</span>
              <input
                {...register("hard_copy")}
                type="checkbox"
                className="checkbox checkbox-info items-center w-5 h-5 ml-3"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text md:text-3xl text-xl">Pdf</span>
              <input
                {...register("pdf")}
                type="checkbox"
                onChange={pdffile}
                className="checkbox checkbox-info items-center w-5 h-5 ml-3"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text md:text-3xl text-xl ">Ebook</span>
              <input
                {...register("ebook")}
                type="checkbox"
                className="checkbox checkbox-info items-center w-5 h-5 ml-3"
              />
            </label>
          </div>
        </ul>
        <div>
          {pdf === true ? (
            <input
              type="text"
              {...register("pdf_link")}
              className="w-full p-2 outline-none border-2 rounded focus:border-indigo-500"
              placeholder="Enter Your Pdf Link"
              required
            />
          ) : (
            <input
              type="text"
              className="hidden p-2 outline-none border-2 rounded focus:border-indigo-500 "
            />
          )}
        </div>
        <div className="">
          <button className="p-3 mt-4 w-full bg-[#ede9fe] text-[#a03aed] hover:text-white hover:bg-[#a03aed] bg-opacity-25 font-semibold duration-700 rounded-md">
            <input type="submit" value={"Submit"} />
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default AddBook;
