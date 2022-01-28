import React from 'react'
import styles from './styles/Cta.module.css'

import CIndex from '../components.index.js'

const Cta = () => {
  const { Btn } = CIndex

  return (
    <>
      <div
        className={`${styles.cta} relative z-10 pt-6 flex flex-col items-center`}
      >
        <div className={`${styles.bgImg} z-0 absolute`}></div>
        <h1 className="z-10 text-center text-4xl font-black">
          Bring everyone together to build better products.
        </h1>
        <p className="z-10 pt-2.5 mb-8 text-center text-lg font-light text-gray-600">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Btn className="z-10" textContent="Get Started" />
      </div>
    </>
  )
}

export default Cta
