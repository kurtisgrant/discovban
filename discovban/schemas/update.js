export default {
  name: 'update',
  title: 'Update',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    },
    {
      name: 'expiry',
      title: 'Expiry Date',
      type: 'datetime',
      description: 'Enter a time/date after which this update will not be shown on the website. Leave blank for indefinite'
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button'
    }
  ]
}