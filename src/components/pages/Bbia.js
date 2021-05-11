import React, { useState, useEffect } from 'react'
import sanityClient from '../../client'
import BlockContent from '@sanity/block-content-to-react';

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
    <div>
      <BlockContent blocks={bbiaData} />
    </div>
  )
}
