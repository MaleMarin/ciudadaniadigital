import React from 'react'

export function Checkbox({ id, checked, onCheckedChange, className = '', ...props }) {
  return (
    <input
      id={id}
      type="checkbox"
      checked={!!checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      className={`h-5 w-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500 ${className}`}
      {...props}
    />
  )
}
