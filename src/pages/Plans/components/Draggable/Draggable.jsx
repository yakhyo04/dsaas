import classes from "./Draggable.module.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import { useState } from "react";

import TaskCard from "../PlanCard";

const columnsBackend = {
  [uuid()]: {
    name: "To Do",
    items: [
      {
        id: uuid(),
        content: "FirstTask",
      },
      {
        id: uuid(),
        content: "SecondTask",
      },
    ],
  },
  [uuid()]: {
    name: "Progress",
    items: [
      {
        id: uuid(),
        content: "Ogabek",
      },
      {
        id: uuid(),
        content: "Test",
      },
    ],
  },
  [uuid()]: {
    name: "Waiting",
    items: [
      {
        id: uuid(),
        content: "FirstTask",
      },
      {
        id: uuid(),
        content: "SecondTask",
      },
    ],
  },
  [uuid()]: {
    name: "Done",
    items: [
      {
        id: uuid(),
        content: "Ogabek",
      },
      {
        id: uuid(),
        content: "Test",
      },
    ],
  },
};

const Darshboard = () => {
  const [columns, setColumns] = useState(columnsBackend);

  const onDropEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column?.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <DragDropContext
      onDragEnd={(result) => onDropEnd(result, columns, setColumns)}
    >
      {Object.entries(columns).map(([id, column]) => {
        return (
          <Droppable droppableId={id} key={id}>
            {(provided) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={classes.drag}
                >
                  <h4>{column.name}</h4>
                  {column?.items?.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                            >
                              <TaskCard task={item} />
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
};

export default Darshboard;
