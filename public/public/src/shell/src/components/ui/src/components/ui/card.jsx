import React from 'react'

export function Card({ className = '', ...props }) {
  return <div className={`bg-white border rounded-xl ${className}`} {...props} />
}
export function CardHeader({ className = '', ...props }) {
  return <div className={`p-6 border-b ${className}`} {...props} />
}
export function CardContent({ className = '', ...props }) {
  return <div className={`p-6 ${className}`} {...props} />
}
export function CardTitle({ className = '', ...props }) {
  return <h3 className={`text-xl font-semibold ${className}`} {...props} />
}
export function CardDescription({ className = '', ...props }) {
  return <p className={`text-sm text-gray-500 ${className}`} {...props} />
}
