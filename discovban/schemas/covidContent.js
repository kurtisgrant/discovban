import business from './business'
import resource from './resource'

export default {
  name: 'covidContent',
  title: 'COVID-19 Content',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'covidBusinessNotices',
      title: 'COVID-19 Business Accommodations',
      type: 'array',
      of: [
        { name: 'notice', type: 'object', fieldsets: [
          { name: 'buttonSection', title: 'Button/Link (Optional)' }
        ], fields: [
          { name: 'business' , title: 'Business', type: 'reference', to: { type: 'business' } },
          { name: 'notice', title: 'Notice', type: 'text' },
          { name: 'text', title: 'Button Text', type: 'string', fieldset: 'buttonSection' },
          { name: 'url', title: 'Button URL', type: 'url', fieldset: 'buttonSection' }
        ],
      preview: {
        select: {
          title: 'business.name',
          subtitle: 'notice'
        }
      } }
      ]
    },
    {
      name: 'covidResources',
      title: 'COVID-19 Resources',
      type: 'array',
      of: [
        { type: 'resource' }
      ]
    }
  ], 
  preview: {
    prepare() {
      return {
        title: 'COVID-19 Content'
      }
    }
  }
}