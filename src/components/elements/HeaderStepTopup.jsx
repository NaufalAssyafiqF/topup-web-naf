import React from 'react'

const HeaderStepTopup = ({stepNumber, title}) => {
  return (
    <>
      <div className="flex space-x-6 mb-4">
        <h1 className="text-white text-2xl font-medium">{stepNumber}</h1>
        <p className="text-white text-2xl font-medium">{title}</p>
      </div>
      <hr />
    </>
  );
}

export default HeaderStepTopup