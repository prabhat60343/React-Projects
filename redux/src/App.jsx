import { useState } from 'react'
import './App.css'
import AddTodo from './components/Addtodo.jsx'
import Todo from './components/Todo.jsx' // <-- Fix import

import './App.css'

function App() {


  return (
   <>
      <div><h1>Lets learn Redux</h1></div>
      <AddTodo />
      <Todo /> 
   </>
  )
}

export default App
