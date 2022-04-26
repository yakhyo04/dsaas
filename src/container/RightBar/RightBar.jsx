import { Button, Modal } from "antd";
import React, { useState } from "react";
import classes from "./RightBar.module.scss";
import { CreateForm, CardNote } from "./components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

const columnsBackend = {
  [uuid()]: {
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
};

const RightBar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [columns, setColumns] = useState(columnsBackend);

  const onDropEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

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
  };

  return (
    <div className={classes.wrapper}>
      <div>
        <Button type="primary" block onClick={() => setIsModalVisible(true)}>
          Create Note
        </Button>
        <Modal
          centered
          title="NotePad"
          visible={isModalVisible}
          onOk={() => setIsModalVisible(true)}
          onCancel={() => setIsModalVisible(false)}
        >
          <CreateForm />
        </Modal>
      </div>
      <div className={classes.viewer}>
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
                                  className={classes.dragger}
                                  ref={provided.innerRef}
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                                >
                                  <CardNote />
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
      </div>
    </div>
  );
};

export default RightBar;
