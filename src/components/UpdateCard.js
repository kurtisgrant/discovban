import React from 'react'

export default function UpdateCard( {data} ) {
  return (
    <div className="bg-gray-200 rounded-2xl p-4 text-center flex flex-col text-db_blue-dark shadow-xl break-words justify-between">
      <div className="mb-3 flex-grow flex flex-col">
        <h3 className="font-semibold text-2xl text-db_blue mb-2 break-normal">{data.headline}</h3>
        {data.date && <div className="text-sm text-gray-500 italic mb-2">{data.date}</div>}
        {data.text && <div className="mb-2">{data.text}</div>}
      </div>
      {data.button.destinationUrl && <a href={data.button.destinationUrl} className="bg-db_blue hover:opacity-80 shadow-lg text-white font-bold p-2 rounded-xl mt-2">{data.button.text}</a>}
    </div>
  )
}
