export default {
  name: 'coreContent',
  title: 'Core Content',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fieldsets: [
    {name: 'homepage', title: 'Homepage', options: {collapsible: true}},
    {name: 'bbia', title: 'BBIA', options: {collapsible: true}}
  ],
  fields: [
    {
      name: 'mainCoverText',
      title: 'Main Cover Text',
      type: 'string',
      fieldset: 'homepage'
    }, 
    {
      name: 'aboutBBIA',
      title: 'About the BBIA',
      type: 'blockContent',
      fieldset: 'bbia'
    }, 
  ], 
  preview: {
    prepare() {
      return {title: 'Core Content'}
    }
  }
}