import React, { useState } from "react";
import "./App.css";
import InputAreas from "./components/InputAreas";
import TodoItem from "./components/todoitem";

function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  };

  const deleteitem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="Container">
      <div className="Heading">
        <h1>To Do List</h1>
      </div>
      <InputAreas addItems={addItems} />

      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <TodoItem
                key={index}
                text={item}
                deleteitem={deleteitem}
                id={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
