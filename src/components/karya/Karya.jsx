import React, { useState } from "react";
import "./Karya.css";

const Karya = () => {
  const [input, setInput] = useState("");
  const [store, setStore] = useState([]);

  const addItems = () => {
    if (!input) {
      console.log("Please filll the items");
    } else {
        const newInput = {
            id: new Date().getTime().toString(),
            name:input
        }
      setStore([...store, newInput]);
      setInput("");
    }
  };

  const deleteItems = (ind)=>{
    const updateStore = store.filter((cur)=>{
        return cur.id !== ind;
    })
    setStore(updateStore);
  }
  return (
    <section className="to-do">
      <div className="add-list">
        <input
          type="text"
          name="input"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your todo..."
        />
        <button onClick={addItems}>Add</button>
      </div>
      {store.map((c, i) => {
        return (
          <div className="show-list" key={i}>
            <p>{c.name}</p>
            <button>Edit</button>
            <button onClick={()=>deleteItems(c.id)}>Delete</button>
          </div>
        );
      })}
    </section>
  );
};

export default Karya;
