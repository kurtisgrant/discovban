import React from 'react'

export default function UpdateCard( {data} ) {
  return (
    <div className="bg-white rounded-3xl p-4 text-center flex flex-col text-db_blue-dark shadow-xl break-words justify-between">
      <div className="mb-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-2xl md:text-3xl text-db_blue mb-2 break-normal">{data.business}</h3>
        {data.address && <div className="text-sm text-gray-500 italic mb-2">{data.address}</div>}
        {data.notice && <div className="leading-4 mt-3 flex-grow flex flex-col justify-center"><div>{data.notice}</div></div>}
      </div>
      {data.button.url && <button href={data.button.url} className="bg-db_blue hover:opacity-80 shadow-lg text-white font-bold p-2 rounded-xl mt-4">{data.button.text}</button>}
    </div>
  )
}
