export default {
  name: 'coreContent',
  title: 'Core Content',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fieldsets: [
    {name: 'notificationBar', title: 'Notification Bar', options: {collapsible: true, collapsed: true}, description: 'Red notification bar which can be displayed at the top of the website. Option to add an external link or a post to connect to the "Learn More" button.'},
    {name: 'homepage', title: 'Homepage', options: {collapsible: true, collapsed: false}},
    {name: 'bbia', title: 'BBIA', options: {collapsible: true}}
  ],
  fields: [
    {
      name: 'notificationBarEnabled',
      title: 'Show Notification Bar',
      type: 'boolean',
      fieldset: 'notificationBar'
    },
    {
      name: 'notificationBarText',
      title: 'Notification Bar Text',
      type: 'string',
      fieldset: 'notificationBar'
    },
    {
      name: 'notificationBarLink',
      title: 'Notification Bar External Link',
      description: "Enter a URL to display a 'learn more' button in the notification bar",
      type: 'url',
      fieldset: 'notificationBar'
    },
    {
      name: 'notificationBarPost',
      title: 'Notification Bar Link to Post',
      description: "Choose a post, business or attraction display a 'learn more' button in the notification bar",
      type: 'reference',
      to: {type: 'post'},
      fieldset: 'notificationBar'
    },
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
  },
  initialValue: {
    notificationBarEnabled: false
  }
}