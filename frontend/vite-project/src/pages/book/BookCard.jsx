import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utills/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <a href="/">
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt=""
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </a>
        </div>

        <div>
          <a href="/">
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book.title}
            </h3>
          </a>
          <p className="text-gray-600 mb-5">
            {book.description.length > 80
              ? `${book.description.slice(0, 80)}...`
              : book.description}
          </p>
          <p className="font-medium mb-5">
            ${book.newPrice}{" "}
            <span className="line-through font-normal ml-2">
              ${book.oldPrice}
            </span>
          </p>
          <button 
          onClick={ () => handleAddToCart(book)}
          className="bg-amber-300 text-black hover:transition-colors hover:bg-blue-950 hover:text-white px-7 py-1 rounded-md  flex items-center gap-1 ">
            <FiShoppingCart className="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
