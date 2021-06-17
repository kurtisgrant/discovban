import React from 'react'
import { Link } from 'react-router-dom'

const DESC_PREVIEW_LENGTH = 120;

export default function BusinessCard({ data }) {
  const divStyle = {
    backgroundImage: 'url(' + data.image.url + ')',
  };

  const descriptionEl = (data.description && (data.description.length < DESC_PREVIEW_LENGTH ? 
  <p>{data.description}</p> : 
  <p>{shorten(data.description, DESC_PREVIEW_LENGTH)}...</p>))

  function shorten(str, length) {
    let s = str.slice(0, length)
    let l = length;
    while (s[l] !== ' ' && l > 0) {
      l--
    }
    return s.slice(0,l);
  }

  return (
    <Link 
    className="group z-10"
    to={"/directory/" + data.slug}>
      <div className="relative h-full bg-white rounded-xl p-5 flex flex-col justify-between shadow-lg break-words transform lg:group-hover:scale-95">
        <div className="">
          {/* Name and description */}
          <div className={(data.description || data.address || data.phone || data.email) ? "mb-4" : ""}>
            {/* {data.locale && <div className="font-semibold inline-block float-right bg-white text-db_blue text-xs rounded-full px-2 mx-1 whitespace-nowrap">{data.locale.name}</div>} */}
            <h3 className="font-bold text-2xl mb-3 break-normal">{data.name}</h3>
            {data.image && <div 
            className="w-100 h-56 -mx-5 bg-cover bg-center my-3" 
            title={data.image.alt} 
            style={divStyle}
            ></div>}
            {data.description && <div className="text-base leading-5">{descriptionEl}</div>}
          </div>
          {/* Contact details */}
          <div className="text-sm">
            {data.address && <div className="text-gray-400 float-left clear-left">{data.address}</div>}
            {data.phone && <div className="text-gray-400 float-left clear-left">{data.phone}</div>}
            {data.email && <div className="text-gray-400 float-left clear-left">{data.email}</div>}
          </div>
        </div>
        {/* Links */}
        <div className="-mb-2 px-1 gap-2 justify-end flex content-center text-3xl">
          {data.website && <a href={data.website} className="hover:opacity-80"><i className="fas fa-external-link-alt"></i></a>}
          {data.facebook && <a href={data.facebook} className="hover:opacity-80"><i className="fab fa-facebook-square"></i></a>}
          {data.instagram && <a href={data.instagram} className="hover:opacity-80"><i className="fab fa-instagram"></i></a>}
        </div>
      </div>
    </Link>
  )
}
