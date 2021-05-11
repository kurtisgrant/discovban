export default [
    {
      name: 'featuredSectionEnabled',
      title: 'Enabled',
      description: "Toggle to 'off' to disable the featured content section",
      type: 'boolean',
      fieldset: 'featuredContent'
    },
    {
      name: 'featuredSectionHeading',
      title: "Section Heading",
      type: 'string',
      fieldset: 'featuredContent'
    },
    {
      name: 'featured',
      title: 'Cards',
      description: 'Choose Posts, Businesses and/or Attractions to feature',
      type: 'array',
      of: [{
        type: 'object', 
        fields: [
          {
            name: 'article',
            title: 'Article',
            type: 'reference',
            to: [
              {type: 'business'},
              {type: 'attraction'},
              {type: 'post'}
            ]
          },
          {
            name: 'textOverride',
            title: 'Text Override',
            description: "Eg. 'This shop has all of the fishing supplies you'll need on your first fishing trip!' (If left blank, text will come from the article's 'details' field)",
            type: 'string'
          },
          {
            name: 'buttonText',
            title: 'Button Text',
            description: "Eg. 'Learn more' (If left blank, no button will be displayed, and the whole card will be clickable)",
            type: 'string'
          }
      ],
      preview: {
        select: {
          title: 'article.name',
          media: 'article.mainImage',
          type: 'article._type'
        },
        prepare(selection) {
          return {
            subtitle: (selection.type && selection.type.toUpperCase()),
            title: (selection.title ? selection.title : 'Unnamed'),
            media: selection.media
          }
        }
      }
    }],
      fieldset: 'featuredContent'
    }
  ]