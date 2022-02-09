import React from "react";
import { useQuery } from "@apollo/client";
import { GetCharacterData } from "../gqlRequests/getEpisodes";
import Loader from "../components/Loader/Loader";
import EpisodeCardSmall from "../components/EpisodeCard/EpisodeCardSmall";

export default function Character(props) {
  const { data, error, loading } = useQuery(GetCharacterData, {
    variables: { characterId: `${props.id}` },
  });
 
  if (loading) return <Loader />;
  else {
    const status = data.character.status.toLowerCase();
    const name = data.character.name;
    const gender = data.character.gender.toLowerCase();
    const species = data.character.species.toLowerCase();
    const episodes = data.character.episode;
    return (
      <div className={"container mx-auto mt-32 flex flex-col"}>
        <div className="flex">
          <img src={data.character.image} className={"inline-flex w-60 rounded-lg"} />
          <div className="pl-20">
            <h1 className="text-4xl font-bold text-headline">
              {data.character.name}
            </h1>
            <p className="py-2 text-lg text-paragraph">
              <span className="font-bold">Gender:</span>{" "}
              {data.character.gender.toLowerCase()}
            </p>

            <p className="pb-2 text-lg text-paragraph">
              <span className="font-bold">Species:</span>{" "}
              {data.character.species.toLowerCase()}
            </p>
            <p className="pb-2 text-lg text-paragraph">
              <span className="font-bold">Status:</span>{" "}
              <span
                className={
                  status === "alive" ? " text-paragraph" : "text-warning"
                }
              >
                {status}
              </span>
            </p>
          </div>
        </div>
        <div className="py-12">
          <p className="py-6 text-2xl font-bold text-paragraph">Played in episodes</p>
          <div className="flex flex-wrap gap-3"> 
                {episodes.map(episode => {
                  return(
                    <EpisodeCardSmall key={episode.name} name={episode.name} id={episode.id} characters={episode.characters} air_date={episode.air_date} />
                  )
                })}
          </div>
        </div>
      </div>
    );
  }
}
