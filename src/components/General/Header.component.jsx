import React from 'react'
import CIndex from '../components.index.js'
import styles from './styles/Header.module.css'

const HeaderStyles = 'relative flex justify-center bg-gray-300'

const Header = () => {
  const { HamburgerMenu } = CIndex
  return (
    <header className={`HEADER ${HeaderStyles} ${styles.header}`}>
      <HamburgerMenu className="absolute" />
      <h1>Let's get started building components...</h1>
    </header>
  )
}

export default Header
