// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import coreContent from './coreContent'
import covidContent from './covidContent'
import locale from './locale'

import attraction from './attraction'
import business from './business'
import businessCategory from './businessCategory'
// import post from './post'
// import blogCategory from './blogCategory'

import blockContent from './blockContent'
import cta from './cta'
import button from './button'
import resource from './resource'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    
    coreContent,
    covidContent,
    locale,

    // Attractions
    attraction,

    // Businesses
    business,
    businessCategory,

    // Blog
    // post,
    // blogCategory,

    // Object types
    blockContent,
    cta,
    button,
    resource
  ]),
})
