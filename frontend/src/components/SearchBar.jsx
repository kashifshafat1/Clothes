import React from "react";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { asset } from "../assets/asset";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collections")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center  border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w3/4 sm:w-1/2 ">
        <input
          className="flex-1 outline-none bg-inherit text-sm "
          type="text "
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className="w-4 cursor-pointer" src={asset.search_icon} alt="" />
      </div>
      <img
        className=" inline cursor-pointer w-3"
        src={asset.cross_icon}
        alt=""
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
