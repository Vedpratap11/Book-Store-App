import React, { useEffect, useState } from "react";
import BookCard from "../book/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import {Pagination, Navigation } from "swiper/modules";

const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  const categories = [
    "Choose a genre",
    "Business",
    "Fiction",
    "Horror",
    "Adventure",
  ];

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  console.log(filteredBooks);

  // console.log(books);
  return (
    <div className="py-10 text-white px-36">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      <div className="mb-8 flex items-center">
        <select
          name="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          id="category"
          className="border border-black bg-amber-300 text-black rounded-md px-4 py-1 focus:outline-none"
        >
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination , Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <SwiperSlide>
              <BookCard key={index} book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
