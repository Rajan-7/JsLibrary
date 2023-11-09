import React from "react";
import "./style.css";

const Todo = () => {
  return (
    <>
      <div className="todo-container">
        <div className="todo-subcontainer">
          <figure>
            <img src="./images/Todo.svg" alt="todo svg format picture" />
          </figure>
          <figcaption className="fig-cap">Add Your List Here ✌</figcaption>

          {/* ADDING ITEMS INTO To-d0 */}

          <div className="addItems">
            <input
              type="text"
              placeholder="🖍️ Add items..."
              className="item-add"
            />
            <div className="plus">
              <i className="fas fa-plus "></i>
            </div>
          </div>

          {/* SHOW ITEMS OF T0-do */}

          <div className="showItems">
            <div className="eachItems">
              <h3>Apple</h3>
              <div className="todo-actions">
                <i className="fas fa-edit "></i>
                <i className="fas fa-trash "></i>
              </div>
            </div>
          </div>

          {/*REMOVE ALL ITEMS */}

          <div className="removeItems">
            <button className="btn effect04" data-sm-link-text="REMOVE ALL">
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
