import React from 'react'
import EaglesNestFall from '../../images/EaglesNestFall.jpg'
import LogoRibbon from '../../images/LogoRibbon.png'
import TickerSection from '../TickerSection'
import { Link } from 'react-router-dom'

export default function Home() {
  const tickerItems = [
    {text: 'Hunting', link: 'https://www.hunting.com'},
    {text: 'Fishing', link: 'https://www.Fishing.com'},
    {text: 'Geocaching', link: 'https://www.Geocaching.com'},
    {text: 'Rockhounding', link: 'https://www.Rockhounding.com'},
    {text: 'Boating', link: 'https://www.Boating.com'},
    {text: 'Hiking', link: 'https://www.Hiking.com'},
    {text: 'Fall-Colours', link: 'https://www.Fall-Colours.com'},
    {text: 'Sight-Seeing', link: 'https://www.Sight-Seeing.com'},
    {text: 'Cycling', link: 'https://www.Cycling.com'},
    {text: 'History', link: 'https://www.History.com'},
    {text: 'Indiginous-Culture', link: 'https://www.Indiginous-Culture.com'},
    {text: 'Birding', link: 'https://www.Birding.com'}
  ]
  return (
    <>
  <div className="bg-blue-900 w-full relative shadow-lg">
    <img src={EaglesNestFall} alt="" className="absolute h-full w-full object-cover"/>
    <div className="inset-0 bg-gradient-to-r from-black opacity-30 absolute"></div>
    <a href="#" className="text-white">
      <img className="z-1 absolute -top-5 right-8 md:right-24 w-40 md:w-48 lg:w-56" src={LogoRibbon} alt=""/>
    </a>
    <div className="container buffer-1 md:buffer-2 mx-auto">
      <div className="mr-auto w-4/5 relative flex items-end z-10 pt-40 pb-8 md:pt-56 md:pb-24">
          <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
              <span className="font-bold uppercase text-white">
                  Welcome
              </span>
              <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-tight mt-1">
                Let us help you explore
              </h1>
              <Link to={"/directory"}><button className="text-db_blue-dark bg-white font-semibold px-3 py-2 mt-6 rounded-lg">Visit Directory</button></Link>
          </div>
      </div>
      <div className="flex justify-end">
      <div className="text-sm md:text-base text-white bg-db_green inline-block z-10 px-3 py-1 rounded-t-lg transition-opacity duration-300 opacity-80 hover:opacity-100">Discover Bancroft is brought to you by the Bancroft BIA</div></div>
    </div>
  </div>
  <div className="w-full container mx-auto px-3 md:px-1 py-6 flex flex-col lg:flex-row items-center">
    <div className="mx-10 mt-5 mb-6 text-db_green-dark text-4xl font-semibold text-center">Something for everyone</div>
    <TickerSection items={tickerItems}/>
  </div>
    <div className="bg-db_green w-full py-3 shadow-lg">
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