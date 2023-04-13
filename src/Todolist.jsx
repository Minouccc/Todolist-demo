import React, { memo, useState } from 'react'

const Todolist = memo(() => {
  const [newtask,setNewTask] = useState("")
  const [todolist,setTodolist] = useState([])  

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  const addTask = () => {
    const newTodolist = [...todolist,newtask]
    setTodolist(newTodolist)
  }
  const deleteTask = (taskName) => {
    const newTodolist = todolist.filter(task => task !== taskName)
    setTodolist(newTodolist)
  }
  return (
    <div className="to-do-list">
        <div className="add-task">
            <input type="text" onChange={handleChange}/>
            <button className="add-btn" onClick={addTask}>Add Task</button>
        </div>
        <div className="content">
            {todolist.map((task,index) => {
                return(
                    <div className='task-list' key={index}>
                        <div className="task">{task}</div>
                        <button className='delete-btn' onClick={()=> deleteTask(task)}>delete</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
})

export default Todolist