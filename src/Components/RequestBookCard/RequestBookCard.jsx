import React from 'react';

const RequestBookCard = ({book}) => {
    console.log(book);
    return (
        <div className='my-4 border-b-[1px] border-gray-300 p-3'>
            <h2 className='text-2xl text-gray-900 font-medium'>{book.bookName}</h2>
            <p>{book.authorName}</p>
            <button className='text-indigo-600 text-sm mt-2'>see details</button>
        </div>
    );
};

export default RequestBookCard;