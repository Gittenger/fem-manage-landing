import React from 'react'

const NumHeading = ({ num, textContent, className }) => {
  return (
    <div className={`${className} flex justify-start items-center h-10 mb-3`}>
      <div className="z-20 ml-5 py-2.5 px-7 rounded-3xl bg-red-600 text-white font-bold">
        {num}
      </div>
      <div className="z-10 bg-red-300 bg-opacity-40 -ml-6 py-2.5 w-full">
        <p className="ml-10 font-bold">{textContent}</p>
      </div>
    </div>
  )
}

export default NumHeading
