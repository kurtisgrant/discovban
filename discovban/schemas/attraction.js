export default {
  name: 'attraction',
  title: 'Attraction',
  type: 'document',
  fieldsets: [
    { name: 'seasons', title: 'Seasons', options: { columns: 4 } }
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'attractionCategory'}}],
    },
    {
      name: 'details',
      title: 'Details',
      type: 'blockContent',
    },
    {
      name: 'locale',
      title: 'Locale',
      type: 'array',
      of: [{type: 'reference', to: { type: 'locale' }}]
    },
    {
      name: 'spring',
      title: 'Spring',
      type: 'boolean',
      fieldset: 'seasons'
    },
    {
      name: 'summer',
      title: 'Summer',
      type: 'boolean',
      fieldset: 'seasons'
    },
    {
      name: 'fall',
      title: 'Fall',
      type: 'boolean',
      fieldset: 'seasons'
    },
    {
      name: 'winter',
      title: 'Winter',
      type: 'boolean',
      fieldset: 'seasons'
    },
    {
      name: 'callsToAction',
      title: 'Calls to Action',
      description: '(Optional) Eg: "Learn more at", "Join the group on Facebook"',
      type: 'array',
      of: [ {type: 'cta'} ]
    },
    {
      name: 'related',
      title: 'Related Posts, Businesses and/or Attractions',
      type: 'array',
      of: [{type: 'relation'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage'
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        subtitle: 'Attraction'
    })}
  },
  initialValue: {
    spring: true,
    summer: true,
    fall: true,
    winter: true
  }
}
