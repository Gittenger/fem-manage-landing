import React from 'react'
import CIndex from '../components.index'
import styles from './styles/Layout.module.css'

const layout = 'LAYOUT grid w-full'

const Layout = ({ children }) => {
  const { Header } = CIndex
  return (
    <div className={`${layout} ${styles.grid}`}>
      <Header />
      {children}
    </div>
  )
}

export default Layout
