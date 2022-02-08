import {gql} from "@apollo/client";

export const getEpisodes = gql`
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
  }`

export const GetEpisode = gql`
  query Episode($episodeId: ID!) {
  episode(id: $episodeId) {
    air_date
    characters {
      created
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
  `