import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Logout", href: "/logout" },
];

function Header() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  console.log(isDropDownOpen);

  const currentUser = false;

  const cartItems = useSelector(state => state.cart.cartItems)
  console.log(cartItems)

  return (
    <header className="max-w-screen-2xl+ mx-auto px-36 py-6">
      <nav className="flex justify-between items-center">
        <div className="left flex items-start gap-4 h-10 ">
          <Link to="/">
            <HiMiniBars3CenterLeft className="w-7 h-7 text-white" />
          </Link>
          <div className="w-56 h-5 space-x-2 relative">
            <IoSearchOutline className="absolute inline-block inset-y-2 left-3" />
            <input
              type="text"
              placeholder="Search here"
              className=" bg-[#EAEAEA] w-full py-1 px-10 rounded-md focus:outline-none "
            />
          </div>
        </div>
        <div className="right flex items-center gap-4">
          <div>
            {currentUser ? (
              <div className="relative">
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <img
                    src={avatar}
                    alt=""
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* Show DropDown */}
                <div>
                  {isDropDownOpen && (
                    <div className="absolute left-0 mt-2 w-48 shadow-lg  z-40 bg-fuchsia-400">
                      <ul className="py-2">
                        {navigation.map((item, index) => {
                          return (
                            <li
                              key={index}
                              onClick={() => setIsDropDownOpen(false)}
                            >
                              <Link
                                to={item.href}
                                className="block px-4 hover:bg-gray-200"
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              
              <Link to="/login"><HiOutlineUser className="w-6 h-6 text-white" /></Link>
            )}
          </div>

          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6 text-white" />
          </button>
          <Link
            to="/cart"
            className="bg-amber-300 px-6 py-1 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="size-6" />
            {
              cartItems.length > 0 ? <span>{cartItems.length}</span> : <span>0</span>
            }
            
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
