export default {
  name: 'figure',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'image',
      title: 'Image File',
      type: 'image',
      options: {hotspot: true}
    },
    {
      name: 'alt',
      type: 'string',
      description: 'A brief description of the image for assessibility purposes. Screen readers use "alt" text to describe websites to visualy impared users.'
    }
  ]
}