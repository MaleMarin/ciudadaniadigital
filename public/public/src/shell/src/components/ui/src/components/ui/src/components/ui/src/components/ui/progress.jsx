import React from 'react'

export function Progress({ value = 0, className = '' }) {
  const v = Math.max(0, Math.min(100, value))
  return (
    <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <div className="h-full bg-orange-500" style={{ width: `${v}%`, height: '100%' }} />
    </div>
  )
}
