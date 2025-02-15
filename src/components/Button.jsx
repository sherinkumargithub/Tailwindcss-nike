import React from 'react'

const Button = ({label, iconURL, backgroundColor, textColor, borderColor}) => {
  return (
    // to apply logic in the style, like if condition true apply this style or apply that style. {`...`}

    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}` 
          : "bg-coral-red rounded-full text-white border-coral-red"
        } rounded-full `}>
        {/* Click Me */}
        {label}
        {/* to use it multiple time */}
        {iconURL && <img src={iconURL} alt="arrow right icon" className='ml-2 rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button