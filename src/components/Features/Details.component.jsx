import React from 'react'
import CIndex from '../components.index'
import styles from './styles/Details.module.css'
import gridStyles from '../General/styles/Layout.module.css'

const Details = () => {
  const { NumHeading } = CIndex

  return (
    <div
      className={`grid ${styles.grid} ${gridStyles.gridSection} pt-32 w-full`}
    >
      <div className="w-full flex flex-col items-center mb-10">
        <h2 className="text-3xl font-black text-center mb-4">
          What’s different about Manage?
        </h2>
        <p className="text-center text-lg font-light text-gray-600">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div>
        <NumHeading num="01" textContent="Track company-wide progress" />
        <p className="text-base font-light text-gray-600 px-5 mb-12 leading-relaxed">
          See how your day-to-day tasks fit into the wider vision. Go from
          tracking progress at the milestone level all the way done to the
          smallest of details. Never lose sight of the bigger picture again.
        </p>
        <NumHeading num="02" textContent="Advanced built-in reports" />
        <p className="text-base font-light text-gray-600 px-5 mb-12 leading-relaxed">
          Set internal delivery estimates and track progress toward company
          goals. Our customisable dashboard helps you build out the reports you
          need to keep key stakeholders informed.
        </p>
        <NumHeading num="03" textContent="Everything you need in one place" />
        <p className="text-base font-light text-gray-600 px-5 mb-12 leading-relaxed">
          Everything you need in one place Stop jumping from one service to
          another to communicate, store files, track tasks and share documents.
          Manage offers an all-in-one team productivity solution.
        </p>
      </div>
    </div>
  )
}

export default Details
