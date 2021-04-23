export default {
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
      description: '(Optional)',
      type: 'text'
    },
    {
      name: 'button',
      type: 'button'
    }
  ]
}