export default {
  name: 'update',
  title: 'Update',
  type: 'document',
  fieldsets: [
    { name: 'placements', title: 'Placement Options', collapsible: true }
  ],
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'onHomepage',
      title: 'Homepage',
      type: 'boolean',
      fieldset: 'placements'
    },
    {
      name: 'onBbia',
      title: 'BBIA Page',
      type: 'boolean',
      fieldset: 'placements'
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
      type: 'date',
      description: 'Enter a time/date after which this update will not be shown on the website. Leave blank for indefinite'
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button'
    }
  ],
  preview: {
    select: {
      title: 'headline',
      onHomepage: 'onHomepage',
      onBbia: 'onBbia'
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        subtitle: `Update ${selection.onHomepage ? '[Home]' : ''} ${selection.onBbia ? '[BBIA]' : ''}`
    })}
  },
  initialValue: {
    onHomepage: true,
    onBbia: true,
  }
}