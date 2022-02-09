import React, {FC} from "react";
import { IEpisodeCard } from "../../types/Episodes";
import { Link } from "gatsby";
import "./card.css";

import CharactersBar from "../CharactersBar/CharactersBar";

const EpisodeCard: FC<IEpisodeCard> = (props) => {
  const {id, airDate, characters, name} = props;
  // to show characters besides rick and morty
  const first5characters = characters.slice(2, 7);
  const charactersCount = characters.length - 5;
  const firstTwoNames = [characters[2].name, characters[3].name];

  return (
    <div className="relative">
      <Link
        to={`/episodes/${id}`}
        className={"absolute w-full h-full -p-6"}
      ></Link>
      <div className={"card"}>
        <p className={"text-paragraph font-bold text-base"}>{`Ep. ${id}`}</p>
        <div className={"flex flex-col"}>
          <p className={"text-headline font-bold text-lg"}>{name}</p>
          <p className={"text-paragraph text-sm"}>{airDate}</p>
        </div>
        <CharactersBar
          characters={first5characters}
          count={charactersCount}
          names={firstTwoNames}
        />
      </div>
    </div>
  );
}

export default EpisodeCard;
