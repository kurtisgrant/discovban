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
      .fetch(`*[_id == 'coreContent']{
        aboutBBIA
      }`)
      .then((data) => setBbiaData(data[0].aboutBBIA))
      .catch(console.error);
  }, []);

  if (!bbiaData) return false;

  return (
    <>
      <div className="absolute top-0 bg-db_green-dark w-full">
        <NavBar />
        <div className="container buffer md:buffer-1 lg:buffer-2 mx-auto">
          <div className="block-content bg-white my-36 py-3 shadow-lg rounded-2xl text-db_blue-dark">
            <BlockContent projectId={auth.projectId} dataset={auth.dataset} blocks={bbiaData} className={styles.blockContent} style={styles}/>
            {console.log(styles.blockContent)}
          </div>
        </div>
      </div>
    </>
  )
}
