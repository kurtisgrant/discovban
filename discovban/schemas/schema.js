// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import siteOptions from './siteOptions'
import locale from './locale'

import page from './page'
import attraction from './attraction'
import listing from './listing'
import listingCategory from './listingCategory'
import post from './post'
// import blogCategory from './blogCategory'

import blockContent from './blockContent'
import figure from './figure'
import button from './button'
import resource from './resource'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    
    siteOptions,
    locale,

    // Pages
    page,

    // Attractions
    attraction,

    // Directory
    listing,
    listingCategory,

    post,

    // Object types
    blockContent,
    figure,
    button,
    resource
  ]),
})
