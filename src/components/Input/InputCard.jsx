import React, { useContext, useState } from "react";
import dataApi from "../../utils/dataApi";

function InputCard({ listId, type }) {
  const { addMoreCard, addMoreList } = useContext(dataApi);
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAdd = (type) => {
    if (type === "list") {
      addMoreList(title);
    } else {
      addMoreCard(title, listId);
    }

    setTitle("");
  };

  return (
    <div className="my-2 ml-4 ">
      <textarea
        onChange={handleChange}
        className="ml-2 w-56 text-sm p-1 rounded-md"
        value={title}
        placeholder={
          type !== "list"
            ? "Enter the title of this card"
            : "Enter title of the list"
        }
      ></textarea>

      <div>
        <button
          onClick={() => handleAdd(type)}
          className="bg-red-500 w-12 my-1 p-1 text-white text-sm rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default InputCard;
