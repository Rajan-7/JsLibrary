import React, { useEffect, useState } from "react";
import "./style.css";

// getting localstorage data

const localStorageFun = () => {
  const lists = localStorage.getItem("todoId");
  if (lists) {
    return JSON.parse(lists);
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(localStorageFun());
  const [editList, isEditList] = useState("");
  const [toggleButton, isToggleButton] = useState(false);

  // adding items into "items"
  const addItems = () => {
    if (!inputData) {
      alert("Fill up the list!!");
    } else if (inputData && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === editList) {
            return { ...curElem, name: inputData };
          } else {
            return curElem;
          }
        })
      );
      setInputData("");
      isToggleButton(false);
      isEditList(null);
    } else {
      const updatedInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, updatedInputData]);
      setInputData("");
    }
  };

  // editing the items
  const editItems = (index) => {
    const editThis = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(editThis.name);
    isEditList(index);
    isToggleButton(true);
  };

  // deleting items from the list
  const deleteItems = (index) => {
    const remainingItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(remainingItems);
  };

  // remove all items
  const removeAll = () => {
    setItems([]);
  };

  // Local storage
  useEffect(() => {
    localStorage.setItem("todoId", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="todo-container">
        <div className="todo-subcontainer">
          <figure>
            <img src="./images/Todo.svg" alt="" />
          </figure>
          <figcaption className="fig-cap">Add Your List Here ✌</figcaption>

          {/* ADDING ITEMS INTO To-d0 */}

          <div className="addItems">
            <input
              type="text"
              placeholder="🖍️ Add items..."
              className="item-add"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <div className="plus">
              {toggleButton ? (
                <i className="fas fa-edit " onClick={addItems}></i>
              ) : (
                <i className="fas fa-plus " onClick={addItems}></i>
              )}
            </div>
          </div>

          {/* SHOW ITEMS OF T0-do */}

          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItems" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-actions">
                    <i
                      className="fas fa-edit "
                      onClick={() => editItems(curElem.id)}
                    ></i>
                    <i
                      className="fas fa-trash "
                      onClick={() => deleteItems(curElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/*REMOVE ALL ITEMS */}

          <div className="removeItems">
            <button
              className="btn effect04"
              data-sm-link-text="REMOVE ALL"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
