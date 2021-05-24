import React, { useState, useEffect } from 'react'
import sanityClient from "../../client.js";
import EaglesNestFall from '../../images/EaglesNestFall.jpg'
import TickerSection from '../TickerSection'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'

export default function Home() {
  const [attractionData, setAttractionData] = useState(null)
  const [heroText, setHeroText] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'attraction' && homepage]{
        name,
        'slug': slug.current
      }
      `)
      .then((data) => setAttractionData(data))
      .catch(console.error);
    sanityClient
      .fetch(`*[_type == 'coreContent']{
        mainCoverText
      }`)
      .then((data) => setHeroText(data[0].mainCoverText))
      .catch(console.error);
  }, []);

  if(!attractionData || !heroText) return null

  return (
    <>
    <NavBar />
  <div className="w-full relative shadow-lg">
    <img src={EaglesNestFall} alt="" className="absolute h-full w-full object-cover"/>
    <div className="inset-0 bg-gradient-to-r from-black opacity-30 absolute"></div>
    <div className="container buffer-1 md:buffer-2 mx-auto">
      <div className="mr-auto w-5/6 relative flex items-end z-10 pt-40 pb-8 md:pt-56 md:pb-24">
          <div className="lg:w-4/5 xl:w-3/5 flex flex-col items-start relative z-10">
              <span className="font-bold uppercase text-white">
                  Welcome
              </span>
              <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl text-white mt-1">
                {heroText}
              </h1>
              <Link to={"/directory"}><button className="text-db_blue-dark bg-white font-semibold px-4 py-3 mt-6 rounded-lg">Visit Directory</button></Link>
          </div>
      </div>
      <div className="flex justify-end">
        <Link to={"/bbia"} className="text-sm md:text-base text-white bg-db_green inline-block z-10 px-3 py-1 rounded-t-lg transition-opacity duration-300 opacity-80 hover:opacity-100">Discover Bancroft is brought to you by the Bancroft BIA</Link>
      </div>
    </div>
  </div>
  <div className="w-full container mx-auto px-3 md:px-1 py-6 flex flex-col lg:flex-row items-center">
    <div className="mx-10 mt-5 mb-6 text-db_green-dark text-4xl font-semibold text-center">Something for everyone</div>
    <TickerSection items={attractionData}/>
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