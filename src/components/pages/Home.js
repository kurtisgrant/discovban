import React, { useState, useEffect } from 'react'
import sanityClient from "../../client.js";
import EaglesNestFall from '../../images/EaglesNestFall.jpg'
import TickerSection from '../TickerSection'
import NavBar from '../NavBar'
import UpdateCard from '../UpdateCard'
import { Link } from 'react-router-dom'

export default function Home() {
  const [attractionData, setAttractionData] = useState(null)
  const [coreContent, setCoreContent] = useState(null)
  const [covidData, setCovidData] = useState(null)

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
        mainCoverText,
        footerText
      }`)
      .then((data) => setCoreContent(data[0]))
      .catch(console.error);
    sanityClient
      .fetch(`*[_type == 'covidContent'] {
        "updates": covidBusinessNotices[] {
          "business": business->name,
          "address": business->address,
          notice,
          "button": {text, url}[]
        },
        covidSectionHeader
      }`)
      .then((data) => setCovidData(data[0]))
      .catch(console.error);
  }, []);

  if(!attractionData || !coreContent || !covidData) return null

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
                {coreContent.mainCoverText}
              </h1>
              <Link to={"/directory"}><button className="text-db_blue-dark text-lg bg-white hover:opacity-80 font-semibold px-4 py-3 mt-6 rounded-xl">Visit Directory</button></Link>
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
      <div className="container buffer-1 md:buffer-2 mx-auto mb-8">
        <h2 className="my-20 text-4xl text-white font-bold text-center">{covidData.covidSectionHeader}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(225px, 1fr) )', gridGap: "25px"}}>
          {covidData.updates && (covidData.updates.length > 0 ? covidData.updates.map(update => <UpdateCard data={update} key={update.name} />) : <div className="w-full col-span-full my-5 text-center text-white">No Updates</div>)}
        </div>
        <div className="w-full text-white text-sm text-center mt-32">
          {coreContent.footerText}
        </div>
      </div>
    </div>
  </>
  )
}