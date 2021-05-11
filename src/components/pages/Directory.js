import { useState, useEffect } from 'react'
import sanityClient from '../../client'

export default function Directory() {
  const [notificationBarData, setNotificationBarData] = useState(null);
  const [directoryData, setDirectoryData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_id == 'coreContent']{
        notificationBarEnabled,
        notificationBarText,
        notificationBarLink
      }`)
      .then((data) => setNotificationBarData(data[0]))
      .catch(console.error);
    sanityClient
      .fetch(`*[_type == 'business']{
        name,
        slug,
        memberStatus,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        categories[]->{title},
        details,
        locale[]->{name},
        phone,
        email
      }`)
      .then((data) => setDirectoryData(data[0]))
      .catch(console.error);
  }, []);

  if (!notificationBarData) return false;

  return (
    <div className="text-xl2">Doing things...{console.log(notificationBarData, directoryData)}</div>
  )
}