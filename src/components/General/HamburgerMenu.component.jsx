import React, { useState } from 'react'
import styles from './styles/HamburgerMenu.module.css'

const btn = 'relative cursor-pointer transition duration-500'
const icon = 'transition duration-500 absolute'
const left = ''
const right = ''

const HamburgerMenu = ({ className }) => {
  const [active, setActive] = useState(false)

  return (
    <button
      onClick={() => {
        setActive(!active)
      }}
      className={`${className} ${btn} ${styles.parent} ${
        active ? styles.active : ''
      }`}
    >
      <div className={`${icon} ${left}`}></div>
      <div className={`${icon} ${right}`}></div>
    </button>
  )
}

export default HamburgerMenu
