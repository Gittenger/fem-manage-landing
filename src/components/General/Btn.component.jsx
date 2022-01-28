import React from 'react'
import styles from './styles/Btn.module.css'

const Btn = ({ textContent, sm }) => {
  return (
    <button
      className={` font-bold py-3 px-4 rounded-3xl duration-300 ${
        sm ? styles.btnSm : styles.btn
      } bg-red-600 text-white hover:bg-red-300 hover:shadow-xl border-none`}
    >
      {textContent}
    </button>
  )
}

export default Btn
