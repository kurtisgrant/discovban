import React from 'react'
import EaglesNestFall from '../../images/EaglesNestFall.jpg'
import LogoRibbon from '../../images/LogoRibbon.png'

export default function Home() {
  return (
    <>
  <div className="bg-blue-900 w-full relative shadow-lg">
    <img src={EaglesNestFall} alt="" className="absolute h-full w-full object-cover"/>
    <div className="inset-0 bg-gradient-to-r from-black opacity-30 absolute"></div>
    <a href="#" className="text-white">
      <img className="absolute -top-5 right-8 md:right-24 w-40 md:w-48 lg:w-56" src={LogoRibbon} alt=""/>
    </a>
    <div className="container buffer-1 md:buffer-2 mx-auto">
      <div className="mr-auto w-4/5 relative flex items-end z-10 pt-48 pb-24">
          <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
              <span className="font-bold uppercase text-white">
                  Welcome
              </span>
              <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-tight mt-1">
                Let us help you explore
              </h1>
          </div>
      </div>
    </div>
  </div>
    <div className="bg-blue-100 w-full py-3">
      <div className="container buffer-1 md:buffer-2 mx-auto">
        <div className="py-10 flex items-start">
          <div className="w-72 text-db_blue-dark bg-white rounded-2xl shadow-xl flex flex-col items-start overflow-hidden">
            <img src={"https://images.pexels.com/photos/929245/pexels-photo-929245.jpeg?cs=srgb&dl=pexels-artem-beliaikin-929245.jpg&fm=jpg"} alt="" className="w-full h-48 shadow"/>
            <div className="p-5">
              <h2 className="text-xl font-bold mb-1">Business Directory</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vel modi nulla.</p>
              <button className="px-4 py-1 mt-5 bg-green-800 text-white font-medium rounded-xl shadow">Browse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}