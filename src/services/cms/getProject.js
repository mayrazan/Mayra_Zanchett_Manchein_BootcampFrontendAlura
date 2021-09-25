import { CMSGraphQLClient, gql } from './CMSGraphQLClient';

export async function getProjects({ preview }) {
  const query = gql`
    query {
      allProjects {
        description
        id
        title
        ishighlight
        image {
          alt
          id
          url
        }
      }
    }
  `;
  const client = CMSGraphQLClient({ preview });

  const response = await client.query({ query });

  return response.data.projects.allProjects;
}

export async function getProject({ preview }, title) {
  const query = gql`
    query getProject($title: String!) {
      allProjects(filter: { title: { eq: $title } }) {
        description
        id
        title
        link
        image {
          alt
          id
          url
        }
      }
    }
  `;
  const client = CMSGraphQLClient({ preview });
  const response = await client.query({ query, variables: { title } });
  return response.data.projects.allProjects;
}
