import React, { useState, useEffect } from 'react'
import sanityClient from "../../client.js";
import EaglesNestFall from '../../images/EaglesNestFall.jpg'
// import TickerSection from '../TickerSection'
import NavBar from '../NavBar'
import UpdateCard from '../UpdateCard'
import BlockContent from '@sanity/block-content-to-react'
import auth from '../../sanityAuth'
import styles from '../../styles/article.module.css'
import { Link } from 'react-router-dom'

    // Attraction tags section temporarily left out********

export default function Home() {
  // const [attractionData, setAttractionData] = useState(null)
  const [siteOptions, setSiteOptions] = useState(null)
  const [updates, setUpdates] = useState(null)

  useEffect(() => {
    // sanityClient
    //   .fetch(`*[_type == 'attraction' && homepage]{
    //     name,
    //     'slug': slug.current
    //   }
    //   `)
    //   .then((data) => setAttractionData(data))
    //   .catch(console.error);
    sanityClient
      .fetch(`*[_type == 'siteOptions']{
        mainCoverText,
        homepageBody->{content},
        footerText
      }`)
      .then((data) => setSiteOptions(data[0]))
      .catch(console.error);

    // Set today's date for updates query
    const d = new Date()
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
    const today = `${ye}-${mo}-${da}`;

    sanityClient
      .fetch(`*[_type == 'update' && onHomepage && (!defined(expiry) || expiry > '${today}')] | order(date desc) {
        _id,
        headline,
        text,
        date,
        button
      }`)
      .then((data) => setUpdates(data))
      .catch(console.error);
  }, []);

  
  if(!siteOptions || !updates) return null // Removed !attractionData

  const bodyClasses = updates.length > 0 ? 'col-span-1 md:col-span-2 text-white order-last md:order-first md:mr-4' : 'col-span-1 md:col-span-3 px-20 mx-auto text-white'

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
                {siteOptions.mainCoverText}
              </h1>
              <Link to={"/directory"}><button className="text-db_blue-dark text-lg bg-white hover:opacity-80 font-semibold px-4 py-3 mt-6 rounded-xl">Visit Directory</button></Link>
          </div>
      </div>
      <div className="flex justify-end">
        <Link to={"/bbia"} className="text-sm md:text-base text-white bg-db_green inline-block z-10 px-3 py-1 rounded-t-lg transition-opacity duration-300 opacity-80 hover:opacity-100">Discover Bancroft is brought to you by the Bancroft BIA</Link>
      </div>
    </div>
  </div>
  {/* Left out to save time for launch */}
  {/* <div className="w-full container mx-auto px-3 md:px-1 py-6 flex flex-col lg:flex-row items-center">
    <div className="mx-10 mt-5 mb-6 text-db_green-dark text-4xl font-semibold text-center">Something for everyone</div>
    <TickerSection items={attractionData}/>
  </div> */}
    <div className="bg-db_green-dark w-full py-3 shadow-lg">
      <div className="container buffer-1 mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {updates.length > 0 && (
          <div>
            <h2 className="my-8 text-3xl text-white font-bold text-center">Updates</h2>
            <div className="grid grid-cols-1 gap-6">
              {updates.length > 0 ? updates.map(update => <UpdateCard data={update} key={update._id} />) : <div className="w-full col-span-full my-5 text-center text-white">No Updates</div>}
            </div>
          </div>)}
          <div className={bodyClasses}>
            <BlockContent projectId={auth.projectId} dataset={auth.dataset} blocks={siteOptions.homepageBody.content} className={styles.blockContent} style={styles}/>
          </div>
        </div>
        <div className="w-full text-white text-sm text-center mt-32">
          {siteOptions.footerText}
        </div>
      </div>
    </div>
  </>
  )
}