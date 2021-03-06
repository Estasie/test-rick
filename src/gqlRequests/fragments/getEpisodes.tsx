import { gql } from "@apollo/client";

export const getEpisodes = gql`
  query getEpisodes {
    episodes {
      results {
        air_date
        characters {
          gender
          id
          image
          name
          species
          status
          type
        }
        created
        episode
        id
        name
      }
    }
  }
`;