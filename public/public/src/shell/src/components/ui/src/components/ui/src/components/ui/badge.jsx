import React from 'react'

export function Badge({ className = '', variant = 'default', ...props }) {
  const variants = {
    default: 'bg-gray-900 text-white',
    secondary: 'bg-gray-100 text-gray-700'
  }
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${variants[variant] || variants.default} ${className}`} {...props} />
  )
}
