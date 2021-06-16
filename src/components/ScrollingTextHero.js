import React from 'react'

export default function ScrollingTextHero({ text, bgColor }) {
  let animateTime;
  if (text.length > 20) {
    animateTime = 60 // 21+
  } else if (text.length > 15) {
    animateTime = 50 // 16-20
  } else if (text.length > 8) {
    animateTime = 40 // 9-15
  } else if (text.length > 6) {
    animateTime = 45 // 7-9
  } else {
    animateTime = 50 // 5 & under
  }
  const lvl1Classes = `h-56 md:h-64 lg:h-80 w-full bg-${bgColor} fixed top-0 z-0 shadow-lg overflow-hidden`
  const lvl2Classes = `whitespace-nowrap overflow-hidden absolute w-auto top-3 md:top-8 lg:top-10 text-12xl lg:text-13xl text-white opacity-5 uppercase tracking-normal font-bold animate-header-scroll-${animateTime}`

  const str = `${text}  ${text}  ${text}  ${text}  ${text}  `

  return (
    <>
      <div className={lvl1Classes}>
        <div className={lvl2Classes}>
          <span className="whitespace-pre select-none">{str}</span>
        </div>
      </div>
      <div className="h-48 md:h-56 lg:h-64" />
    </>
  )
}
