export default {
  name: 'siteOptions',
  title: 'Site Options',
  type: 'document',
  // __experimental_actions: ['update', 'publish'],
  fieldsets: [
    {name: 'homepage', title: 'Homepage Options', options: {collapsible: true, collapsed: false}}
  ],
  fields: [
    {
      name: 'menuItems',
      title: 'Additional Menu Items',
      type: 'array',
      description: 'To be added in addition to: Home, Businesses/Services and Attractions',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'label',
            title: 'Label',
            type: 'string'
          },
          {
            name: 'pageContent',
            title: 'Page Content',
            type: 'reference',
            to: { type: 'page' }
          }
        ]
      }]
    },
    {
      name: 'mainCoverText',
      title: 'Main Cover Text',
      type: 'string',
      fieldset: 'homepage'
    }, 
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
      fieldset: 'homepage'
    }, 
    {
      name: 'homepageBody',
      title: 'Homepage Content Source',
      type: 'reference',
      to: { type: 'page' },
      fieldset: 'homepage'
    }, 
  ], 
  preview: {
    prepare() {
      return {title: 'Site Options'}
    }
  }
}