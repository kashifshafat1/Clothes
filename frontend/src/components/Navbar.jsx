import React, { useState, useContext } from "react";
import { asset } from "../assets/asset";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  // const logout = () => {
  //   navigate("/login");
  //   localStorage.removeItem("token");
  //   setToken("");
  //   setCartItems({});
  // };

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems([]); // ✔️ Correct
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={asset.logo} className=" cursor-pointer" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collections"
          className="flex flex-col items-center gap-1 "
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={asset.search_icon}
          className="w-5 cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={asset.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          {/* Dropdown Menu */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 bg-slate-100 w-36 text-gray-500 py-3 px-5">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={asset.cart_icon} className="w-5 min-w-5" />
          <p className=" absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={asset.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* sidebar menu smallscreen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img src={asset.dropdown_icon} className="h-4 rotate-180 " />
            <p>Back</p>
          </div>
          <NavLink
            className="py-2 pl-6 border"
            to="/"
            onClick={() => setVisible(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            to="/collections"
            onClick={() => setVisible(false)}
          >
            Collections
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            to="/about"
            onClick={() => setVisible(false)}
          >
            About
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            to="/contact"
            onClick={() => setVisible(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
