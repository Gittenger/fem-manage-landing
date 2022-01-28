import React from 'react'
import styles from './styles/Cta.module.css'

import CIndex from '../components.index.js'

const Cta = () => {
  const { Btn } = CIndex

  return (
    <>
      <div className={`${styles.cta} z-10 pt-6 flex flex-col items-center`}>
        <h1 className="text-center text-4xl font-black">
          Bring everyone together to build better products.
        </h1>
        <p className="pt-2.5 mb-8 text-center text-lg font-light text-gray-600">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Btn textContent="Get Started" />
      </div>
    </>
  )
}

export default Cta
