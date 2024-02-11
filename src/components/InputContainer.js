import React, { useState } from "react";

export default function InputContainer({addNewTodos}) {
  const [inputValue, setInputValue] = useState("");



  
  const handleAddButtonClick = () => {
    addNewTodos(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input
        placeholder="Add item"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button onClick={handleAddButtonClick}>Add</button>
    </div>
  );
}
