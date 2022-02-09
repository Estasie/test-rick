import React, {FC} from "react";
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import { IEpisodes } from "../../types/Episodes";

interface IEpisodesList {
  episodes: IEpisodes
}
const EpisodesList : FC<IEpisodesList> = (props) => {
  const {episodes} = props;

  return (
    <div className={"flex flex-wrap gap-6 items-center"}>
      {episodes.results.map((item) => {
        return (
          <EpisodeCard
            id={item.id}
            name={item.name}
            airDate={item["air_date"]}
            characters={item.characters}
            key={`${item.id}${item.name}`}
          />
        );
      })}
    </div>
  );
}

export default EpisodesList;
