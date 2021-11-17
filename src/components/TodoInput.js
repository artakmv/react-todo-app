import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { saveTodo } from '../features/todoSlice'

import './TodoInput.scss'

const TodoInput = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodo = () => {
    if (input.length > 0) {
      dispatch(saveTodo({
        name: input,
        done: false,
        id: Date.now()
      }))
    }

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
