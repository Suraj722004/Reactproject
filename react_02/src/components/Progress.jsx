import React from 'react'

const Progress = ({ progress , label }) => {
  return (
    <div className="w-full mb-4">
    <div className="flex justify-between mb-2">
      <span className="text-gray-700">{label}</span>
      <span className="text-gray-700">{progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-500 h-4 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
  )
}

export default Progress
