import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { getCharacterData } from "../gqlRequests/fragments/getCharacterData";
import Loader from "../components/Loader/Loader";
import EpisodeCardSmall from "../components/EpisodeCard/EpisodeCardSmall";
import { ICharacter } from "../types/Episodes";
import { IEpisodeData } from "../types/Episodes";

interface ICharacterQuery {
  character: ICharacter;
}

interface ICharacterProps {
  id: string;
}

const Character: FC<ICharacterProps> = (props) => {
  const { id } = props;
  const { data, error, loading } = useQuery<ICharacterQuery>(getCharacterData, {
    variables: { characterId: `${id}` },
  });

  if (loading) return <Loader />;
  if (!data) return null;
  if(error) return <p>Something went wrong. ERROR: {error.message}</p>
  const character = data && data.character;
  const { status, name, gender, species, episode, image } = character;

  return (
    <div className={"container mx-auto mt-32 flex flex-col"}>
      <div className="flex">
        <img src={image} className={"inline-flex w-60 rounded-lg"} />
        <div className="pl-20">
          <h1 className="text-4xl font-bold text-headline">{name}</h1>
          <p className="py-2 text-lg text-paragraph">
            <span className="font-bold">Gender:</span> {gender}
          </p>

          <p className="pb-2 text-lg text-paragraph">
            <span className="font-bold">Species: </span>
            {species}
          </p>
          <p className="pb-2 text-lg text-paragraph">
            <span className="font-bold">Status: </span>
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
        <p className="py-6 text-2xl font-bold text-paragraph">
          Played in episodes
        </p>
        <div className="flex flex-wrap gap-3">
          {episode.map((episode: IEpisodeData) => {
            return (
              <EpisodeCardSmall
                key={episode.name}
                {...episode}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default Character;