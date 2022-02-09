import { Link } from "gatsby";
import React from "react";
import CharactersBar from "../CharactersBar/CharactersBar";
import { IEpisodeCardSmall } from "../../types/Episodes";

export default function EpisodeCardSmall({ name, id, characters, air_date }: IEpisodeCardSmall) {
  const fiveFirstCharacters = characters.slice(0, 6);
  const charactersCount = characters.length - 5;
  const names = [characters[1].name, characters[2].name];
  return (
    <Link to={`/episodes/${id}`}>
      <div className="card-small">
        <p className="w-full overflow-hidden font-bold font-paragraph text-ellipsis whitespace-nowrap">
          {name}
        </p>
        <p className="pb-4 text-sm">{air_date}</p>
        <CharactersBar
        key={charactersCount}
          characters={fiveFirstCharacters}
          count={charactersCount}
          names={names}
        />
      </div>
    </Link>
  );
}
