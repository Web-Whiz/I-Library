import useAuth from "@/Utils/useAuth";
import useCart from "@/Utils/useCart";
import React from "react";
import Swal from "sweetalert2";



const AllBookCard = ({ book }) => {
  const { user, loading } = useAuth();
  const [carts, refetch] = useCart();

  const handleAddToCart = (book) => {
    if (!user) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Login First',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    if(carts?.length === 3){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'You can add only 3 books',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    const { image_url, title, author, _id } = book
    const cartItem = { title, author, bookId: _id, image_url, userEmail: user?.email }

    fetch('https://i-library-server-seven.vercel.app/carts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cartItem)
    })
      .then(res => res.json())
      .then((data) => {
        if(data.insertedId){
          // todo: have to add swal
          refetch()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Added to cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
        if(data.message){
          // todo: have to add swal

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${data.message}`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

  }
  return (
    <div className="">
      <div className="w-full mx-auto group h-[320px] p-[3px] bg-[#f8fafc] hover:shadow-md duration-500 shadow-slate-100 rounded-sm overflow-hidden relative collegeCard flex flex-col">
        <div className="w-full h-[215px] relative">
          <img
            className="w-full h-full hover:scale-120 duration-300 object-cover object-center"
            src={book?.image_url}
          />
          <div className="absolute z-0 top-0 left-0 -translate-y-[105%] group-hover:-translate-y-0  duration-200 w-full h-full backdrop-blur-md bg-black/60 bg-opacity-30 flex justify-center items-center">
            <button onClick={()=>handleAddToCart(book)} className="text-white text-sm hover:bg-indigo-700 duration-200 border-[1px] border-white rounded-full px-4 py-[2px]">
              Add to bag
            </button>
          </div>
        </div>
        <div className="py-2 sm:py-1 flex-grow text-center z-10">
          <h1 className="font-semibold text-sm "> {book?.title} </h1>
        </div>
        <div className="flex flex-col pb-2 justify-end items-center z-10">
          <h3 className="text-xs text-gray-600 font-medium">
            Self-Help and Motivation
          </h3>
          <h4 className="text-[10px]">Self no: 23</h4>
        </div>
      </div>
    </div>
  );
};

export default AllBookCard;
