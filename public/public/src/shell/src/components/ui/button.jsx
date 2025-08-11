import React from 'react'

export function Button({ as: Comp = 'button', className = '', variant = 'default', size = 'md', ...props }) {
  const base = 'inline-flex items-center justify-center font-medium transition rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    default: 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100'
  }
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg'
  }
  const cls = `${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`
  return <Comp className={cls} {...props} />
}
