import featuredContentSection from './featuredContentSection'

export default {
  name: 'business',
  title: 'Business',
  type: 'document',
  fieldsets: [
    {
      name: 'featuredContent', 
      title: 'Featured Content Section',
      options: {collapsible: true, collapsed: false}
    }, 
    {
      name: 'businessInfo', 
      title: 'Business Info',
      options: {collapsible: true, collapsed: false}
    }
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
      }
    },
    {
      name: 'memberStatus',
      title: 'BBIA Membership',
      type: 'boolean'
    },    
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      }
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
      name: 'locale',
      title: 'Locale(s)',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'locale'}]}],
      fieldset: 'businessInfo'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      fieldset: 'businessInfo'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      fieldset: 'businessInfo'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      fieldset: 'businessInfo'
    },
    ...featuredContentSection
  ],
  initialValue: {
    seasons: ['spring', 'summer', 'fall', 'winter'],
    featuredSectionHeading: 'Related Content',
    featuredSectionEnabled: true
  },
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
