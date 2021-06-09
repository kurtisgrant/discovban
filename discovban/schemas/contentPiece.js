export default {
  name: 'contentPiece',
  title: 'Content Piece',
  type: 'document',
  fieldsets: [
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    }, 
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    }, 
  ]
}