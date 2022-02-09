import React from 'react';
import {useQuery} from "@apollo/client";
import {GetEpisode} from '../gqlRequests/getEpisodes'
import Loader from "../components/Loader/Loader";
import CharactersBar from "../components/CharactersBar/CharactersBar";
import CharacterThumb from "../components/thumb/CharacterThumb";

function Episode(props) {

    const {data, error, loading} = useQuery(GetEpisode, {
        variables: { "episodeId": `${props.id}` },
    });
    const charactersByLocationsHash = {
    }

    data.episode.characters.forEach(character => {
        const location = character.location.name;
        const characterName = character.name;
        const characterImage = character.image;
        const characterSpecies = character.species;
        const dataHash={
            name: characterName,
            image: characterImage,
            species: characterSpecies
        }
        if(charactersByLocationsHash[location]){
            charactersByLocationsHash[location].push(dataHash);
        }else{
            charactersByLocationsHash[location] = [dataHash];

        }
    })
    const locations = Object.keys(charactersByLocationsHash);

    if(loading) return <Loader />
    if(error) return `Something went wrong: ${error.message}`
    return (
       <div className={"flex m-16 flex-col"}>
           <div className={"flex flex-col"}>
               <h1 className={"text-xl font-bold"}>{data.episode.name}</h1>
               <p>{data.episode['air_date']}</p>
           </div>
           <div>
               {locations.map(location =>  {

                   return(
                       <div>
                           <p className={"text-lg font-bold text-paragraph"}> {location}</p>
                           <div className={"flex"}>{charactersByLocationsHash[location].map(character => {
                               return(
                                   <div className={"flex items-center flex-col p-4 justify-center text-center"}>
                                       <CharacterThumb key={character.image} src={character.image} />
                                       <p>{character.name}</p>
                                       <p>{character.species}</p>
                                   </div>
                               )
                           })}</div>
                       </div>
                   )

               })}
           </div>
       </div>
    )



}

export default Episode;