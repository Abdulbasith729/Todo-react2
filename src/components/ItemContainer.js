import React from "react";

export default function ItemContainer({todos, deleteTodos}) {
 
  const removeButtonnClick = (item) => {
    deleteTodos(item);
  }

  return (
    <div>
      <ul>
        {todos.map((item, index) => (
          <li style={{marginTop: "10px"}} key={index}>
            {item}
            <button style={{marginLeft: "15px"}} onClick={() => removeButtonnClick(item)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
