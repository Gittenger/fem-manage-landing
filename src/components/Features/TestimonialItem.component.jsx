import React from 'react'
import styles from './styles/TestimonialItem.module.css'

const TestimonialItem = ({ imgSrc, textContent, name }) => {
  return (
    <div
      id="testimonial-wrapper"
      className={`${styles.wrapper} bg-gray-100 relative pt-16 pb-10 flex flex-col items-center`}
    >
      <div id={styles.avatar} className={`absolute`}>
        <img src={imgSrc} alt="" />
      </div>
      <h3 className={`font-semibold text-lg pb-5`}>{name}</h3>
      <p className={`text-center px-6 text-gray-500`}>{textContent}</p>
    </div>
  )
}

export default TestimonialItem
