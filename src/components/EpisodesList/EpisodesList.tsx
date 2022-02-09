import React from "react";
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import {IEpisodes} from '../../types/Episodes';

import { Link } from "gatsby";

function EpisodesList({ data }: {data: IEpisodes}) {
  return (
    <div className={"flex flex-wrap gap-6 items-center"}>
      {data.results.map((item) => {
        return (
          <Link to={item.id} key={item.id}>
            <EpisodeCard
              id={item.id}
              name={item.name}
              airDate={item["air_date"]}
              characters={item.characters}
              key={`${item.id}${item.name}`}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default EpisodesList;
