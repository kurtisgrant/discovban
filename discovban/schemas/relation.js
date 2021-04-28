export default {
  name: 'relation',
  title: 'Relation',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      description: '(Optional)',
      type: 'string'
    },
    {
      name: 'relatedItem',
      title: 'Related Item',
      description: 'Search for any blog post, business or attraction.',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [
        {type: 'post'},
        {type: 'business'},
        {type: 'attraction'},
      ]
    },
    {
      name: 'text',
      title: 'Text',
      description: '(Optional)',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'relatedItem.name',
      heading: 'heading',
      media: 'relatedItem.mainImage',
      type: 'relatedItem._type'
    },
    prepare(selection) {
      return {
        subtitle: `${selection.title} ${selection.type && '('+ selection.type.toUpperCase() + ')'}`,
        title: (selection.heading ? selection.heading : ''),
        media: selection.media
      }
    }
  }
}