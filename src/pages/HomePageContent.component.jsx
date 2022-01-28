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
      <div className={`${styles.bgImg} z-10 absolute`}></div>
    </>
  )
}

export default HomePageContent
