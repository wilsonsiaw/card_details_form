import { useState } from 'react'
import './App.css'
import styles from "/src/home.module.css"

function App() {

  return (
    <div className={styles.container}>
      <form action="">
        <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
        <input 
          type="text"
          id='name'
          placeholder='e.g Jane Appleseed'
        />
        <label htmlFor="cardholder-number">CARD NUMBER</label>
        <input
          type="number" 
          id='card-number'
          placeholder='e.g. 1234 5678 9123 0000'
        />
        <div>
          <label htmlFor="date">EXP. DATE (MM/YY)</label>
          <input
            type="number"
            id='date'
            placeholder='MM'
          />
          <input
            type="number"
            id='date'
            placeholder='YY'
          />
          <label htmlFor="CVC">CVC</label>
          <input
            type="number"
            id='date'
            placeholder='e.g. 123'
          />
        </div>
        <button>Confirm</button>
      </form>
    </div>
  )
}

export default App
