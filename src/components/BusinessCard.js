import React from 'react'

export default function BusinessCard({ data }) {
  return (
    <div className="bg-db_blue rounded-xl p-3 relative flex flex-col justify-between text-white shadow-lg break-words">
      <div>
        {/* Name and description */}
        <div className={(data.description || data.address || data.phone || data.email) ? "mb-2" : ""}>
          {data.locale && <div className="font-semibold inline-block float-right bg-white text-db_blue text-xs rounded-full px-2 mx-1 whitespace-nowrap">{data.locale.name}</div>}
          <h3 className="font-bold text-xl mb-1 break-normal">{data.name}</h3>
          {data.description && <div className="text-sm leading-4">{data.description}</div>}
        </div>
        {/* Contact details */}
        <div className="text-xs">
          {data.address && <div className="text-gray-300 float-left clear-left">{data.address}</div>}
          {data.phone && <div className="text-gray-300 float-left clear-left">{data.phone}</div>}
          {data.email && <div className="text-gray-300 float-left clear-left">{data.email}</div>}
        </div>
      </div>
      {/* Links */}
      <div className="-mb-2 px-1 gap-2 justify-end flex content-center text-gray-100 text-3xl">
        {data.website && <a href={data.website} className=""><i className="fas fa-external-link-alt"></i></a>}
        {data.facebook && <a href={data.facebook} className=""><i className="fab fa-facebook-square"></i></a>}
        {data.instagram && <a href={data.instagram} className=""><i className="fab fa-instagram"></i></a>}
      </div>
    </div>
  )
}
