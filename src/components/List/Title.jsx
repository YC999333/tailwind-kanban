import React, { useState } from "react";
import List from "./List";

function Title({ title }) {
  const [open, setOpen] = useState(false);
  const [cardTitle, setCardTitle] = useState(title);

  return (
    <div className="font-bold ml-2 text-xl bg-bluegray-200 rounded-md">
      {open ? (
        <div className="h-10 items-center flex">
          <input
            onBlur={() => setOpen(!open)}
            className="bg-bluegray-200 font-bold focus:bg-bluegray-300 focus:outline-none w-full mx-2 px-2"
            onChange={(e) => setCardTitle(e.target.value)}
            value={title}
          ></input>
        </div>
      ) : (
        <div className="flex items-center">
          <div
            className="flex-1 p-1 ml-2 rounded-sm"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {cardTitle}
          </div>

          <i className="mr-5 fas fa-ellipsis-h"></i>
        </div>
      )}
    </div>
  );
}

export default Title;
