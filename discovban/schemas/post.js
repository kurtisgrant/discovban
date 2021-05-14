import featuredContentSection from './featuredContentSection'

export default {
  name: 'post',
  title: 'Post',
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'blogCategory'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    ...featuredContentSection
  ],
  initialValue: {
    featuredSectionHeading: 'Related Content',
    featuredSectionEnabled: true
  },
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        subtitle: 'Post',
      })
    },
  },
}
