import Header from "./components/Header/Header"
import InputTask from "./components/InputTask/InputTask"
import styles from './app.module.css'
import Tasks from "./components/Tasks/Tasks"


function App() {
  

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <InputTask/>
      </main>
      
    </>
  )
}

export default App
