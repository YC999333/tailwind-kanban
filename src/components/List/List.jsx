import React, { useState, useRef } from "react";
import Title from "./Title";
import Card from "../../Card";
import InputContainer from "../Input/InputContainer";
import { Draggable, Droppable } from "react-beautiful-dnd";

function List({ list, index }) {
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div
          className="mx-auto"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            {...provided.dragHandleProps}
            className="font-mono w-72 sm:w-80 mt-5"
          >
            <div className="bg-bluegray-200 mx-auto rounded-md">
              <Title title={list.title} />
              <Droppable droppableId={list.id}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {list.cards.map((card, index) => {
                      return <Card key={card.id} index={index} card={card} />;
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div className="w-72 sm:w-80">
                <InputContainer listId={list.id} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default List;
