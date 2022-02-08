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
    console.log(data)

    if(loading) return <Loader />
    return (
       <div className={"flex m-16 justify-between"}>
           <div className={"flex flex-col"}>
               <h1 className={"text-xl font-bold"}>{data.episode.name}</h1>
               <p>{data.episode['air_date']}</p>
           </div>

           <div>
               {data.episode.characters.map(character => {
                   return(<>
                       <CharacterThumb src={character.image}/>
                       <p>{character.name}</p>
                   </>)
               })}
           </div>
       </div>
    )



}

export default Episode;