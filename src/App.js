import React, { useState } from 'react';
import './App.css';
import {Footer} from "./myComponents/Footer";
import Header from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import Addtodo from "./myComponents/Addtodo";

function App() {
  const onDelete = (todo)=> {
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
}
const [todos,setTodos] = useState([
    {
    
      sno: 1,
      title: "Go to the market",
      desc: "get some milk"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "get shoes",
    },
    {
      sno: 3,
      title: "Go to uni ",
      desc: "plese get books "
    },
  ]);

  return (
    <>
      <Header title="Todos List" searchBar={false} />
      <Addtodo />
      <Todos todos= {todos} onDelete ={onDelete}/>

      <Footer />

    </>
  );
}



export default App;
