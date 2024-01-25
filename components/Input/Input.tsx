import React, { FC, ReactNode } from 'react'

interface InputProps {
  placeholder?: string
  icon?: ReactNode
}

const Input: FC<InputProps> = ({ placeholder, icon }) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="pl-9 pr-20 py-2 bg-gray-100 border-none rounded-2xl w-full h-9 text-gray-700 focus:outline-none focus:ring-0"
        placeholder={placeholder}
      />
      <div
        className="absolute inset-y-0 left-0 pl-3  
            flex items-center  
            pointer-events-none"
      >
        {icon}
      </div>
    </div>
  )
}

export default Input
