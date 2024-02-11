import './App.css';
import InputContainer from './components/InputContainer';
import ItemContainer from './components/ItemContainer';
import { useState } from 'react';
import Count from './components/Count';

function App() {
const [todos , setTodos] = useState([]);

const addNewTodos = (newTodos)=>{

  setTodos([...todos,newTodos]);
}

const deleteTodos = (itemToBeDeleted) =>{
const filtersTodos =todos.filter( (item) => item !== itemToBeDeleted); 
setTodos(filtersTodos);
};


 return (
    <div className="App">
      <h1>ToDo Project</h1>
      <Count itemsCount ={todos.length}/>
      <InputContainer   addNewTodos={addNewTodos} />
     <ItemContainer todos={todos} deleteTodos={deleteTodos} />
    </div>
  );
}

export default App;
