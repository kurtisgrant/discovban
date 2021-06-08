export default {
  name: 'listing',
  title: 'Listing',
  type: 'document',
  fieldsets: [
    {
    name: 'contact', 
    title: 'Contact Info',
    options: {collapsible: true, collapsed: true}
  }, 
  {
    name: 'socials', 
    title: 'Social Media & Links',
    options: {collapsible: true, collapsed: true}
  }
],
  fields: [
    {
      name: 'memberStatus',
      title: 'BBIA Membership',
      type: 'boolean'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'description',
      title: 'Description',
      description: 'One to three sentences describing the business/organization if it is not obvious from reading the name',
      type: 'text'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'listingCategory'}}],
    },
    {
      name: 'locale',
      title: 'Locale',
      type: 'reference', 
      to: [{type: 'locale'}]
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      fieldset: 'contact'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      fieldset: 'contact'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      fieldset: 'contact'
    },
    {
      name: 'facebook',
      title: 'Facebook Page',
      type: 'url',
      fieldset: 'socials'
    },
    {
      name: 'instagram',
      title: 'Instagram Account',
      type: 'url',
      fieldset: 'socials'
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      fieldset: 'socials'
    }
  ],
  preview: {
    select: {
      title: 'name'
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        subtitle: 'Listing'
    })}
  },
}
