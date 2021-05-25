import sanityClient from '@sanity/client';
import auth from './sanityAuth'

export default sanityClient({
  projectId: auth.projectId,
  dataset: auth.dataset,
  apiVersion: auth.apiVersion,
  useCdn: false
})