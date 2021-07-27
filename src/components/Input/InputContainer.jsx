import React from "react";
import InputCard from "./InputCard";

function InputContainer({ listId, type }) {
  return (
    <div className="relative w-60 sm:W-72 mt-1">
      <div className="group p-2 ">
        <div className="mx-auto hidden group-hover:block">
          <InputCard listId={listId} type={type} />
        </div>
        <p className="group-hover:hidden font-mono bg-bluegray-200 block text-base m-2 py-1 px-2 rounded-md hover:bg-bluegray-400">
          {type === "list" ? "+ Add a List" : "+ Add a Card"}
        </p>
      </div>
    </div>
  );
}

export default InputContainer;
