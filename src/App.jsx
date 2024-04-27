import { useState } from 'react'
import './App.css'
import styles from "/src/home.module.css"

function App() {

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action="">
          <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
          <input
            type="text"
            id={styles.name}
            placeholder='e.g. Jane Appleseed'
          />
          <label htmlFor="cardholder-number">CARD NUMBER</label>
          <input
            type="number"
            id={styles.cardNumber}
            placeholder='e.g. 1234 5678 9123 0000'
          />
          <label htmlFor="date">EXP. DATE (MM/YY)</label>
          <label htmlFor="CVC">CVC</label>
          <div className={styles.expiryInfo}>
            <input
              type="number"
              id={styles.dateMonth}
              placeholder='MM'
            />
            <input
              type="number"
              id={styles.dateYear}
              placeholder='YY'
            />
            <input
              type="number"
              id={styles.cvc}
              placeholder='e.g. 123'
            />
          </div>
          <button>Confirm</button>
        </form>
      </div>
    </div>
  )
}

export default App
