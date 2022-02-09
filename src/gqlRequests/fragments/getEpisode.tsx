import { gql } from "@apollo/client";

export const getEpisode = gql`
  query getEpisode($episodeId: ID!) {
    episode(id: $episodeId) {
      air_date
      created
      episode
      id
      name
      characters {
        created
        gender
        id
        image
        location {
          created
          dimension
          id
          name
          type
        }
        name
        origin {
          created
          dimension
          id
          name
          type
        }
        species
        status
        type
      }
    }
  }
`;
