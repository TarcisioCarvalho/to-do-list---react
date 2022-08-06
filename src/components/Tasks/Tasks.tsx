import { ClipboardText } from 'phosphor-react'
import React from 'react'
import Task from '../Task/Task'
import styles from './styles.module.css'


  interface Tasks{
    tasks:{
      id:string,
      taskText:string,
      isCompleted:boolean
    }[];
    onDeleteTask:(id:string)=>void;
    onChangeTaskState:(id:string)=>void;
  }


const Tasks = ({onChangeTaskState,onDeleteTask,tasks}:Tasks) => {

 
  return (
    <article className={styles.tasks}>
        <header>
            <p className={styles.blueParagraph}>Tarefas Criadas <span>{tasks.length}</span> </p>
            <p className={styles.purpleParagraph}> <span>{
              tasks.filter(task=>task.isCompleted===true).length
              } de {tasks.length}</span> Tarefas Concluidas</p>
        </header>
        <main>
            
              <ClipboardText style={tasks.length!==0?{display:'none'}:{display:'block'}}  size={56}  className={styles.clipboard}/>
              <p style={tasks.length!==0?{display:'none'}:{display:'block'}}  className={styles.firstParahraph}>Você ainda não tem tarefas cadastradas</p>
              <p style={tasks.length!==0?{display:'none'}:{display:'block'}} >Crie tarefas e organize seus itens a fazer</p>
          
            
            {tasks.map(task=> <Task onChangeTaskState={onChangeTaskState} onDeleteTask={onDeleteTask} key={task.id} task={task}/>)}
        </main>
    </article>
  )
}

export default Tasks