import { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import ScrollingTextHero from '../ScrollingTextHero'
import FilterForm from '../FilterForm'
import BusinessCard from '../BusinessCard'
import sanityClient from '../../client'

const ALL_CATEGORIES_NAME = 'All Categories';
// const ALL_LOCALES_NAME = 'Bancroft Area (All)';
// const DEFAULT_LOCALE = 'Town of Bancroft';

export default function Directory() {
  const categoriesArr = [ALL_CATEGORIES_NAME];
  // const localesArr = [ALL_LOCALES_NAME];
  const [directoryData, setDirectoryData] = useState(null);
  const [filteredDirectoryData, setFilteredDirectoryData] = useState(null);

  const [filterCategory, setFilterCategory] = useState(null);
  // const [filterLocale, setFilterLocale] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'listing']{
        _id,
        memberStatus,
        name,
        "slug": slug.current,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        description,
        categories[]->{_id, title},
        "locale":locale->{_id, name},
        address,
        details,
        phone,
        email,
        facebook,
        instagram,
        website
      } | order(name asc)`)
      .then((data) => setDirectoryData(data))
      .catch(console.error);
  }, []);

  if (directoryData) {

    // Populate categories array & locales array from business data fetched
    directoryData.forEach(listing => {
      if(!listing.categories) return
      listing.categories.forEach(c => {
        if (!categoriesArr.includes(c.title)) {
          categoriesArr.push(c.title);
        };
      });
      // if (listing.locale && !localesArr.includes(listing.locale.name)) {
      //   localesArr.push(listing.locale.name);
      // };
    });
    
    if (filterCategory == null) {
      setFilterCategory(ALL_CATEGORIES_NAME);
    }
    // if (filterLocale == null) {
    //   setFilterLocale(localesArr.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : ALL_LOCALES_NAME);
    // }
  }

  // Filter directory data based on user settings
  useEffect(() => {
    if (!directoryData) return
    setFilteredDirectoryData(directoryData.filter(listing => {
      if (listing.categories) {
        if (!listing.categories.some(({title}) => title === filterCategory) && filterCategory !== ALL_CATEGORIES_NAME) return false;
      }
      // if (!listing.locale && filterLocale !== ALL_LOCALES_NAME) return false;
      // if (listing.locale) {
      //   if (listing.locale !== filterLocale && filterLocale !== ALL_LOCALES_NAME) return false;
      // }
      return true;
    }))
  }, [directoryData, filterCategory]) // Removed filterLocale

  if (!directoryData) return null;


  const handleFilterCategoryChange = (e) => {
    window.scrollTo(0,0);
    setFilterCategory(e.target.value);
  }
  // const handleFilterLocaleChange = (e) => {
  //   setFilterLocale(e.target.value);
  // }
  // const handleClearFilters = (e) => {
  //   setFilterCategory(categoriesArr[0]);
  //   setFilterLocale(localesArr[0]);
  // }
// 
  return (
    <div className="bg-db_blue-dark2 text-db_blue-dark2 min-h-screen pb-32 overflow-hidden">
    <NavBar />
    <ScrollingTextHero text="Directory" bgColor="db_blue" />
    <div className="container buffer md:buffer-1 mx-auto flex flex-col xl:flex-row">

      {/* FILTER */}
      <div className="flex-grow-0 flex-shrink-0 z-10 p-3 w-full md:w-4/5 lg:w-3/4 xl:w-80 md:self-start">
        <div className="xl:fixed xl:w-80 xl:pr-4">
        <div className="p-3 rounded-2xl shadow-lg bg-white">
          <FilterForm 
          categories={categoriesArr} 
          // locales={localesArr} 
          filterCategory={filterCategory} 
          // filterLocale={filterLocale} 
          handleCategoryChange={handleFilterCategoryChange} 
          // handleLocaleChange={handleFilterLocaleChange} 
          // handleClearFilters={handleClearFilters}
          />
        </div>
        </div>
      </div>

      {/* LISTINGS */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 p-3">
        {filteredDirectoryData && (filteredDirectoryData.length > 0 ? filteredDirectoryData.map(listing => <BusinessCard data={listing} key={listing._id} />) : <div className="w-full col-span-full my-5 text-center">No Results</div>)}
      </div>

    </div>
    </div>
  )
}