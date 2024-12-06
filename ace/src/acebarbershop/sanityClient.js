import { createClient } from '@sanity/client';

const sanityClient = createClient ({
    projectId: '7kd3ksnp',
    dataset: 'production',
    apiVersion: '2024-12-05',
    useCdn: true
})

export default sanityClient;