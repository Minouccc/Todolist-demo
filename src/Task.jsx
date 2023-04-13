import React, { memo } from 'react'

const Task = memo((props) => {
  const {id,taskName,deleteTask} = props  
  return (
    <div className='task-list' key={id}>
        <div className="task">{taskName}</div>
        <button className='delete-btn' onClick={()=> deleteTask(id)}>delete</button>
    </div>
  )
})
export default Task