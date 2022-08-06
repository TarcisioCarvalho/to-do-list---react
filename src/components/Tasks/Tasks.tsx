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
            <ClipboardText size={56}  className={styles.clipboard}/>
            <p className={styles.firstParahraph}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
            <Task/>
        </main>
    </article>
  )
}

export default Tasks