import React from 'react'

export default function BusinessCard({ data }) {
  return (
    <div className="bg-db_blue rounded-xl p-3 flex flex-col text-white shadow-lg break-words">
      <div className={(data.description || data.address || data.phone || data.email) ? "mb-2" : ""}>
        {data.locale && <div className="font-semibold inline-block float-right bg-white text-db_blue text-xs rounded-full px-2 mx-1 whitespace-nowrap">{data.locale}</div>}
        <h3 className="font-bold text-xl mb-1 break-normal">{data.name}</h3>
        {data.description && <div className="text-sm leading-4">{data.description}</div>}
      </div>
      <div className="text-xs">
        {data.address && <div className="text-gray-300">{data.address}</div>}
        {data.phone && <div className="text-gray-300">{data.phone}</div>}
        {data.email && <div className="text-gray-300">{data.email}</div>}
      </div>
    </div>
  )
}
