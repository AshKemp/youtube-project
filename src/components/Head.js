import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col m-2 p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          className="h-8 cursor-pointer"
        />
        <a href="/">
          <img
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            className="h-8 mx-2"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        ></input>
        <button className="border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          alt="user"
          // src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
