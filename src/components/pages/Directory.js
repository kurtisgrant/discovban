import { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import FilterForm from '../FilterForm'
import BusinessCard from '../BusinessCard'
import sanityClient from '../../client'

const ALL_CATEGORIES_NAME = 'All Categories';
const ALL_LOCALES_NAME = 'Bancroft Area (All)';
const DEFAULT_LOCALE = 'Downtown Bancroft';

export default function Directory() {
  const categoriesArr = [ALL_CATEGORIES_NAME];
  const localesArr = [ALL_LOCALES_NAME];
  const [directoryData, setDirectoryData] = useState(null);
  const [filteredDirectoryData, setFilteredDirectoryData] = useState(null);

  const [filterCategory, setFilterCategory] = useState(null);
  const [filterLocale, setFilterLocale] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'business']{
        name,
        slug,
        description,
        address,
        memberStatus,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        categories[]->{_id, title},
        details,
        "locale":locale->name,
        phone,
        email
      } | order(name asc)`)
      .then((data) => setDirectoryData(data))
      .catch(console.error);
  }, []);

  if (directoryData) {

    // Populate categories array & locales array from business data fetched
    directoryData.forEach(business => {
      business.categories.forEach(c => {
        if (!categoriesArr.includes(c.title)) {
          categoriesArr.push(c.title);
        };
      });
      if (business.locale && !localesArr.includes(business.locale)) {
        localesArr.push(business.locale);
      };
    });
    
    if (filterCategory == null) {
      setFilterCategory(ALL_CATEGORIES_NAME);
    }
    if (filterLocale == null) {
      setFilterLocale(localesArr.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : ALL_LOCALES_NAME);
    }
  }

  useEffect(() => {
    if (!directoryData) return
    setFilteredDirectoryData(directoryData.filter(business => {
      if (!business.categories.some(({title}) => title === filterCategory) && filterCategory !== ALL_CATEGORIES_NAME) return false;
      if (business.locale !== filterLocale && filterLocale !== ALL_LOCALES_NAME) return false;
      return true;
    }))
  }, [directoryData, filterCategory, filterLocale])

  if (!directoryData) return null;


  const handleFilterCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  }
  const handleFilterLocaleChange = (e) => {
    setFilterLocale(e.target.value);
  }
  const handleClearFilters = (e) => {
    setFilterCategory(categoriesArr[0]);
    setFilterLocale(localesArr[0]);
  }

  return (
    <>
    <NavBar />
    <div className="h-80 w-full bg-db_green-dark absolute top-0 z-0 shadow-lg"></div>
    <div className="container buffer md:buffer-1 lg:buffer-2 mt-36 mx-auto flex flex-auto flex-col xl:flex-row">

      {/* FILTER */}
      <div className="rounded-2xl shadow-lg bg-white z-10 m-2 p-3 md:self-start">
        <FilterForm categories={categoriesArr} locales={localesArr} filterCategory={filterCategory} filterLocale={filterLocale} handleCategoryChange={handleFilterCategoryChange} handleLocaleChange={handleFilterLocaleChange} handleClearFilters={handleClearFilters}/>
      </div>

      {/* LISTINGS */}
      <div className="rounded-2xl shadow-lg bg-white z-10 flex-grow m-2 p-3 pb-24">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(225px, 1fr) )', gridGap: "10px"}}>

          {filteredDirectoryData && (filteredDirectoryData.length > 0 ? filteredDirectoryData.map(biz => <BusinessCard data={biz} key={biz.name} />) : <div className="w-full col-span-full my-5 text-center">No Results</div>)}
        </div>
      </div>

    </div>
    </>
  )
}