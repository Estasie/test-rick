import { Link } from "gatsby";
import React, { FC } from "react";
import CharactersBar from "../CharactersBar/CharactersBar";
import { IEpisodeCardSmall } from "../../types/Episodes";

const EpisodeCardSmall: FC<IEpisodeCardSmall> = (props) => {
  const { name, id, characters, air_date } = props;

  const fiveFirstCharacters = characters.slice(0, 6);
  const charactersCount = characters.length - 5;
  const names = [characters[1].name, characters[2].name];

  return (
    <div className="relative">
      <Link
        to={`/episodes/${id}`}
        className={"absolute w-full h-full -p-6"}
      ></Link>
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
    </div>
  );
};

export default EpisodeCardSmall;
