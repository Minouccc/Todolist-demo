import React, { memo, useState } from 'react'

const Todolist = memo(() => {
  const [newtask,setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }


  return (
    <div className="to-do-list">
        <div className="add-task">
            <input type="text" onChange={handleChange}/>
            <button className="add-btn">Add Task</button>
        </div>
        <div className="task-list">
            {newtask}
        </div>
    </div>
  )
})

export default Todolist