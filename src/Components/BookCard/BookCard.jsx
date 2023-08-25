
import useAuth from "@/Utils/useAuth";
import React from "react";
import Swal from "sweetalert2";

const BookCard = ({ book }) => {
  const {user,loading} = useAuth()

  const handleAddToCart = (book) => {
    if (!user) {
      Swal.fire('Log in first')
      return
    }

    const { image_url, title, author, _id } = book
    const cartItem = { title, author, bookId: _id, image_url, userEmail: user?.email }

    fetch('http://localhost:5000/carts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cartItem)
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if(data.insertedId){
          // todo: have to add swal
          Swal.fire('Added To Cart')
        }
        if(data.message){
          // todo: have to add swal
          Swal.fire(`${data.message}`)
        }
      })

  }


  const handleAddToWishList = (book) => {


    if (!user) {
      Swal.fire('Log in first')
      return
    }

    const { image_url, title, author, _id } = book
    const wishLIstItem = { title, author, bookId: _id, image_url, userEmail: user?.email }

    fetch('http://localhost:5000/wish-list', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(wishLIstItem)
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if(data.insertedId){
          Swal.fire('Added to wish list')
        }
        if(data.message){
          // todo: have to add swal
          Swal.fire(`${data.message}`)
        }
      })

  }
  // const {bookName, bookImg, authorName, shelfNo, rating, borrowPrice} = book;

  return (
    // <div className='flex items-center justify-center'>
    //     <div className="h-full w-full sm:h-[280px] sm:w-[185px] group relative cursor-pointer  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
    //     <div className='h-full w-full '>
    //         <img className=" h-full w-full transition-transform duration-500 " src={book?.bookImg} alt="" />
    //     </div>

    //     <div className=" bg-[#0f86cde6] absolute inset-0 flex translate-y-[200%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
    //         <h1 className="font-bold text-2xl">{book?.bookName}</h1>
    //         <p className="">Author: {book?.authorName}</p>
    //         <p className="text-white">Shelf No: {book?.shelfNo}</p>
    //         <p className="text-white">Borrow Price: ${book?.borrowPrice}</p>
    //         <p className="text-white">Rating: {book?.rating}</p>

    //     </div>
    // </div>
    // </div>
    <div className="">
      <div className="w-[158px] sm:w-[180px] mx-auto group h-[320px] p-[3px] bg-[#f8fafc] hover:shadow-md duration-500 shadow-slate-100 rounded-sm overflow-hidden relative collegeCard flex flex-col">
        <div className="w-full h-[215px] relative">
          <img
            className="w-full h-full hover:scale-120 collegeImg duration-300 object-fill"
            src={book?.image_url}
          />
          <div className="absolute z-0 top-0 left-0 -translate-y-full group-hover:-translate-y-0  duration-200 w-full h-full backdrop-blur-md bg-black/60 bg-opacity-30 flex justify-center items-center">
            <div className="flex flex-col items-center gap-1">
            <button onClick={()=>handleAddToCart(book)} className="text-white text-sm w-full hover:bg-indigo-700 duration-200 border-[1px] border-white rounded-full px-4 py-[2px]">
              Add to bag
            </button>
            <button onClick={()=>handleAddToWishList(book)} className="text-white text-sm w-full hover:bg-indigo-700 duration-200 border-[1px] border-white rounded-full px-4 py-[2px]">
              Add to wish list
            </button>
            </div>
          </div>
        </div>
        <div className="py-2 sm:py-1 flex-grow text-center z-10">
          <h1 className="font-semibold text-sm "> {book?.title} </h1>
        </div>
        <div className="flex flex-col pb-2 justify-end items-center z-10">
          <h3 className="text-xs text-gray-600 font-medium">
            {book?.category}
          </h3>
          <h4 className="text-[10px]">Self no: {book?.shelf}</h4>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
