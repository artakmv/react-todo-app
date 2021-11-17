import React from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '@mui/material/Checkbox'

import { setCheck } from '../features/todoSlice'

import './TodoItem.scss'

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch()

  const handleCheck = () => {
    dispatch(setCheck(id))
  }

  return (
    <div className='todoItem'>
      <Checkbox
        checked={done}
        color='primary'
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p className={done && 'todoItem_done'}>{name}</p>
    </div>
  )
}

export default TodoItem
