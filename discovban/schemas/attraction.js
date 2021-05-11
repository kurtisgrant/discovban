import featuredContentSection from './featuredContentSection'

export default {
  name: 'attraction',
  title: 'Attraction',
  type: 'document',
  fieldsets: [{
    name: 'featuredContent', 
    title: 'Featured Content Section',
    options: {collapsible: true, collapsed: false}
  }],
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
      name: 'types',
      title: 'Attraction Type(s)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'attractionType'}}],
    },
    {
      name: 'details',
      title: 'Details',
      type: 'blockContent',
    },
    {
      name: 'seasons',
      title: 'Seasons',
      type: 'array',
      description: '(Leave all selected if not seasonal)',
      of: [{type: "string"}],
      options: {
        list: [
          {title: 'Spring', value: 'spring'},
          {title: 'Summer', value: 'summer'},
          {title: 'Fall', value: 'fall'},
          {title: 'Winter', value: 'winter'}
        ]
      }
    },
    ...featuredContentSection,
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
    seasons: ['spring', 'summer', 'fall', 'winter'],
    featuredSectionHeading: 'Related Content',
    featuredSectionEnabled: true
  }
}
