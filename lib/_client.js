import { GraphQLClient } from 'graphql-request'

const hygraphClient = (preview = false) => {
  const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
  
  if (!endpoint || endpoint.includes('PLACEHOLDER_PROJECT_ID')) {
    throw new Error('Please configure NEXT_PUBLIC_HYGRAPH_ENDPOINT in your .env.local file with your actual Hygraph project endpoint')
  }

  return new GraphQLClient(endpoint, {
    headers: {
      ...(process.env.NEXT_PUBLIC_HYGRAPH_TOKEN && {
        Authorization: `Bearer ${
          preview
            ? process.env.HYGRAPH_PREVIEW_TOKEN
            : process.env.NEXT_PUBLIC_HYGRAPH_TOKEN
        }`
      })
    }
  })

}
  

export { hygraphClient }
