export default {
  name: 'siteOptions',
  title: 'Site Options',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fieldsets: [
    {name: 'homepage', title: 'Homepage Options', options: {collapsible: true, collapsed: false}}
  ],
  fields: [
    {
      name: 'menuItems',
      title: 'Additional Menu Items',
      type: 'array',
      description: 'Choose content from "Other Content" to be added to the menu in addition to: Home, Businesses/Services and Attractions',
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
            to: { type: 'contentPiece' }
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
      description: 'Text displayed at the very bottom of the homepage',
      type: 'string',
      fieldset: 'homepage'
    }, 
    {
      name: 'homepageBody',
      title: 'Homepage Content Source',
      description: 'Choose content from "Other Content" to be used as the main body text on the homepage',
      type: 'reference',
      to: { type: 'contentPiece' },
      fieldset: 'homepage'
    }, 
  ], 
  preview: {
    prepare() {
      return {title: 'Site Options'}
    }
  }
}