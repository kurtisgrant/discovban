import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import auth from '../../sanityAuth'
import styles from '../../styles/article.module.css'

export default function Attraction({ data }) {
  const divStyle = {
    color: 'blue',
    backgroundColor: 'white',
    backgroundImage: 'url(' + data.image.url + ')',
  };
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg">
      <h2 className="text-xl font-extrabold mb-3">{data.name}</h2>

      <div className="">

        {data.image && <div 
        className="w-100 h-56 -mx-5 bg-cover bg-center" 
        title={data.image.alt} 
        style={divStyle}
        ></div>}

        <p className="mt-3 break-words">
          <BlockContent projectId={auth.projectId} dataset={auth.dataset} blocks={data.details} className={styles.blockContent} style={styles} />
        </p>

      </div>

    </div>
  )
}
