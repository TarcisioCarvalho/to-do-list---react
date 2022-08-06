import { Trash } from 'phosphor-react'
import React from 'react'
import styles from './styles.module.css'

interface Task{
 task:
  {
    id:string;
    taskText:string;
    isCompleted:Boolean;
  },
  onDeleteTask:(id:string)=>void;
}

const Task = ({onDeleteTask,task}:Task) => {

  function handleClick(){
    onDeleteTask(task.id);
  }


  return (
    <div  className={styles.task}>
        
          <input className={styles.inputCheck} type="checkbox" />
        
        <p>{task.taskText}</p>
        <button onClick={handleClick} className={styles.button}>
          <Trash size={24}/>
        </button>
    </div>
  )
}

export default Task