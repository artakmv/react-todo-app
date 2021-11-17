import React from 'react'
import { useSelector } from 'react-redux'

import TodoItem from './components/TodoItem'
import TodoInput from './components/TodoInput'
import { selectTodoList } from './features/todoSlice'

import './App.scss'

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className='app'>
      <div className='app__container'>
        <TodoInput />
        <div className='app__todoContainer'>
          {
            todoList.map(item => (
              <TodoItem
                name={item.name}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
