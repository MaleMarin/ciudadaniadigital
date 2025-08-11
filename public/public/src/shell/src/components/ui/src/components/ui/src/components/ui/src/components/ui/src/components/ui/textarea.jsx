import React from 'react'

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
      {...props}
    />
  )
}
