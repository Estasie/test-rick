import { gql } from "@apollo/client";

export const GetEpisodes = gql`
  query Info {
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

export const GetEpisodeById = gql`
  query Episode($episodeId: ID!) {
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

export const GetCharacterData = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
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
      species
      status
      type
      episode {
        air_date
        created
        id
        name
        characters {
          id
          image
          name
        }
      }
    }
  }
`;
