import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../../client.js'
import NavBar from '../NavBar'
import Loading from '../Loading'


export default function Listing({data}) {
  const [listing, setListing] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'listing' && slug.current == '${slug}']{
      memberStatus,
      name,
      description,
  		"image": mainImage{
				"url": image.asset->url,
  			alt
      },
      categories[]->{_id, title},
      locale->{_id, name},
      address,
      phone,
      email,
      facebook,
      instagram,
      website
    }`).then(data => setTimeout(() => setListing(data[0]), 600)) 
    .catch(console.error)
  }, [slug])


  const divStyle = listing && listing.image && {
    backgroundImage: 'url(' + listing.image.url + ')',
  };


  return (
    <div className="absolute top-0 bg-db_blue-dark2 w-full min-h-screen">
      <NavBar />
      <div className="container buffer md:buffer-1 lg:buffer-2 mx-auto">
      {!listing ? <Loading text="white" /> : (
        <div className="block-content bg-white my-36 p-5 shadow-lg rounded-2xl">

          <h1 className="text-4xl font-bold mb-4 text-db_blue-dark">{listing.name}</h1>


          <div className="w-full flex flex-col md:flex-row gap-5 text-lg">
            {listing.image && <div 
              className="w-100 md:w-1/2 h-96 -mx-5 md:mr-0 md:-ml-5 bg-cover bg-center mb-3" 
              title={listing.image.alt} 
              style={divStyle}
              ></div>}
            <div className="w-full md:w-1/2">
              {listing.description && <p>{listing.description}</p>}
              <div className="text-base my-3">
                {listing.address && <div className="text-gray-500">{listing.address}</div>}
                {listing.phone && <div className="text-gray-500">{listing.phone}</div>}
                {listing.email && <div className="text-gray-500">{listing.email}</div>}
              </div>
            </div>
          </div>

          <div className="w-full flex justify-start gap-5">
          {listing.facebook && <a href={listing.facebook}><button className="bg-db_blue-dark2 text-lg text-white hover:opacity-80 font-semibold px-4 py-3 mt-6 rounded-xl">Facebook Page</button></a>}
          {listing.instagram && <a href={listing.instagram}><button className="bg-db_blue-dark2 text-lg text-white hover:opacity-80 font-semibold px-4 py-3 mt-6 rounded-xl">Instagram Feed</button></a>}
          {listing.website && <a href={listing.website}><button className="bg-db_blue-dark2 text-lg text-white hover:opacity-80 font-semibold px-4 py-3 mt-6 rounded-xl">Our Website</button></a>}
          </div>

        </div>)
      }
      </div>
    </div>
  )
}