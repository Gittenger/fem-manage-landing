import React, { useEffect } from 'react'
import styles from './styles/HomePage.module.css'
import images from '../assets/img-index.js'

import CIndex from '../components/components.index.js'
const {
  img: { IntroImg },
} = images

const HomePageContent = () => {
  const {} = CIndex

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={`${styles.bgImg} z-0 absolute`}></div>
      <div
        className={`${styles.introImgWrapper} z-10 flex items-start justify-center`}
      >
        <img src={IntroImg} alt="" />
      </div>
    </>
  )
}

export default HomePageContent
