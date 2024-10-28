import React from 'react'

const CustomText = ({title = "CustomText",className = "text-2xl text-white font-normal leading-normal tracking-normal font-light"}) => {
    return (
        <p className={`${className}`}>{title}</p>
    )
}

export default CustomText