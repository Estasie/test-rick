import React from "react";
import { useQuery } from "@apollo/client";
import { GetEpisodeById } from "../gqlRequests/getEpisodes";
import Loader from "../components/Loader/Loader";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import { getCharactersHash } from "../helpers/getCharactersHash";
import { Character } from "../types/Episodes";

function Episode(props: { id: string }): JSX.Element {
  const { data, error, loading } = useQuery(GetEpisodeById, {
    variables: { episodeId: `${props.id}` },
  });

  if (loading) return <Loader />;
  if (error) return <p>`Something went wrong: ${error.message}`</p>;
  else {
    const charactersByLocationsHash = getCharactersHash(data);
    const locations = Object.keys(charactersByLocationsHash);
    return (
      <>
        <title>{data.episode.name}</title>
        <div className={"flex m-16 flex-col"}>
          <div className={"flex flex-col"}>
            <h1 className={"text-4xl font-bold"}>{data.episode.name}</h1>
            <p>{data.episode["air_date"]}</p>
          </div>
          <div>
            {locations.map((location) => {
              return (
                <div className="py-3" key={location}>
                  <p className={"text-lg font-bold mb-3 text-paragraph"}>
                    {location}
                  </p>
                  <div className={"flex gap-3 flex-wrap"}>
                    {charactersByLocationsHash[location].map(
                      (character: Character) => {
                        return (
                          <CharacterCard
                            id={character.id}
                            name={character.name}
                            species={character.species}
                            image={character.image}
                            key={character.image}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Episode;
