import React, { useEffect, useState } from "react";
import BookCard from "../book/BookCard";

const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

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
          id=""
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
      {filteredBooks.map((book, index) => (
        <BookCard key={index} book={book}/>
      ))}
    </div>
  );
};

export default TopSellers;
