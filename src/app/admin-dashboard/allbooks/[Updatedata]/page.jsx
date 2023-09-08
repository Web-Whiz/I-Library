"use client";
import { getBook } from "@/Utils/useBooks";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const Updatedatapage = ({ params }) => {
  // from put matod//////////////

  const [title1, settitle1] = useState(false);

  const [author1, setauthor1] = useState(false);

  const [translator1, settranslator1] = useState(false);

  const [publisher1, setpublisher1] = useState(false);

  const [shelf1, setshelf1] = useState(false);

  const [image_url1, setimage_url1] = useState(false);

  const [edition1, setedition1] = useState(false);

  const [published_in1, setpublished_in1] = useState(false);

  const [category1, setcategory1] = useState(false);

  const [number_of_pages1, setnumber_of_pages1] = useState(false);

  const [language1, setlanguage1] = useState(false);

  const [country1, setcountry1] = useState(false);

  const [added_date1, setadded_date1] = useState(false);

  const [pdf_link1, setpdf_link1] = useState(false);

  ////////////////////////////////////////
  const [booksdatas] = getBook(params.Updatedata);

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

  const hendleimg = (e) => {
    setimage_url1(e);
  };

  const uploadImage = async (data) => {
    console.log(data);
    const formData = new FormData();
    if (!data.target.files[0]) return;
    formData.append("image", data.target.files[0]);
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
      // ratings,
      // total_read,
      added_date,
      hard_copy,
      pdf,
      ebook,
      pdf_link,
    } = data;

    const maindata = {
      title: title1 ? title : booksdatas.title,
      author: author1 ? author : booksdatas.author,
      translator: translator1 ? translator : booksdatas.translator,
      publisher: publisher1 ? publisher : booksdatas.publisher,
      shelf: shelf1 ? shelf : booksdatas.shelf,
      image_url: image_url1 ? photo : booksdatas.image_url,
      edition: edition1 ? edition : booksdatas.edition,
      published_in: published_in1 ? published_in : booksdatas.published_in,
      category: category1 ? category : booksdatas.category,
      number_of_pages: number_of_pages1
        ? number_of_pages
        : booksdatas.number_of_pages,
      language: language1 ? language : booksdatas.language,
      country: country1 ? country : booksdatas.country,
      // ratings: parseFloat(ratings),
      // total_read: parseFloat(total_read),
      added_date: added_date1 ? added_date : booksdatas.added_date,
      availability: { hard_copy, pdf, ebook },
      pdf_link: pdf_link1 ? pdf_link : booksdatas.pdf_link,
    };

    fetch(`https://i-library-server-mu.vercel.app/books/${params.Updatedata}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(maindata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          toast.success("Book update Successful");
          reset();
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white mt-5">
        <h1 className="text-center md:text-4xl text-2xl font-semibold pt-5">
          Update Book Information
        </h1>
        {/* Slot 1 */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-4">
          <input
            {...register("title")}
            defaultValue={booksdatas.title}
            onChange={(e) => settitle1(true)}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="text"
            placeholder="Title"
          />
          <input
            {...register("author")}
            onChange={(e) => setauthor1(true)}
            defaultValue={booksdatas.author}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="text"
            placeholder="Author"
          />
          <input
            {...register("translator")}
            onChange={(e) => settranslator1(true)}
            defaultValue={booksdatas.translator}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="text"
            placeholder="Translator"
          />
          <input
            {...register("publisher")}
            onChange={(e) => setpublisher1(true)}
            defaultValue={booksdatas.publisher}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="text"
            placeholder="Publisher"
          />
          <input
            {...register("shelf")}
            onChange={(e) => setshelf1(true)}
            defaultValue={booksdatas.shelf}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="number"
            placeholder="Shelf"
          />
          <input
            onChange={uploadImage}
            onClick={() => hendleimg(true)}
            // defaultValue={booksdatas.image_url}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="file"
            placeholder="image_url"
          />
          <input
            {...register("edition")}
            onChange={(e) => setedition1(true)}
            defaultValue={booksdatas.edition}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="text"
            placeholder="Edition"
          />
          <input
            {...register("published_in")}
            onChange={(e) => setpublished_in1(true)}
            defaultValue={booksdatas.published_in}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="text"
            placeholder="Published"
          />
          <input
            {...register("category")}
            onChange={(e) => setcategory1(true)}
            defaultValue={booksdatas.category}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="text"
            placeholder="category"
          />
          <input
            {...register("number_of_pages")}
            onChange={(e) => setnumber_of_pages1(true)}
            defaultValue={booksdatas.number_of_pages}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="text"
            placeholder="Number_of_Pages"
          />
          <input
            {...register("language")}
            onChange={(e) => setlanguage1(true)}
            defaultValue={booksdatas.language}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="text"
            placeholder="Language"
          />
          <input
            {...register("country")}
            onChange={(e) => setcountry1(true)}
            defaultValue={booksdatas.country}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="text"
            placeholder="Country"
          />
          {/* <input
            {...register("ratings", { required: true })}
            type="text"
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            placeholder="Ratings"
            required
          /> */}
          <input
            {...register("added_date")}
            onChange={(e) => setadded_date1(true)}
            defaultValue={booksdatas.added_date}
            className="mt-2 p-2 outline-none border-2 rounded focus:border-indigo-500"
            type="date"
            placeholder="added_date"
          />
        </div>

        {/* Slot 8 */}
        {/* <ul className="grid xl:grid-cols-3 gap-5 items-center mt-6 mb-5 pl-3">
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-3xl">Hard Copy</span>

              <input
                {...register("hard_copy")}
                type="checkbox"
                onChange={(e) => sethard_copy1(true)}
                className="checkbox checkbox-info items-center"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-3xl">Pdf</span>
              <input
                {...register("pdf")}
                type="checkbox"
                onChange={pdffile}
                className="checkbox checkbox-info items-center"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-3xl">Ebook</span>
                <input
                  {...register("ebook")}
                  type="checkbox"
                  className="checkbox checkbox-info items-center"
                />
            </label>
          </div>
        </ul> */}
        <div className="p-4">
          {pdf === true ? (
            <input
              type="text"
              {...register("pdf_link")}
              defaultValue={booksdatas.pdf_link}
              className="w-full p-2 outline-none border-2 rounded focus:border-indigo-500"
              placeholder="Enter Your Pdf Link"
            />
          ) : (
            <input
              type="text"
              className="md:w-[1390px] hidden p-2 outline-none border-2 rounded focus:border-indigo-500 "
            />
          )}
        </div>
        <button className="w-9/12 xl:ml-48 lg:ml-24 md:ml-28 sm:ml-20 ml-16 mb-10 mt-6 p-3 border bg-[#ede9fe] text-[#a03aed] hover:text-white hover:bg-[#a03aed] bg-opacity-25 font-semibold duration-700 rounded-md">
          <input type="submit" value={"Submit"} />
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Updatedatapage;
