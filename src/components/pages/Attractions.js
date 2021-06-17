import React, { useState, useEffect } from 'react'
import sanityClient from '../../client'
import Navbar from '../NavBar'
import ScrollingTextHero from '../ScrollingTextHero'
import AttractionCard from './AttractionCard'
import Loading from '../Loading'

export default function Attractions() {
  const [attractions, setAttractions] = useState();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'attraction']{
        _id,
        name,
        "slug": slug.current,
        details,
        "image": mainImage{
  				alt, 
  				"url": image.asset->url
				}
      } | order(name asc)`)
      .then((data) => setAttractions(data))
      .catch(console.error);
  }, []);


  return (
    <div className="bg-db_green-dark4 text-db_green-dark4 pb-32 overflow-hidden min-h-screen">
      <Navbar />
      <ScrollingTextHero text="Attractions" bgColor="db_green-dark" />
      <div className="container buffer md:buffer-1 lg:buffer-2 mx-auto flex flex-auto flex-col xl:flex-row">
        <div className="z-10 w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {!attractions ? <Loading l1Classes="col-span-full h-80 text-2xl font-bold flex flex-col place-content-center text-white" /> : attractions.map(attraction => <AttractionCard data={attraction} key={attraction._id} />)}
        </div>
      </div>
    </div>
  )
}
