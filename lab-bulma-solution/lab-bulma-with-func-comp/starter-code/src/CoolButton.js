import React from 'react';

const CoolButton = (props) => {

  console.log(props)

  const { isSmall, isDanger, className, isSuccess, children } = props

  const classNameString = `
    button
    ${className}
    ${isSmall ? 'is-small' : ''}
    ${isDanger ? 'is-danger' : ''}
    ${isSuccess ? 'is-success' : ''}
  `

  return (
    <button className={classNameString}>
      {children}
    </button>
  )
};

export default CoolButton;
