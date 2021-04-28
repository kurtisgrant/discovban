export default {
  name: 'business',
  title: 'Business',
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
      of: [{type: 'reference', to: {type: 'businessCategory'}}],
    },
    {
      name: 'details',
      title: 'Details',
      type: 'blockContent',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'memberStatus',
      title: 'BBIA Membership',
      type: 'boolean'
    },    
    {
      name: 'locale',
      title: 'Locale',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'locale'}]}]
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'callsToAction',
      title: 'Calls to Action',
      description: 'Eg: "Visit our website", "Like us on Facebook", "Shop online at',
      type: 'array',
      of: [ {type: 'cta'} ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage'
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        subtitle: 'Business'
    })}
  },
}
