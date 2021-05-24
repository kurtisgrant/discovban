export default {
  name: 'business',
  title: 'Business',
  type: 'document',
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
      name: 'description',
      title: 'Description',
      description: 'One to three sentences describing the business if it is not obvious from reading the business name',
      type: 'text'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'businessCategory'}}],
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
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'name'
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        subtitle: 'Business'
    })}
  },
}
