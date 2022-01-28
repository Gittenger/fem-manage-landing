import React from 'react'
import CIndex from '../components.index'
import styles from './styles/Layout.module.css'

const layout = 'LAYOUT relative grid w-full'

const Layout = ({ children }) => {
  const { Header } = CIndex
  return (
    <div className={`${layout} ${styles.grid}`}>
      <Header className="z-20" />
      {children}
    </div>
  )
}

export default Layout
