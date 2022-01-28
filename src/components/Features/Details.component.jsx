import React from 'react'
import CIndex from '../components.index'
import styles from './styles/Details.module.css'
import gridStyles from '../General/styles/Layout.module.css'

const Details = () => {
  const {} = CIndex

  return (
    <div className={`grid ${styles.grid} ${gridStyles.gridSection} pt-32`}>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-black text-center mb-4">
          What’s different about Manage?
        </h2>
        <p className="text-center text-lg font-light text-gray-600">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
    </div>
  )
}

export default Details
