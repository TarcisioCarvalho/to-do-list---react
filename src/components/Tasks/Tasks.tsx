import { ClipboardText } from 'phosphor-react'
import React from 'react'
import Task from '../Task/Task'
import styles from './styles.module.css'

const Tasks = () => {
  return (
    <article className={styles.tasks}>
        <header>
            <p className={styles.blueParagraph}>Tarefas Criadas <span>0</span> </p>
            <p className={styles.purpleParagraph}> <span>0</span> Tarefas Concluidas</p>
        </header>
        <main>
           
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </main>
    </article>
  )
}

export default Tasks