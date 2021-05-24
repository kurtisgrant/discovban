import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TickerSection({items}) {
  const numOfItems = items.length;
  return (
    <div className="w-full">
      <ul className="m-auto px-2 md:px-6 py-5 container flex flex-wrap justify-center">
        {numOfItems > 0 && items.map((item, index) => (
          <li className="mx-1 my-3 md:mx-2 md:my-3 inline-block" key={item.slug}>
            <NavLink to={`attraction/${item.slug}`} className="px-3 py-2 md:px-4 md:py-2 bg-db_green-dark2 shadow-md rounded-2xl text-white tracking-wide font-medium opacity-90 transform translate-x-0 translate-y-0 hover:translate-x-12 hover:translate-y-12">{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

