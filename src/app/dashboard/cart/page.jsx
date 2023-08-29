'use client'
import CartItemCard from '@/Components/CartItemCard/CartItemCard';
import useCart from '@/Utils/useCart';
import Link from 'next/link';
import React from 'react';

const Cart = () => {


  // const postBook = carts.map((cart) => {
  //   const { bookId, title } = cart;
  //   const book = {
  //     title,
  //     bookId,
  //   };
  //   return book;
  // });
  // console.log(postBook);

  
  const [carts, refetch] = useCart()


  return (
    <div>
      <div className='relative w-full'>
        <div>
          {
          carts?.map(cart => <CartItemCard 
          key={cart?._id}
          cartData={cart}
          refetch={refetch}
          /> )

          }
        </div>

        <div className='border w-full md:w-fit p-2 font-semibold md:fixed top-24 right-10'>
          <h1>Total Books: {carts.length}</h1>
          <h1>Delivery charge per Books: $50</h1>
          <h2> Total Charge: ${50*carts.length}</h2>
          <Link href='/dashboard/cart/place-order' className='w-fit bg-sky-500 block rounded my-2 p-2'>Make Payment</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
