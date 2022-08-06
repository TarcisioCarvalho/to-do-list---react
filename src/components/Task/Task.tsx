import { Trash } from 'phosphor-react'
import React from 'react'
import styles from './styles.module.css'

interface Task{
 task:
  {
    id:string;
    taskText:string;
    isCompleted:boolean;
  },
  onDeleteTask:(id:string)=>void;
  onChangeTaskState:(id:string)=>void;
}

const Task = ({onChangeTaskState,onDeleteTask,task}:Task) => {


  

  function handleChangeTaskState(){
    onChangeTaskState(task.id)
  }


  function handleClick(){
    onDeleteTask(task.id);
  }


  return (
    <div  className={styles.task}>
        
          <input className={styles.inputCheck}
           type="checkbox" 
           checked={task.isCompleted} 
           onChange={handleChangeTaskState}
           />
        
        <p style={task.isCompleted?{textDecoration:'line-through'}:{textDecoration:'none'}}>
          {task.taskText}
        </p>
        <button onClick={handleClick} className={styles.button}>
          <Trash size={24}/>
        </button>
    </div>
  )
}

export default Task