import React, { useState } from 'react'
import './TodoInput.scss'

import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

const TodoInput = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodo = () => {

    dispatch(saveTodo({
      name: input,
      done: false,
      id: Date.now()
    }))

    setInput('')
  }

  return (
    <div className='input'>
      <input
        placeholder='What needs to be done?'
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoInput