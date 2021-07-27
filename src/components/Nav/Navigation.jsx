import React, { useState } from "react";

function Navigation({ setBg }) {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const showSideMenu = openSideMenu ? "translate-x-0" : "-translate-x-full";
  const [showColor, setShowColor] = useState(false);
  const [showLandscape, setShowLandscape] = useState(false);

  return (
    <div className="">
      <div className="z-0 flex mx-5 sm:mx-20 items-center justify-between text-white p-3 font-bold font-mono text-lg sm:text-2xl">
        <h1 className="">Daily Todo</h1>
        <button
          onClick={() => setOpenSideMenu(true)}
          className="p-2 text-xs sm:text-base hover:bg-blue-500 border rounded-xl border-2 border-white"
        >
          Change Background
        </button>
      </div>

      <div
        className={`${showSideMenu} absolute top-0 min-h-screen w-96 z-50 bg-gray-100 text-black transition duration-200`}
      >
        <div className="mx-2 p-2 justify-between flex items-center border-b border-gray-300">
          <p className="flex mx-auto py-5 text-lg font-bold">
            Change Background
          </p>
          <button
            onClick={() => setOpenSideMenu(false)}
            className=" mx-10 hover:text-blue-500"
          >
            <i className="flex fas fa-times text-xl"></i>
          </button>
        </div>
        <div className="grid grid-cols-2 m-3 p-2 gap-5 ">
          <div
            onClick={() => {
              setShowColor(false);
              setShowLandscape(true);
            }}
            className="bg-landscape1 bg-cover h-20 rounded-lg"
          ></div>
          <p className="">Photo</p>
          <div
            onClick={() => {
              setShowColor(true);
              setShowLandscape(false);
            }}
            className="bg-bgcolors bg-cover h-20 rounded-lg"
          ></div>
          <p className="">Color</p>

          {showLandscape ? (
            <>
              <div
                onClick={() => setBg("bg-landscape1")}
                className="bg-landscape1 bg-cover h-20 rounded-lg"
              ></div>
              <div
                onClick={() => setBg("bg-landscape2")}
                className="bg-landscape2 bg-cover h-20 rounded-lg"
              ></div>
              <div
                onClick={() => setBg("bg-landscape3")}
                className="bg-landscape3 bg-cover h-20 rounded-lg"
              ></div>
            </>
          ) : null}

          {showColor ? (
            <>
              <div
                onClick={() => setBg("bg-indigo-300")}
                className="bg-indigo-300 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => setBg("bg-blue-500")}
                className="bg-blue-500 h-20 rounded-lg text-blue-500"
              >
                blue
              </div>
              <div
                onClick={() => setBg("bg-yellow-300")}
                className="bg-yellow-300 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => setBg("bg-red-500")}
                className="bg-red-500 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => setBg("bg-pink-500")}
                className="bg-pink-500 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => setBg("bg-green-500")}
                className="bg-green-500 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => setBg("bg-gray-300")}
                className="bg-gray-300 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => setBg("bg-orange-500")}
                className="bg-orange-500 h-20 rounded-lg"
              ></div>{" "}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
