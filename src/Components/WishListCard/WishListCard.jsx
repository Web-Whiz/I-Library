import React from 'react';

const WishListCard = ({wishListBook, refetch}) => {

    const handleDeleteFromWishList = (bookId) => {
        // todo: have to use real user and user email 
        const user = true
        const email = 'john@gmail.com'
    
        if (!user) {
          alert('log in first')
          return
        }
    
       
        const deleteWishListItem = { bookId, userEmail: email }
    
        fetch('http://localhost:5000/wish-list', {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(deleteWishListItem)
        })
          .then(res => res.json())
          .then((data) => {
            if(data.deletedCount){
              // todo: have to add swal
              refetch();
              alert('Deleted From Wish List')
            }
          })
    
      }
    return (
        <div>
            <div className="flex p-3 max-w-lg border my-1">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={wishListBook?.image_url}
                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">{wishListBook?.title}</a>
                        </h3>
                        
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{wishListBook?.author}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      
                      <div className="flex justify-between">
                        <button
                        onClick={()=>handleDeleteFromWishList(wishListBook?.bookId)}
                          type="button"
                          className="font-medium  text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                        <button
                          type="button"
                          className="font-medium ml-6 text-indigo-600 hover:text-indigo-500"
                        >
                          Add To Bag
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default WishListCard;