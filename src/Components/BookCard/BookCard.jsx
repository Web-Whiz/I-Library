import React from 'react';

const BookCard = ({book}) => {

    return (
        
            <div className='flex items-center justify-center'>
                <div className="h-full w-full sm:h-[280px] sm:w-[185px] group relative cursor-pointer  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className='h-full w-full '>
                    <img className=" h-full w-full transition-transform duration-500 " src={book?.bookImg} alt="" />
                </div>
                
                <div className=" bg-[#0f86cde6] absolute inset-0 flex translate-y-[200%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-bold text-2xl">{book?.bookName}</h1>
                    <p className="">Author: {book?.authorName}</p>
                    <p className="text-white">Shelf No: {book?.shelfNo}</p>
                    <p className="text-white">Borrow Price: ${book?.borrowPrice}</p>
                    <p className="text-white">Rating: {book?.rating}</p>
                    
                </div>
            </div>
            </div>

    );
};

export default BookCard;