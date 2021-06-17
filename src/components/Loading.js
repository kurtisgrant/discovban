import React from 'react'

export default function Loading({text, l1Classes}) {
  const lvl1Classes = l1Classes ? l1Classes : `w-full h-80 text-2xl font-bold flex flex-col place-content-center${text && (' text-' + text)}`
  return (
    <div className={lvl1Classes}>
      <span className="self-center w-min animate-pulse">Loading...</span>
    </div>
  )
}

