import resource from './resource'

export default {
  name: 'covidContent',
  title: 'COVID-19 Content',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'covidResources',
      title: 'COVID-19 Resources',
      type: 'array',
      of: [
        { type: 'resource' }
      ]
    }, 
  ], 
  preview: {
    prepare() {
      return {
        title: 'COVID-19 Content'
      }
    }
  }
}