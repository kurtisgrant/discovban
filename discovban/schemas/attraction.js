export default {
  name: 'attraction',
  title: 'Attraction',
  type: 'document',
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
      of: [{type: 'locale'}]
    },
    {
      name: 'callsToAction',
      title: 'Calls to Action',
      description: '(Optional) Eg: "Learn more at", "Join the group on Facebook"',
      type: 'array',
      of: [ {type: 'cta'} ]
    },
    {
      name: 'relatedBusinesses',
      title: 'Related Businesses',
      type: 'array',
      of: [{type: 'reference', to: {type: 'business'}}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    }
  },
}
