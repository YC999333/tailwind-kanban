import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Card({ card, index }) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="mx-auto w-60 sm:w-72 p-1"
        >
          <p className="text-base m-1 bg-white py-2 px-2 rounded-md shadow-md">
            {card.title}
          </p>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
