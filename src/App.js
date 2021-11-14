import React from 'react'
import './App.scss'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__todoContainer'>
          {
            todoList.map(item => (
              // eslint-disable-next-line react/jsx-key
              <TodoItem
                name={item.name}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        <TodoInput />
      </div>

    </div>
  )
}

export default App
