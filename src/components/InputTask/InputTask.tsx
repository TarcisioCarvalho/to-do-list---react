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
    isCompleted:boolean;
  }

  const [tasks,setTasks] =  React.useState<Task[]>([]);

  let tasksLocalStorage:Task[] = [];

    if(window.localStorage.getItem('task'))
    tasksLocalStorage = JSON.parse(window.localStorage.getItem('task')??"");
    
    React.useEffect(()=>{
    if(tasksLocalStorage.length!==0) setTasks(tasksLocalStorage);
    },[]);


    React.useEffect(()=>{
      localStorage.setItem(
        'task',
        JSON.stringify(tasks))
    },[tasks])

 

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

  function handleChangeTaskState(id:string){
      setTasks(tasks.map(task => task.id===id?{id:id
        ,taskText:task.taskText,
        isCompleted:!task.isCompleted
      }:task))
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
   <Tasks onChangeTaskState={handleChangeTaskState} onDeleteTask={handleDeleteTask} tasks = {tasks}/>
   </>
  )
}

export default InputTask