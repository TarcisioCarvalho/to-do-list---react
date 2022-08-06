import { PlusCircle } from 'phosphor-react'
import React from 'react'
import styles from './styles.module.css'

const InputTask = () => {
  return (
   <form  className={styles.form}>
        <input className={styles.input}
        type="text" 
        placeholder='Adicione uma nova tarefa'/>
        <button className={styles.button}
        type='submit'>
            Criar 
            <PlusCircle size={16}/>
        </button>
   </form>
  )
}

export default InputTask