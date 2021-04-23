import resource from './resource'

export default {
  name: 'coreContent',
  title: 'Core Content',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fieldsets: [
    {name: 'homepage', title: 'Homepage', options: {collapsible: true}},
    {name: 'bbia', title: 'BBIA', options: {collapsible: true}},
    {name: 'covid', title: 'COVID-19', options: {collapsible: true}}
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
    {
      name: 'covidResources',
      title: 'COVID-19 Resources',
      fieldset: 'covid',
      type: 'array',
      of: [
        resource
      ]
    }, 
  ], 
  preview: {
    prepare() {
      return {title: 'Core Content'}
    }
  }
}