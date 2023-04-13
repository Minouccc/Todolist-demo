import React, { memo, useState } from 'react'
import Task from './Task'

const Todolist = memo(() => {
  const [newtask,setNewTask] = useState('')
  const [todolist,setTodolist] = useState([])  

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  const addTask = () => {
    const task = {
        id: todolist.length === 0 ? 1 : todolist[todolist.length-1].id + 1,
        taskName: newtask,
    }
    setTodolist(task.taskName === '' ? todolist : [...todolist,task])
  }
  const deleteTask = (id) => {
    const newTodolist = todolist.filter(task => task.id !== id)
    setTodolist(newTodolist)
  }
  return (
    <div className="to-do-list">
        <div className="add-task">
            <input type="text" onChange={handleChange}/>
            <button className="add-btn" onClick={addTask}>Add Task</button>
        </div>
        <div className="content">
            {todolist.map((task) => {
                return(
                    <Task 
                    id = {task.id}
                    taskName = {task.taskName}
                    deleteTask= {deleteTask}
                    />
                )
            })}
        </div>
    </div>
  )
})

export default Todolist