import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import auth from '../../sanityAuth'
import styles from '../../styles/article.module.css'

export default function Attraction({ data }) {
  const img = {backgroundImage: data.image.url}
  return (
    <div className="bg-white rounded-2xl p-5 mb-5 shadow-lg">
      <h2 className="text-2xl font-extrabold mb-3">{data.name}</h2>
      {data.image && <div 
      className="max-h-64 -mx-5 bg-center overflow-hidden" 
      title={data.image.alt} 
      style={img}
      ></div>}
      <p className="w-100">
        <BlockContent projectId={auth.projectId} dataset={auth.dataset} blocks={data.details} className={styles.blockContent} style={styles} />
      </p>
    </div>
  )
}
