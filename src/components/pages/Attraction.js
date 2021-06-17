import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../../client.js'

export default function Attraction() {
  const [attraction, setAttraction] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient.fetch(`*[slug.current == '${slug}']{

    }`).then(data => setAttraction(data))
    .catch(console.error)
  }, [slug])
  return (
    <div>
      {attraction.name}
    </div>
  )
}
