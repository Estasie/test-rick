import { gql } from "@apollo/client";

export const getCharacterData = gql`
  query getCharacterData($characterId: ID!) {
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
