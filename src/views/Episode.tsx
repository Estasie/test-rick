import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { getEpisode } from "../gqlRequests/fragments/getEpisode";
import Loader from "../components/Loader/Loader";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import { getCharactersHash } from "../helpers/getCharactersHash";
import { ICharacter } from "../types/Episodes";

interface IEpisodeProps {
  id: string;
}

const Episode: FC<IEpisodeProps> = (props): JSX.Element => {
  const { id } = props;
  const { data, error, loading } = useQuery(getEpisode, {
    variables: { episodeId: `${props.id}` },
  });

  if (loading) return <Loader />;
  if (error) return <p>`Something went wrong: ${error.message}`</p>;
  if (!data) return null;

  const charactersByLocationsHash = data && getCharactersHash(data);
  const locations = data && Object.keys(charactersByLocationsHash);
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
                    (character: ICharacter) => {
                      return <CharacterCard key={character.id} {...character} />;
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
};

export default Episode;
