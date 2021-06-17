import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import sanityClient from '../../client'
import auth from '../../sanityAuth'
import BlockContent from '@sanity/block-content-to-react'
import styles from '../../styles/article.module.css'

export default function Bbia() {
  const [bbiaData, setBbiaData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'contentPiece' && title == 'About the BBIA']{
        content
      }`)
      .then((data) => setBbiaData(data[0]))
      .catch(console.error);
  }, []);

  if (!bbiaData) return false;

  return (
    <div className="absolute top-0 bg-db_green-dark3 w-full">
      <NavBar />
      <div className="container buffer md:buffer-1 lg:buffer-2 mx-auto">
        <div className="block-content bg-white my-36 px-5 py-3 shadow-lg rounded-2xl text-db_blue-dark">
          <BlockContent projectId={auth.projectId} dataset={auth.dataset} blocks={bbiaData.content} className={styles.blockContent} style={styles}/>
        </div>
      </div>
    </div>
  )
}
