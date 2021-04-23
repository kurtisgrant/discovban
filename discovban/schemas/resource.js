export default {
  name: 'resource',
  title: 'Resource',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    }
  ]
}