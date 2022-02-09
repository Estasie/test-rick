import React from "react";
import CharacterThumb from "../thumb/CharacterThumb";
import { iCharacterBar } from "../../types/Episodes";

function CharactersBar({ characters, count, names }: iCharacterBar) {
  return (
    <div className={"flex items-center flex-wrap"}>
      <div className={"characters-group flex-row-reverse"}>
        {characters.map((el) => {
          return <CharacterThumb key={el.id} id={el.id} src={el.image} />;
        })}
      </div>
      <p className={"text-xs"}>
        {names[0]}, {names[1]} and {count} more
      </p>
    </div>
  );
}

export default CharactersBar;
