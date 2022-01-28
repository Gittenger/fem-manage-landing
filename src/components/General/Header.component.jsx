import React from 'react'
import styles from './styles/Header.module.css'

const HeaderStyles = 'flex justify-center bg-gray-300'

const Header = () => {
  return (
    <header className={`HEADER ${HeaderStyles} ${styles.header}`}>
      <h1>Let's get started building components...</h1>
    </header>
  )
}

export default Header
