'use client'
import React from 'react';

const PlaceOrder = () => {
    const order = {
        email: 'john@gmail.com',
        bookId: 1234,
        bookName: 'Life is beautiful'
    }
    const handlePay = () => {
        fetch(`${process.env.NEXT_PUBLIC_BaseURL}/order`, {
            method: 'Post',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(order)
          }).then(res => res.json())
          .then(data => {
            console.log(data)
            window.location.replace(data.url)
          })

    }
    return (
        <div>
            <h1>Place order</h1>
            <button onClick={handlePay}>Pay</button>
        </div>
    );
};

export default PlaceOrder;