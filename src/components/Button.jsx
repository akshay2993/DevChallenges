import React from 'react'

const Button = ({btn_class, title, text, disabled, startIcon, endIcon, hover}) => {
  return (
    <div className='btn-container'>
        <p className={hover && `hover`}>{title}</p>
        <button disabled={disabled} className={`btn ${btn_class}`}>{startIcon}{text}{endIcon}</button>
    </div>
  )
}

export default Button