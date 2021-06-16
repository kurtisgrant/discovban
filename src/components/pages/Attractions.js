import React, { useState, useEffect } from 'react'
import sanityClient from '../../client'
import Navbar from '../NavBar'
import ScrollingTextHero from '../ScrollingTextHero'
import Attraction from './Attraction'

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

  if (!attractions) return null;

  return (
    <div className="bg-db_green-dark4 text-db_green-dark4">
      <Navbar />
      <ScrollingTextHero text="Attractions" bgColor="db_green-dark" />
      <div className="container buffer md:buffer-1 lg:buffer-2 mx-auto flex flex-auto flex-col xl:flex-row">
        <div className="z-10">
          {attractions.map(attraction => <Attraction data={attraction} key={attraction._id} />)}
        </div>
      </div>
    </div>
  )
}
