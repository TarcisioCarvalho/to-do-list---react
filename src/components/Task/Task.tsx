import { Trash } from 'phosphor-react'
import React from 'react'
import styles from './styles.module.css'

const Task = () => {
  return (
    <div className={styles.task}>
        <input className={styles.inputCheck} type="checkbox" />
        <p>Tarefa</p>
        <button><Trash/></button>
    </div>
  )
}

export default Task