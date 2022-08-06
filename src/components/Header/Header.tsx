import React from 'react'
import styles from './styles.module.css'
import logo from '../../assets/img/logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={logo} alt="Logo to-do-list" />
    </header>
  )
}

export default Header