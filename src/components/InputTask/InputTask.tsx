import { PlusCircle } from 'phosphor-react'
import React, { ChangeEvent, FormEvent } from 'react'
import Tasks from '../Tasks/Tasks';
import styles from './styles.module.css'
import {v4 as uuidv4} from 'uuid'

const InputTask = () => {

  const [taskText,setTaskText] = React.useState('');

  function handleChangeTaksText(event:ChangeEvent<HTMLInputElement>):void{
    setTaskText(event.target.value);
  }

  interface Task{
    id:string;
    taskText:string;
    isCompleted:Boolean;
  }

  const [tasks,setTasks] =  React.useState<Task[]>([]);

  function handleCreateNewTask(event:FormEvent<HTMLFormElement>){
      event.preventDefault();
      setTasks([...tasks,{
        id: uuidv4(),
        taskText:taskText,
        isCompleted:false,
      }]);
      setTaskText('');
  }

  function handleDeleteTask(id:string){
    setTasks(tasks.filter(task => task.id!==id))
  }

  return (
    <>
   <form onSubmit={handleCreateNewTask} className={styles.form}>
        <input 
        className={styles.input}
        type="text" 
        placeholder='Adicione uma nova tarefa'
        value={taskText}
        onChange={handleChangeTaksText}
        />
        <button className={styles.button}
        type='submit'>
            Criar 
            <PlusCircle size={16}/>
        </button>
   </form>
   <Tasks onDeleteTask={handleDeleteTask} tasks = {tasks}/>
   </>
  )
}

export default InputTask