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
      name: 'homepage',
      title: 'Featured on Homepage',
      type: 'boolean'
    },
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
      name: 'details',
      title: 'Details',
      type: 'blockContent',
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
    homepage: true,
    featuredSectionHeading: 'Related Content',
    featuredSectionEnabled: true
  }
}
