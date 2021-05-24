import sanityClient from '@sanity/client';
import auth from './sanityAuth'

export default sanityClient({
  projectId: auth.projectId,
  dataset: auth.dataset,
  useCdn: false
})