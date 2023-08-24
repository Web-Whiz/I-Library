'use client'
import WishListCard from '@/Components/WishListCard/WishListCard';
import useWishList from '@/Utils/useWishList';
import React from 'react';

const page = () => {
    const [wishListBooks, refetch] = useWishList()

    return (
        <div>
            <h1>Total Wish List Books:{wishListBooks.length}</h1>
          {
          wishListBooks?.map(wishListBook => <WishListCard 
          key={wishListBook?._id}
          wishListBook={wishListBook}
          refetch={refetch}
          /> )

          }
        </div>
    );
};

export default page;