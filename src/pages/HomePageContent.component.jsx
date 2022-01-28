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
      <div className={`${styles.cta} pt-6 flex flex-col items-center`}>
        <h1 className="text-center text-4xl font-black">
          Bring everyone together to build better products.
        </h1>
        <p className="pt-2.5 text-center text-lg font-light text-gray-600">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
      </div>
    </>
  )
}

export default HomePageContent
