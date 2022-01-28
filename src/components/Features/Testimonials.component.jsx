import React from 'react'
import styles from './styles/Testimonials.module.css'
import CIndex from '../components.index.js'
import images from '../../assets/img-index.js'

const {
  avatar: { AliImg },
} = images

const Testimonials = () => {
  const { Btn } = CIndex

  return (
    <>
      <h2
        id={styles.heading}
        className={`text-center text-4xl font-black mt-8 mb-24`}
      >
        What they've said
      </h2>
      <div
        id={styles.wrapper}
        className={`bg-gray-100 relative pt-16 pb-10 flex flex-col items-center`}
      >
        <div id={styles.avatar} className={`absolute`}>
          <img src={AliImg} alt="" />
        </div>
        <h3 className={`font-semibold text-lg pb-5`}>Ali Bravo</h3>
        <p className={`text-center px-6 text-gray-500`}>
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </p>
      </div>
      <div
        id="indicators"
        className={`${styles.indicators} flex justify-center space-x-1 mt-6 mb-16`}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Btn
        id={styles.btn}
        className="justify-self-center shadow-lg mb-12"
        textContent="Get Started"
      />
    </>
  )
}
export default Testimonials
