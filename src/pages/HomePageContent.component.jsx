import React, { useEffect } from 'react'
import styles from './styles/HomePage.module.css'

import CIndex from '../components/components.index.js'

const HomePageContent = () => {
  const {} = CIndex

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={`w-full bg-gray-400 ${styles.grid}`}>hello</div>
    </>
  )
}

export default HomePageContent
