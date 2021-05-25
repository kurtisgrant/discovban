import React from 'react'

export default function FilterForm(props) {
  return (
    <div className="flex flex-col">
      <label className="font-bold my-1" for="Category">Categories</label>
      <select className="mb-5 rounded-lg" name="Category" id="Category" value={props.filterCategory} onChange={props.handleCategoryChange}>
        {props.categories.map(category => (
        <option key={category} value={category} id={category}>{category}</option>
        ))}
      </select>


      <label className="font-bold my-1" for="Area">Area</label>
      <select className="mb-5 rounded-lg" name="Area" id="Area" value={props.filterLocale} onChange={props.handleLocaleChange}>
        {props.locales.map(locale => (
        <option key={locale} value={locale} id={locale}>{locale}</option>
        ))}
      </select>

      <button className="inline-block rounded-xl bg-db_blue hover:opacity-70 text-white font-bold p-3 float-right mt-3" onClick={props.handleClearFilters}>Clear Filters</button>

    </div>
  )
}