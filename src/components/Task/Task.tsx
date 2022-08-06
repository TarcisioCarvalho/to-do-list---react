import { Trash } from 'phosphor-react'
import React from 'react'
import styles from './styles.module.css'

const Task = () => {
  return (
    <div className={styles.task}>
        
          <input className={styles.inputCheck} type="checkbox" />
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, accusamus quis aliquam eaque id illo delectus quam, nostrum, ipsa magni vitae mollitia? Dolores nemo tenetur quae id aliquid sed mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, facilis! Similique accusamus aspernatur odit! Atque doloribus, modi reprehenderit ex perspiciatis aliquam nobis aut eos totam amet neque non quibusdam molestias.</p>
        <button className={styles.button}>
          <Trash size={24}/>
        </button>
    </div>
  )
}

export default Task