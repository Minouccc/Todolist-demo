import React, { memo } from 'react'

const Task = memo((props) => {
  const {id,taskName,completed,completeTask,deleteTask} = props  
  return (
    <div 
        className='task-list' 
        style={{backgroundColor: completed ? 'lightblue' : 'white'}}
        key={id}
        >
        <div className="task">{taskName}</div>
        <button className='complete-btn' onClick={()=> completeTask(id)}>complete</button>
        <button className='delete-btn' onClick={()=> deleteTask(id)}>delete</button>
    </div>
  )
})
export default Task