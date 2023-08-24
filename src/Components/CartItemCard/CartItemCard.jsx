import React from 'react';

const CartItemCard = ( {cartData,refetch} ) => {

  const handleDeleteFromCart = (bookId) => {
    // todo: have to use real user and user email 
    const user = true
    const email = 'john@gmail.com'

    if (!user) {
      alert('log in first')
      return
    }

   
    const deleteCartItem = { bookId, userEmail: email }

    fetch('http://localhost:5000/carts', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(deleteCartItem)
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if(data.deletedCount){
          // todo: have to add swal
          refetch();
          alert('Deleted From Cart')
        }
      })

  }
    return (
        <div>
            <div className="flex p-3 max-w-lg border my-1">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={cartData?.image_url}
                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">{cartData?.title}</a>
                        </h3>
                        <p className="ml-4">$50.00</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{cartData?.author}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty 1</p>
                      <div className="flex">
                        <button
                        onClick={()=>handleDeleteFromCart(cartData?.bookId)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default CartItemCard;